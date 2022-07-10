const mongoose = require('mongoose');

const scheduleSchema = mongoose.Schema(
    {
        "date": {
            type: String,
            required: true
        },
        "teams": [String],
        "typeOfMatch": String
    }
)

const Schedule = mongoose.model('schedule', scheduleSchema);

module.exports = Schedule;