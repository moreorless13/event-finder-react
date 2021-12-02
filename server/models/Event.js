const { Schema } = require('mongoose');

const eventSchema = new Schema(
    {
        eventId: {
            type: String,
            required: true,
            unique: true
        },
        eventName: {
            type: String,
            required: true,
            trim: true,
        },
        eventDescription: {
            type: String,
            required: true,
            trim: true,
        },
        startDate: {
            type: Date,
            required: true,
            trim: true,
        },
        endDate: {
            type: Date,
            required: false,
            trim: true,
        },
        latitude: {
            type: String,
            required: true,
            trim: true,
        },
        longitude: {
            type: String,
            required: true,
            trim: true,
        },
    }
)

module.exports = eventSchema;