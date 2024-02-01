import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ProjectSchema = new Schema({
    projectName: {
        type: String,
        required: 'Enter a project name.'
    },
    type: {
        type: String
    },
    focus: {
        type: String
    },
    description: {
        type: String
    },
    responsible: {
        type: Map,
        of: String
    },
    sponsor: {
        type: String
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

export const MemberSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    credentials: {
        type: Map,
        of: String
    },
    role: {
        type: String,
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    summary: {
        type: String,
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});