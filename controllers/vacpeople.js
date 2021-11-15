const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const VacPeople = require('../models/VacPeople');

// // @desc      Get all users
// // @route     GET /api/v1/users
// // @access    Private/Admin
// exports.getUsers = asyncHandler(async (req, res, next) => {
//   res.status(200).json(res.advancedResults);
// });

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

// // @desc      Create user
// // @route     POST /api/v1/users
// // @access    Private/Admin
// exports.createUser = asyncHandler(async (req, res, next) => {
//   const user = await VacPeople.create(req.body);

//   res.status(201).json({
//     success: true,
//     data: user
//   });
// });

// // @desc      Update user
// // @route     PUT /api/v1/users/:id
// // @access    Private/Admin
// exports.updateUser = asyncHandler(async (req, res, next) => {
//   const user = await VacPeople.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true
//   });

//   res.status(200).json({
//     success: true,
//     data: user
//   });
// });

// // @desc      Delete user
// // @route     DELETE /api/v1/users/:id
// // @access    Private/Admin
// exports.deleteUser = asyncHandler(async (req, res, next) => {
//   await VacPeople.findByIdAndDelete(req.params.id);

//   res.status(200).json({
//     success: true,
//     data: {}
//   });
// });
