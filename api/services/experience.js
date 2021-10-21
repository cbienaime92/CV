const Experience = require('../models/experience');

exports.getall = async (req, res, next) => {
    try {
        let experience = await Experience.find();
        if (experience) {
            console.log(res.status(200).json(experience))
            return res.status(200).json(experience);
        }

    }
    catch (error) {
        return res.status(501).json(error);
    }
}

exports.getById = async (req, res, next) => {
    const { id } = req.params;

    try {
        let experience = await Experience.findById(id);

        if (experience) {
            return res.status(200).json(experience);
        }

        return res.status(404).json('experience_not_found');
    } catch (error) {
        return res.status(501).json(error);
    }
}

exports.add = async (req, res, next) => {
    const temp = {};

    ({
        nom: temp.nom,
        anneeDebut: temp.anneeDebut,
        anneeFin: temp.anneeFin,
        societe: temp.societe,
        taches: temp.taches

    } = req.body);

    Object.keys(temp).forEach((key) => (temp[key] == null) && delete temp[key]);

    try {
        let experience = await Experience.create(temp);

        return res.status(201).json(experience);
    } catch (error) {
        return res.status(501).json(error);
    }
}

exports.update = async (req, res, next) => {
    const temp = {};

    ({
        nom: temp.nom,
        anneeDebut: temp.anneeDebut,
        anneeFin: temp.anneeFin,
        societe: temp.societe,
        taches: temp.taches
    } = req.body);

    try {
        let experience = await Experience.findOne({ email: temp.email });

        if (experience) {
            Object.keys(temp).forEach((key) => {
                if (!!temp[key]) {
                    experience[key] = temp[key];
                }
            });

            await experience.save();
            return res.status(201).json(experience);
        }

        return res.status(404).json('experience_not_found');
    } catch (error) {
        console.log(error)
        return res.status(501).json(error);
    }
}

exports.delete = async (req, res, next) => {
    const { id } = req.body;

    try {
        await Experience.deleteOne({ _id: id });

        return res.status(201).json('delete_ok');
    } catch (error) {
        return res.status(501).json(error);
    }
}