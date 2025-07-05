body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.login-container, .form-container, .dashboard {
  max-width: 400px;
  margin: 100px auto;
  padding: 40px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.login-container h2, .form-container h2 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-weight: 600;
}

input, button {
  width: 100%;
  padding: 12px;
  margin-top: 15px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  cursor: pointer;
  border: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

button:active {
  transform: translateY(0);
}

#error {
  color: #e74c3c;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
}

/* Admin Dashboard Styles */
.admin-dashboard {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  min-height: 100vh;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 2px solid #f0f0f0;
  margin-bottom: 30px;
}

.dashboard-header h1 {
  color: #333;
  margin: 0;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logout-btn {
  width: auto;
  padding: 8px 16px;
  margin: 0;
  background: #e74c3c;
  font-size: 12px;
}

.logout-btn:hover {
  background: #c0392b;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.stat-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.stat-card h3 {
  margin: 0 0 10px 0;
  font-size: 16px;
  opacity: 0.9;
}

.stat-number {
  font-size: 36px;
  font-weight: bold;
  margin: 0;
}

.management-section {
  margin-bottom: 40px;
}

.management-section h2 {
  color: #333;
  margin-bottom: 20px;
}

.user-list {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
}

.user-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #e9ecef;
}

.user-item:last-child {
  border-bottom: none;
}

.role-badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.role-badge.admin { background: #e74c3c; color: white; }
.role-badge.manager { background: #f39c12; color: white; }
.role-badge.driver { background: #27ae60; color: white; }
.role-badge.customer { background: #3498db; color: white; }

.action-btn {
  width: auto;
  padding: 6px 12px;
  margin: 0;
  background: #6c757d;
  font-size: 12px;
}

.quick-actions h2 {
  color: #333;
  margin-bottom: 20px;
}

.action-buttons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.primary-btn {
  width: auto;
  padding: 12px 24px;
  margin: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Driver Dashboard Styles */
.dashboard {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.dashboard h2 {
  color: #333;
  margin-bottom: 20px;
}

#tripInfo {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

#tripInfo h3 {
  color: #667eea;
  margin-top: 0;
}

#licenseAlert {
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  background: #fff3cd;
  border: 1px solid #ffeaa7;
}

/* Responsive Design */
@media (max-width: 768px) {
  .admin-dashboard {
    padding: 10px;
  }
  
  .dashboard-header {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .action-buttons {
    flex-direction: column;
  }
  
  .user-item {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
}
