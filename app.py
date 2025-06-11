from flask import Flask, request, render_template, redirect, url_for, session
import utilities

app = Flask(__name__)
app.secret_key = 'your_secret_key_here'

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['basam']
        password = request.form['Basam@2212']
        user = utilities.authenticate_user(username, password)
        if user:
            session['user'] = user
            return redirect(url_for('dashboard'))
        else:
            return "Invalid credentials", 401
    return render_template('login.html')

@app.route('/dashboard')
def dashboard():
    if 'user' not in session:
        return redirect(url_for('login'))
    user = session['user']
    return f"Welcome {user['name']} ({user['role']})! <br><a href='/logout'>Logout</a>"

@app.route('/logout')
def logout():
    session.pop('user', None)
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True)
