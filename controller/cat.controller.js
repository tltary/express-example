const catModel = require('../model/cat.model');

const catM = catModel.Cat;

const index = (req, res) => {
    const name = (req.query.name).trim();
    const age = (req.query.age).trim();
    const cat = new catM(name, age);

    return res.status(200).json({name: cat.name, age: cat.age});
};

module.exports = {
    Index: index
}