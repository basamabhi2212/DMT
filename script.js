// User database - in a real app, this would be on a backend
const users = {
  'admin1': { password: 'adminpass', role: 'admin', name: 'Admin User' },
  'manager1': { password: 'managerpass', role: 'manager', name: 'Manager User' },
  'finance1': { password: 'financepass', role: 'finance', name: 'Finance User' },
  'driver1': { password: 'driverpass', role: 'driver', name: 'Rajesh Driver' },
  'customer1': { password: 'customerpass', role: 'customer', name: 'John Customer' },
  'basam': { password: 'Basam@2212', role: 'admin', name: 'Basam Admin' }
};

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorElement = document.getElementById('error');
  
  // Clear previous error
  errorElement.textContent = '';
  
  // Validate input
  if (!username || !password) {
    errorElement.textContent = 'Please enter both username and password';
    return;
  }
  
  // Check credentials
  const user = users[username];
  if (user && user.password === password) {
    // Store user session
    localStorage.setItem('currentUser', JSON.stringify({
      username: username,
      role: user.role,
      name: user.name
    }));
    
    // Redirect based on role
    if (user.role === 'driver') {
      // Store driver data for dashboard
      localStorage.setItem('driver', JSON.stringify({
        name: user.name,
        driverId: username.toUpperCase(),
        licenseNumber: 'KA19-20200101',
        expiryDate: '2025-12-31',
        qrCode: 'driver_qr.png'
      }));
      window.location.href = 'dashboard.html';
    } else {
      // For admin, manager, finance, customer - redirect to admin panel
      window.location.href = 'admin.html';
    }
  } else {
    errorElement.textContent = 'Invalid username or password';
  }
}

// Allow Enter key to submit
document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        login();
      }
    });
  });
});
