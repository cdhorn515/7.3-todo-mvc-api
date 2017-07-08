var mongoose = require('mongoose');
//calling Schema method in mongoose module
//defining schema, step 1--line 4-17:
var todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  order: NUMBER,
  completed: false
});
//Recipe is name of the collection that we give--step 2
var Todo = mongoose.model('Todos', todoSchema);

module.exports = Todo;

/*
var mongoose = require('mongoose');
//calling Schema method in mongoose module
//defining schema, step 1--line 4-17:
var recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  prepTime: Number,
  cookTime: Number,
  ingredients: [{
        amount: { type: Number, required: true, default: 1 },
        name: { type: String, required: true }
    }],
    instructions: [String],
});
//Recipe is name of the collection that we give--step 2
var Recipe = mongoose.model('Recipe', recipeSchema);
*/
