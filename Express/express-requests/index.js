const express = require('express');

const app = express();
app.listen(8080);

app.use((req, res, next) => {
    const logEntry = `host: ${req.hostname}
    ip: ${req.ip}
    method: ${req.method}
    path: ${req.path}
    time: ${new Date()}`;
    console.log(logEntry);
    next();
});

app.get('/', (req, res) => res.send('Hello, my name is Muhammad!'));

app.get('/test', (req, res) => res.send('Hello, World!'));

let names = ['JH', 'Chris', 'Rhys', 'Dale', 'Bob'];

app.get('/getAll', (req, res) => res.send(names));

app.get('/get/:id', (req, res) => res.send(names[req.params.id]));

app.get('/delete/:id', (req, res) => {
    res.send(names.splice(req.params.id, 1));
});

app.use(express.json());    //Put BEFORE request handling

app.post('/create', (req, res) => {
    const name = req.body.name;
    names.push(name);
    res.status(201).send(`${name} added successfully`);
});

app.patch('/update/:id', (req, res) => {
    const id = req.params.id;
    console.log('id: ', id);
    const name = req.query.name;
    console.log('Name: ', name);
    names[id] = name;
    res.status(200).send(`${name} updated successfully`);
})