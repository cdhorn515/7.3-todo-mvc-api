var mongoose = require('mongoose');
//calling Schema method in mongoose module
//defining schema, step 1
var todosSchema = new mongoose.Schema({
  title: {
    type: String,
    default: '',
    unique: true
  },
  order: Number,
  completed: {
    type: Boolean,
    default: false
  }
});
//todos is name of the collection that we give--step 2
const Todos = mongoose.model('Todos', todosSchema);

module.exports = Todos;
