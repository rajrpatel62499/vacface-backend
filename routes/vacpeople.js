const express = require('express');
const {
  getVaccineDetailsByFaceId
} = require('../controllers/vacpeople');

// const VacPeople = require('../models/VacPeople');

const router = express.Router({ mergeParams: true });

// const advancedResults = require('../middleware/advancedResults');
// const { protect, authorize } = require('../middleware/auth');

// router.use(protect);
// router.use(authorize('admin'));

// router
//   .route('/')
//   .get(advancedResults(User), getUsers)
//   .post(createUser);

// router
//   .route('/:id')
//   .get(getUser)
//   .put(updateUser)
//   .delete(deleteUser);

router.route("/:faceId").get(getVaccineDetailsByFaceId);

module.exports = router;
