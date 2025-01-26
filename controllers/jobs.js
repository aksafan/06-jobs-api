const Job = require('../models/Job')
const { StatusCodes } = require('http-status-codes')

const getAllJobs = async (req, res) => {
    res.status(StatusCodes.OK).json('getAllJobs');
};
const getJob = async (req, res) => {
    res.status(StatusCodes.OK).json('getJob');
};

const createJob = async (req, res) => {
    req.body.createdBy = req.user.userId;
    const job = await Job.create(req.body);

    res.status(StatusCodes.CREATED).json({job});
};

const updateJob = async (req, res) => {
    res.status(StatusCodes.OK).json('updateJob');
};

const deleteJob = async (req, res) => {
    res.status(StatusCodes.OK).send('deleteJob');
};

module.exports = {
    createJob,
    deleteJob,
    getAllJobs,
    updateJob,
    getJob,
};
