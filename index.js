const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

const users = [
    {id:1, name: 'Sabina', email: 'sabina@gamil.com'},
    {id:2, name: 'sabnoor', email: 'sabnoor@gamil.com'},
    {id:3, name: 'Sabila', email: 'sabila@gamil.com'},
]

app.get('/', (req, res) => {
res.send('Server is running')
})

app.get('/users', (req, res) => {
    res.send(users)
})
app.post('/users', (req, res) => {
    console.log('users post method');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1
    users.push(newUser)
    res.send(newUser)
})

app.listen(port, () => {
    console.log(`users sever running on port ${port}`);
})