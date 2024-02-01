import mongoose from 'mongoose';
import {
    MemberSchema,
    ProjectSchema
} from '../models/gnfModel';

const Member = mongoose.model('Member', MemberSchema);
const Project = mongoose.model('Project', ProjectSchema);

export const addNewMember = async (req, res) => {
    try {
        let newMember = new Member(req.body);
        let savedMember = await newMember.save();
        res.json(savedMember);
    } catch (err) {
        res.send(err);
    }
};

export const getMembers = async (req, res) => {
    try {
        const members = await Member.find({});
        res.json(members);
    } catch (err) {
        res.send(err);
    }
};

export const getMemberWithId = async (req, res) => {
    try {
        const member = await Member.findById(req.params.memberId);
        res.json(member);
    } catch (err) {
        res.send(err);
    }
};

export const updateMember = async (req, res) => {
    try {
        const updatedMember = await Member.findOneAndUpdate( 
            { _id: req.params.memberId },
            req.body,
            { new: true }
        );

        if (updateMember) {
            res.json(updatedMember)
        } else {
            res.status(404).json({ message: 'Member not found' });
        }
    } catch (err) {
        res.send(err);
    }
};

export const deleteMember = async (req, res) => {
    try {
        const deletedMember = await Member.deleteOne(
            { _id: req.params.memberId }
        );

        res.json({ message: 'Member deleted successfully.' });
    } catch (err) {
        res.send(err);
    }
};

export const addNewProject = async (req, res) => {
    try {
        let newProject = new Project(req.body);
        let savedProject = await newProject.save();
        res.json(savedProject);
    } catch (err) {
        res.send(err);
    }
};

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find({});
        res.json(projects);
    } catch (err) {
        res.send(err);
    }
};

export const getProjectWithId = async (req, res) => {
    try {
        const project = await Project.findById(req.params.projectId);
        res.json(project);
    } catch (err) {
        res.send(err);
    }
};

export const updateProject = async (req, res) => {
    try {
        const updatedProject = await Project.findOneAndUpdate( 
            { _id: req.params.projectId },
            req.body,
            { new: true }
        );

        if (updateProject) {
            res.json(updatedProject)
        } else {
            res.status(404).json({ message: 'Project not found' });
        }
    } catch (err) {
        res.send(err);
    }
};

export const deleteProject = async (req, res) => {
    try {
        const deletedProject = await Project.deleteOne(
            { _id: req.params.projectId }
        );

        res.json({ message: 'Project deleted successfully.' });
    } catch (err) {
        res.send(err);
    }
};