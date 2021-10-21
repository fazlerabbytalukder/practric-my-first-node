const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
//dtat fetch er problem dur korar jonno corns jeta dite hoy oi duita
app.use(cors());
app.use(express.json());



const users = [
    { id: 0, name: 'Rabby', email:'rabby@gmail.com'},
    { id: 1, name: 'Pranto', email:'pranto@gmail.com'},
    { id: 2, name: 'Supto', email:'supto@gmail.com'},
    { id: 3, name: 'Hasib', email:'hasib@gmail.com'}
]

//colsole e dekhar jonno 1st node code
app.get('/', (req, res) => {
    res.send('practric node first time');
})


//sob gula users k show koranor jonno
// app.get('/users', (req, res) => {
//     res.send(users);
// })

//id diye user ber kore oi id wola user k show koranor jonno
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];

    res.send(user);
})


//search e je nam dibo oi tai sudhu show korbe...
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    } else {
        res.send(users);
    }
})



//data newoa and dewoa
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    res.json(newUser);
})


//last e dite hoy
app.listen(port, () => {
    console.log('listen to port',port);
})