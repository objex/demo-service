// Sample REST Service
const express = require('express');

const app = express();

const PORT = 5555;
const USERS = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Smith',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Williams',
  },
];

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/users', (req, res) => {
  res.json(USERS);
});

app.get('/users/:userId', (req, res) => {
  res.json(USERS.find((user) => user.id === parseInt(req.params.userId, 10)));
});

module.exports = {
  app,
};
