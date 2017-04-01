var second_belt_exam = require('./../controllers/second_belt_exam.js')

module.exports = function(app){

  app.post('/login', second_belt_exam.login);
  app.get('/logout', second_belt_exam.logout);
  app.use(authenticateUser);
  app.get('/current', second_belt_exam.current);
  app.post('/addPoll', second_belt_exam.addPoll);
  app.get('/polls', second_belt_exam.getPolls);
  app.get('/poll/:id', second_belt_exam.showPoll);
  app.get('/vote1/:id', second_belt_exam.vote1);
  app.get('/vote2/:id', second_belt_exam.vote2);
  app.get('/vote3/:id', second_belt_exam.vote3);
  app.get('/vote4/:id', second_belt_exam.vote4);
  app.delete('/delete/:id', second_belt_exam.deletePoll)

}

function authenticateUser(req, res, next){
  if(req.session.user){
    next();
  }
  else {res.sendStatus(401);
  }
}
