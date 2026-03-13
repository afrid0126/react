// crud.js
const express = require('express');
const app = express();
const port = 3000;
// Middleware to parse JSON data from requests
app.use(express.json());
// Sample in-memory "database"
let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
];
// ---------------------------
// CREATE: Add a new user
// ---------------------------
app.post('/users', (req, res) => {
    constnewUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser);
    res.status(201).json({ message: 'User added successfully', user: newUser });
});
// ---------------------------
// READ: Get all users
// ---------------------------
app.get('/users', (req, res) => {
    res.json(users);
});
// ---------------------------
// READ (Single User): Get user by ID
// ---------------------------
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }


    res.json(user);
});
// ---------------------------
// UPDATE: Update user by ID
// ---------------------------
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    res.json({ message: 'User updated successfully', user });
});
// ---------------------------
// DELETE: Remove user by ID
// ---------------------------
app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.json({ message: 'User deleted successfully' });
});
// Default route for the homepage
app.get('/', (req, res) => {
    res.send('<h2>Welcome to the Express CRUD API!</h2><p>Use /users endpoints tointeract.</p > ');
});
// Start the server
app.listen(port, () => {
    console.log(`CRUD server running at http://localhost:${port}`);
});

/*1. Open Visual Studio Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for “Thunder Client” and install it.
4. Open Thunder Client from the sidebar (it looks like a thunderbolt ⚡).
5. Click “New Request”
o Choose POST
o Enter the URL: http://localhost:3000/users
6. Click Body → JSON and paste:
7. {
8. "name": "Charlie",
9. "email": "charlie@example.com"
10. }
11. Click Send
✅ Expected Response:
{
"message": "User added successfully",
"user": {
"id": 3,
"name": "Charlie",
"email": "charlie@example.com"
}
}

FULL STACK DEVELOPMENT-II

----------------------------------------------------------------------------------------------------------------
 3. PUT /users/:id
Purpose: Update an existing user
Type: PUT request
URL: http://localhost:3000/users/1
Body (JSON):
{
"name": "Alice Updated",
"email": "alice.new@example.com"
}
✅ Expected Output
{
"message": "User updated successfully",
"user": {
"id": 1,
"name": "Alice Updated",
"email": "alice.new@example.com"
}
}

FULL STACK DEVELOPMENT-II

 4. DELETE /users/:id
Purpose: Delete a user
Type: DELETE request
URL: http://localhost:3000/users/2
✅ Expected Output
{
"message": "User deleted successfully"
}"*/