var mongoose = require('mongoose');

var ParticipantSchema = mongoose.Schema({
    age: Number,
    gender: String,
    experiment: Number,
    ip: String,
    mturkCode: String,
    name: String,
    payoff: Number,
    numCorrect: Number,
    pracpages: [Number],
    prackeyPresses: [String],
    pages: [Number],
    keyPresses: [String],
    amgreactionTime: [Number],
    opponentNumber: [Number],
    proportion: [Number],
    actualProportion: [Number],
    endowment: [Number],
    returned: [Number],
    netGains: [Number],
    reactionTime: [Number],
    opponent2Number: [Number],
    proportionlt: [Number],
    actualProportionlt: [Number],
    endowmentlt: [Number],
    returnedlt: [Number],
    netGainslt: [Number],
    reactionTimelt: [Number],
    siasResponse: [Number],
    ocirResponse: [Number],
    gadResponse: [Number],
    cesdResponse: [Number],
    suspicionResponse: [Number],
}, {
    timestamps: true
});

module.exports = mongoose.model('Participant', ParticipantSchema);
