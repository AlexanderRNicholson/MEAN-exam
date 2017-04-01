var mongoose = require('mongoose');
var User = mongoose.model('User');
var Poll = mongoose.model('Poll');

module.exports = {
  login: function(req, res){
    var user = new User(req.body);
    user.save(function(err, data){
      if(err){
        console.log(err);
        res.status(400).send("User not created")
      }
      else{
        req.session.user = data;
        console.log("in server controller, printing off session user ", req.session.user);
        res.sendStatus(200);
      }
    })
  },
  logout: function(req, res){
    req.session.destroy();
    res.redirect('/')
  },
  current: function(req, res){
      if(req.session.user){
        res.json(req.session.user);
      }else{
        res.status(401).send("No user in session.")
      }
    },
    addPoll: function(req, res){
      var poll = new Poll(req.body);
      poll._user = req.session.user._id;
      poll.save(function(err, data){
        if(err){
          res.status(400).send("Poll didn't save.")
        }
        else{
          res.sendStatus(200);
        }
      })
    },
    getPolls: function(req, res){
      Poll.find({}).populate('_user').exec(function(err, data){
        if(err){
          console.log(err);
          res.status(400).send("In server controller, problem getting polls.")
        }
        else{
          res.json(data)
        }
      })
    },
    showPoll: function(req, res){
      console.log('in server controller');
      Poll.findOne({_id: req.params.id}, function(err, data){
        if(err){
          res.status(400).send("In server controller, didn't find Poll.")
        }
        else{
          console.log('HEY WHATS UP', data);
          res.json(data);
          console.log(data);
        }
      })
    },
    vote1: function(req, res){
      console.log('in server controller');
      Poll.findOne({option1: req.params.id}, function(err, poll){
        if(err){
          res.status(400).send("In server controller, didn't find option.")
        }
        else{
         poll.votes1++
          console.log('here is your data', poll);
          poll.save(function(err, saved_poll){
            if(err){
              res.status(400).send(err);
            }
            else{
              res.sendStatus(200);
            }
          })
        }
      })
    },
    vote2: function(req, res){
      console.log('in server controller');
      Poll.findOne({option2: req.params.id}, function(err, poll){
        if(err){
          res.status(400).send("In server controller, didn't find option.")
        }
        else{
         poll.votes2++
          console.log('here is your data', poll);
          poll.save(function(err, saved_poll){
            if(err){
              res.status(400).send(err);
            }
            else{
              res.sendStatus(200);
            }
          })
        }
      })
    },
    vote3: function(req, res){
      console.log('in server controller');
      Poll.findOne({option3: req.params.id}, function(err, poll){
        if(err){
          res.status(400).send("In server controller, didn't find option.")
        }
        else{
         poll.votes3++
          console.log('here is your data', poll);
          poll.save(function(err, saved_poll){
            if(err){
              res.status(400).send(err);
            }
            else{
              res.sendStatus(200);
            }
          })
        }
      })
    },
    vote4: function(req, res){
      console.log('in server controller');
      Poll.findOne({option4: req.params.id}, function(err, poll){
        if(err){
          res.status(400).send("In server controller, didn't find option.")
        }
        else{
         poll.votes4++
          console.log('here is your data', poll);
          poll.save(function(err, saved_poll){
            if(err){
              res.status(400).send(err);
            }
            else{
              res.sendStatus(200);
            }
          })
        }
      })
    },
    deletePoll: function(req, res){
      Poll.findOne({_id: req.params.id}, (function(err, poll){
        if(err){
          console.log(err);
          res.status(400).send(err);
        }
        else{
          poll.remove();
          res.sendStatus(200);
        }
      }))
    },
}
