const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

app.post('/api/todos', (req, res) => {
  res.send(req.body.todos);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);