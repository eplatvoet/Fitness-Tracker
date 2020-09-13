const router = require('express').Router();
const db = require('../models');
const { red } = require('color-name');

// Use 'db.Workout' to refernce the model and use the methods provided with the model to execute database operatioms

router.post('/api/workouts', (req, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.put('/api/workouts/:id', (req, res) => {
  db.Workout.find({ new: true, runValidators: true })
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get('/api/workouts', (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get('/api/workouts/range', (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .limit(7)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.delete('/api/workouts', ({ body }, res) => {
  // Find document with id passed in as part of data
  // Look into mongoose doc for a method to perform both to find document with id and delete it
  // Review the front end javascript code to understand how document id is passed to back end
  // Fill in the input argument(s) to the method

  db.Workout.findOneAndDelete({ _id: id })

    // Fill in .then() with call back function that takes no input argument and send boolean 'true' back to browser
    .then()

    // Fill in .catch() with call back function that takes error as input argument and send it back to browser
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;