const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello, Starting the new milestone')
});

const users = [
    { id: 1, name: 'Halum', email: "halum@gmail.com", phone: '01713971333' },
    { id: 2, name: 'Malum', email: "halum1@gmail.com", phone: '01713971333' },
    { id: 3, name: 'Khalum', email: "halum2@gmail.com", phone: '01713971333' },
    { id: 4, name: 'Jhalum', email: "halum3@gmail.com", phone: '01713971333' },
    { id: 5, name: 'Talum', email: "halum4@gmail.com", phone: '01713971333' },
    { id: 6, name: 'Kalum', email: "halum5@gmail.com", phone: '01713971333' },
    { id: 7, name: 'Salum', email: "halum6@gmail.com", phone: '01713971333' },
    { id: 8, name: 'Lalum', email: "halum7@gmail.com", phone: '01713971333' }
]

app.get('/users', (req, res) => {
    res.send(users)
});

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.listen(port, () => {
    console.log('listen', port)
})