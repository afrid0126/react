const express = require('express');
constmysql = require('mysql2');
// Create Express app
const app = express();
// Middleware to parse JSON
app.use(express.json());
// MySQL connection configuration
constdb = mysql.createConnection({
    host: 'localhost', // MySQL host
    user: 'root', // MySQL username
    password: 'Mysqlroot1', // MySQL password
    database: 'testdatabase' // Database name
});
// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('❌ Database connection failed:', err.stack);
        return;
    }
    console.log('✅ Connected to MySQL database.');
});
// Test route
app.get('/', (req, res) => {
    res.send('✅ API is running and connected to MySQL database!');
});


// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(` Server running on http://localhost:${PORT}`);
});

/*1. Make sure your MySQL server is running.
2. Make sure the database testdatabase exists (or create it using MySQL CLI or
Workbench):
CREATE DATABASE testdatabase;
3. Run your API:
node app.js
4. Test the API
 Open your browser or Postman:
http://localhost:3000/
Expected Output:
✅ API is running and connected to MySQL database!
 Console Output:
✅ Connected to MySQL database.
 Server running on http://localhost:3000 */