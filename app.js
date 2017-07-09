const fs = require('fs');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Todos = require('./models/todos');

const app = express();

// var todos = mongoose.model('Todos', todosSchema);
// module.exports = Todo;
mongoose.Promise = require('bluebird');
//create db named cdcdb
mongoose.connect('mongodb://localhost:27017/cdcdb');

app.use('/static', express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/static/index.html");
});

// put routes here
// create api endpoint
// GET /api/todos/ - return a JSON array of todo items
app.get('/api/todos', function (req, res) {
  Todos.find({}).then(function(results){
    res.json(results);
  });
});

// POST /api/todos/ - post a JSON representation of a todo and have it saved. Returns the saved todo item in JSON.
app.post('/api/todos', function (req, res) {
  var todo = new Todos ({
    title: req.body.title,
    order: req.body.order,
    completed: req.body.completed
  });
    todo.save();
    res.json(Todos);
});

// GET /api/todos[/id] - get a specific todo item.
app.get('/api/todos/:id', function(req, res) {
  var id = req.params.id;
   Todos.find({_id: id}).then(function(tempTodo) {
    console.log(tempTodo);
    res.json(tempTodo);
  });
});

// PUT /api/todos[/id] - update a todo item. Returns the modified todo item.
app.put('/api/todos/:id', function(req, res) {
  var id = req.params.id;
  var todo = Todos.find({_id: id}).then(function(todoItem) {

    res.json(todo);

  });
});

// PATCH /api/todos[/id] - partially update a todo item. Returns the modified todo item.
app.patch('/api/todos/:id', function(req, res) {
  var id = req.params.id;
  var todo = Todos.find({_id: id}).then(function(todoItem) {
    return todoItem.id === id;
  });
  res.json(todo);
});

// DELETE /api/todos[/id] - deletes a todo item. Returns the todo item that was deleted.
app.delete('/api/todos/:id', function(req, res) {
  var id = req.params.id;
  var todo = Todos.find({_id: id}).then(function(todoItem) {
    return todoItem.id === id;
  });
    res.json(todo);
});

// const todo = new Todos({
//   title: 'Finish Assessment'
//   , order: 1
//   , completed: false
// });
//
// todo.save();

app.listen(3000, function () {
    console.log('Express running on http://localhost:3000/.');
});
