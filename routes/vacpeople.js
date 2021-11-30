const express = require('express');
const {
  getVaccineDetailsByFaceId
} = require('../controllers/vacpeoples');

// const VacPeople = require('../models/VacPeople');

const router = express.Router({ mergeParams: true });

router.route("/:faceId").get(getVaccineDetailsByFaceId);

module.exports = router;
