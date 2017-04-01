var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  name: {type: String, required: true},
})
var PollSchema = new mongoose.Schema({
  question: {type: String, required: true, minlength: 8},
  option1: {type: String, required: true, minlength: 3},
  option2: {type: String, required: true, minlength: 3},
  option3: {type: String, required: true, minlength: 3},
  option4: {type: String, required: true, minlength: 3},
  votes1: {type: Number, required: true, default: 0},
  votes2: {type: Number, required: true, default: 0},
  votes3: {type: Number, required: true, default: 0},
  votes4: {type: Number, required: true, default: 0},
  _user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true})

mongoose.model('User', UserSchema);
mongoose.model('Poll', PollSchema);
