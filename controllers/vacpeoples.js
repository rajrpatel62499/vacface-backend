const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const VacPeople = require('../models/VacPeoples');


// @desc      Get single user
// @route     GET /api/v1/vac-people/:faceId
// @access    Private/Admin
exports.getVaccineDetailsByFaceId = asyncHandler(async (req, res, next) => {
  const faceId = req.params.faceId;
  console.log(faceId);
  //find it in the database
  const vaccineDetails = await VacPeople.findOne({ faceId: faceId});

  res.status(200).json({
    success: true,
    data: vaccineDetails
  });
});
