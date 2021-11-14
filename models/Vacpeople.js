const mongoose = require('mongoose');

const vaccineDoseSchema = new mongoose.Schema({
    vaccineName:{
        type: String,
        required: [true, 'Please add a vaccine name']
    },
    date:{
        type: String,
        required: [true, 'Please add a vaccine date']
    },
    lotNumber:{
        type: Number,
        required: [true, 'Please add a vaccine lot number']

    }
})

const VacPeopleSchema = new mongoose.Schema({
    dateOfBirth: {
        type: String,
        required: [true, 'Please add a date of birth']
      },
      fullName: {
        type: String,
        required: [true, 'Please add a full name']
      },
      faceId: {
        type: String,
        required: [true, 'Please add a faceid']
      },
      vaccineDoses: [vaccineDoseSchema]
    })

    module.exports = mongoose.model('VacPeople', VacPeopleSchema);