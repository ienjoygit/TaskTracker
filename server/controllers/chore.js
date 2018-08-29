const Chore = require('../models/chore');
const User = require('../models/user');

exports.getUserChores = [
  function (req, res, next) {
    Chore.find({
      // userId: req.user._id
      userId: 4
    }).then((chores) => {
      res.send({
        chores
      });
    }, e => {
      res.status(400).send(e);
    });
  }
];

exports.getChore = [
  function (req, res, next) {
    const id = req.params.id;

    Chore.findOne({
      _id: id
    }).then((chore) => {
      if (!chore) {
        return res.status(404).send();
      }
      res.send({
        chore
      });

    }).catch(e => {
      res.status(400).send();
    });
  }
];

exports.deleteChore = [
  function (req, res, next) {
    const id = req.params.id;

    Chore.findOneAndRemove({
      _id: id,
    }).then((chore) => {
      if (!chore) {
        return res.status(404).send();
      }
      res.send({
        chore
      });

    }).catch(e => {
      res.status(400).send();
    });
  }
];

exports.addChore = [
  function (req, res, next) {
    const chore = new Chore({
      name: req.body.name,
      description: req.body.description,
      // groupId: req.params.id,
      groupId: 1,
      // userId: req.user._id,
      userId: 4,
      deadline: req.body.deadline,
      estTime: req.body.estTime,
      completed: false
    });

    chore.save().then((newChore) => {
      res.send(newChore);
    }, e => {
      res.status(400).send(e);
    });
  }
];

exports.updateChore = [
  function (req, res, next) {
    const id = req.params.id;

    Chore.findOne({
      _id: id,
    }).then((chore) => {
      if(!chore) {
        return res.status(404).send();
      }
      chore.name = req.body.name;
      chore.description = req.body.description;
      chore.deadline = req.body.deadline;
      chore.estTime = req.body.estTime;
      chore.completed = req.body.completed;
      chore.userId = req.body.userId;

      chore.save().then((updatedChore) => {
        res.send(updatedChore);
      }, e => {
        res.status(400).send(e);
      });
    });
  }
];