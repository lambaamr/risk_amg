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
    reactionTime2: [Number],
    returnedlt: [Number],
    ocirResponse: [Number],
    gadResponse: [Number],
    siasResponse: [Number],
    cesdResponse: [Number],
    pages: [Number],
    keyPresses: [String],
}, {
    timestamps: true
});

module.exports = mongoose.model('Participant', ParticipantSchema);
