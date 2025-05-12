const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3000;

app.use(cors())

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
})

app.listen(port, () => {
    console.log(`users sever running on port ${port}`);
})