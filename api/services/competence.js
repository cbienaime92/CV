const Competence = require('../models/competence');

exports.getall = async (req, res, next) => {
    try {
        let competence = await Competence.find();
        if (competence) {
            console.log(res.status(200).json(competence))
            return res.status(200).json(competence);
        }

    }
    catch (error) {
        return res.status(501).json(error);
    }
}

exports.getById = async (req, res, next) => {
    const { id } = req.params;

    try {
        let competence = await Competence.findById(id);

        if (competence) {
            return res.status(200).json(competence);
        }

        return res.status(404).json('competence_not_found');
    } catch (error) {
        return res.status(501).json(error);
    }
}

exports.add = async (req, res, next) => {
    const temp = {};

    ({
        nom: temp.nom,
        details: temp.details
    } = req.body);

    Object.keys(temp).forEach((key) => (temp[key] == null) && delete temp[key]);

    try {
        let competence = await Competence.create(temp);

        return res.status(201).json(competence);
    } catch (error) {
        return res.status(501).json(error);
    }
}

exports.update = async (req, res, next) => {
    const temp = {};

    ({
        nom: temp.nom,
        details: temp.details
    } = req.body);

    try {
        let competence = await Competence.findOne({ email: temp.email });

        if (competence) {
            Object.keys(temp).forEach((key) => {
                if (!!temp[key]) {
                    competence[key] = temp[key];
                }
            });

            await competence.save();
            return res.status(201).json(competence);
        }

        return res.status(404).json('competence_not_found');
    } catch (error) {
        console.log(error)
        return res.status(501).json(error);
    }
}

exports.delete = async (req, res, next) => {
    const { id } = req.body;

    try {
        await Competence.deleteOne({ _id: id });

        return res.status(201).json('delete_ok');
    } catch (error) {
        return res.status(501).json(error);
    }
}