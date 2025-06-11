import sqlite3
import os

# Create instance folder if not exists
os.makedirs("instance", exist_ok=True)

# Connect to SQLite database
conn = sqlite3.connect("instance/users.db")
cursor = conn.cursor()

# Create Users table
cursor.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL,  -- admin, customer, driver
    mobile TEXT,
    name TEXT,
    is_approved INTEGER DEFAULT 1  -- 1 = approved, 0 = pending
)
''')

# Insert sample users
sample_users = [
    ('admin1', 'adminpass', 'admin', None, 'Admin User', 1),
    ('manager1', 'managerpass', 'manager', None, 'Manager User', 1),
    ('finance1', 'financepass', 'finance', None, 'Finance User', 1),
    ('driver1', 'driverpass', 'driver', '9876543210', 'Rajesh Driver', 1),
    ('customer1', 'customerpass', 'customer', '9876501234', 'John Customer', 1),
]

cursor.executemany('''
INSERT OR IGNORE INTO users (username, password, role, mobile, name, is_approved)
VALUES (?, ?, ?, ?, ?, ?)
''', sample_users)

conn.commit()
conn.close()
print("Database initialized with sample users.")