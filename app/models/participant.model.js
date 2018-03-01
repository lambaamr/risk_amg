var mongoose = require('mongoose');

var ParticipantSchema = mongoose.Schema({
    age: Number,
    gender: String,
    experiment: Number,
    ip: String,
    mturkCode: String,
    name: String,
    numCorrect: Number,
    payoff: Number,
    actualProportion: [Number],
    endowment: [Number],
    netGains: [Number],
    opponentNumber: [Number],
    proportion: [Number],
    reactionTime: [Number],
    returned: [Number],
    endowmentlt: [Number],
    actualProportionlt: [Number],
    proportionlt: [Number],
    netGainslt: [Number],
    opponent2Number: [Number],
    reactionTimelt: [Number],
    returnedlt: [Number],
    ocirResponse: [Number],
    gadResponse: [Number],
    siasResponse: [Number],
    cesdResponse: [Number],
    page: [Number],
}, {
    timestamps: true
});

module.exports = mongoose.model('Participant', ParticipantSchema);
