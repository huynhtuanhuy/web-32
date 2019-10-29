const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema(
    {
        // Fields
        content: {
            type: String,
            // Options...
            required: true,
            // unique: true,
        },
        yes: {
            type: Number,
            default: 0,
        },
        no: {
            type: Number,
            default: 0,
        },
        array: [Number],
        array1: [{
            fieldA: Number,
            fieldB: Number
        }],
    },
    {
        // Options
        timestamps: true, // created_at & updated_at
        // _id: false,
    }
);

// questions
const questionModel = mongoose.model("Question", QuestionSchema);

module.exports = questionModel;