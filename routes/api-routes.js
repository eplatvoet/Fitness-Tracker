const router = require('express').Router();
const db = require('../models');

//POST WORKOUT
router.post('/api/workouts', (req, res) => {
  db.Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//
router.put('/api/workouts/:id', ({ body, params}, res) => {
  db.Workout.findByIdAndUpdate(
      { _id: params.id }, 
      { $push: { exercises: body } }, 
      { new: true, runValidators: true })
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//GET ALL WORKOUTS
router.get('/api/workouts', (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//GET WORKOUTS FROM RANGE
router.get('/api/workouts/range', ({ query }, res) => {
  db.Workout.find(
      { day: { $gte: query.start, $let: query.end } })
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//DELETE WORKOUT BY ID
router.delete('/api/workouts', ({}, res) => {
  // Find document with id passed in as part of data
  // Look into mongoose doc for a method to perform both to find document with id and delete it
  // Review the front end javascript code to understand how document id is passed to back end
  // Fill in the input argument(s) to the method

  db.Workout.findOneAndDelete({ _id: params.id })

    // Fill in .then() with call back function that takes no input argument and send boolean 'true' back to browser
    .then(() => {
        res.json(true);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;