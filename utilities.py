import sqlite3

DB_PATH = "instance/users.db"

def get_user(username):
    """Fetch user by username"""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE username=?", (username,))
    user = cursor.fetchone()
    conn.close()
    return user

def authenticate_user(username, password):
    """Authenticate user by checking username and password"""
    user = get_user(username)
    if user and user[2] == password:  # index 2 is password field
        return {
            "username": user[1],
            "role": user[3],
            "name": user[5]
        }
    return None

def get_all_users():
    """Get all users for admin management"""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("SELECT id, username, role, mobile, name, is_approved FROM users")
    users = cursor.fetchall()
    conn.close()
    return users

def approve_user(user_id, approve=True):
    """Approve or block a user"""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("UPDATE users SET is_approved=? WHERE id=?", (1 if approve else 0, user_id))
    conn.commit()
    conn.close()