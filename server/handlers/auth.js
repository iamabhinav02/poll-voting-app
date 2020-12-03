const db = require('../models/connection');

exports.register = async (req, res, next) => {
    try {
        const user = await db.User.create(req.body);
        res.json(user);
    } catch(error) {
        next(error);
    }
};

exports.login = async (req, res, next) => {
    try {
        const user = await db.User.findOne({username: req.body.username});
        const {id, username} = user;
        const valid = await user.comparePassword(req.body.password);
        
        if (valid) {
            res.json({id, username});
        } else {
            throw new Error('Invalid Username/Password');
        }
    } catch (error) {
        next(error);
    }
};