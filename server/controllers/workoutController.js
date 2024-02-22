const { Workout, Session } = require('../models/workoutModels');

const workoutController = {};

workoutController.getWorkout = (req, res, next) => {
  Workout.find({})
    .then((workouts) => {
      res.locals.workouts = workouts;
      return next();
    })
    .catch((err) =>
      next({
        log: err + 'Error occurred on workoutController.getWorkout',
        status: 500,
        message: { err: 'An error occurred' },
      })
    );
};

workoutController.addWorkout = (req, res, next) => {
  const { level, wallType, crimp, sloper, jug, pinch, pocket, sent } = req.body;

  //   if (!level || !wallType || !crimp) {
  //     return next({
  //       log: 'Error occured on StudentController.createStudent: bad request',
  //       status: 400,
  //       message: {
  //         err: 'First name, last name and age are required to create new student',
  //       },
  //     });
  //   }
  Workout.create({ level, wallType, crimp, sloper, jug, pinch, pocket, sent })
    .then((workout) => {
      // console.log(workout);
      res.locals.workout = workout;
      return next();
    })
    .catch((error) =>
      next({
        log: error + ': Error occured on workoutController.addWorkout ',
        message: { err: 'Could not create workout' },
      })
    );
};

workoutController.getSession = (req, res, next) => {
  Session.find({})
    .then((sessions) => {
      res.locals.sessions = sessions;
      return next();
    })
    .catch((err) =>
      next({
        log: err + 'Error occurred on workoutController.getSession',
        status: 500,
        message: { err: 'An error occurred' },
      })
    );
};

workoutController.updateSession = (req, res, next) => {
  const { attempts, sends, peak, date } = req.body;

  Session.findOneAndUpdate(
    { date },
    { attempts, sends, peak },
    {
      new: true,
      upsert: true,
    }
  )
    .then((session) => {
      res.locals.session = session;
      console.log('session updated!' + session);
      return next();
    })
    .catch((error) =>
      next({
        log: error + ': Error occured on workoutController.updateSession ',
        message: { err: 'Could not update session' },
      })
    );
};

module.exports = workoutController;
