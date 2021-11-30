const express = require('express');
const {
  getVaccineDetailsByFaceId
} = require('../controllers/vacpeoples');

const router = express.Router();

router.route("/:faceId").get(getVaccineDetailsByFaceId);

module.exports = router;
