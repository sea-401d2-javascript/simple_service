'use strict';

const app = require('express')();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Person = require('./models/person');

mongoose.connect('mongodb://localhost/dev');

app.use(require('body-parser').json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.route('/people')
  .get((req, res) => {
      Person.find({}, (err, people) => {
        if (err) return res.send(err)
        res.json({people}); //{people: people}
      });
    })
  .post((req, res) => {
    var newPerson = new Person(req.body);
    newPerson.save((err, person) => {
      res.json(person);
    })
  })

app.route('/people/:id')
  .put((req, res) => {
    Person.findByIdAndUpdate(req.params.id, req.body, (err, person) => {
      if (err) return res.send(err);
      console.log(req.body, person)
      res.send('updated');
    })
  })
  .delete((req, res) => {
    Person.findByIdAndRemove(req.params.id, (err, something) => {
      if (err) return res.send(err);

      res.send('deleted')
    })
  })

app.listen(port, () => console.log(`Server up on ${port}`));
