const Langue = require('../models/langue');

exports.getall = async (req, res, next) => {
    try {
        let langue = await Langue.find();
        if (langue) {
            console.log(res.status(200).json(langue))
            return res.status(200).json(langue);
        }

    }
    catch (error) {
        return res.status(501).json(error);
    }
}

exports.getById = async (req, res, next) => {
    const { id } = req.params;

    try {
        let langue = await Langue.findById(id);

        if (langue) {
            return res.status(200).json(langue);
        }

        return res.status(404).json('langue_not_found');
    } catch (error) {
        return res.status(501).json(error);
    }
}

exports.add = async (req, res, next) => {
    const temp = {};

    ({
        nom: temp.nom,
        niveau: temp.niveau
    } = req.body);

    Object.keys(temp).forEach((key) => (temp[key] == null) && delete temp[key]);

    try {
        let langue = await Langue.create(temp);

        return res.status(201).json(langue);
    } catch (error) {
        return res.status(501).json(error);
    }
}

exports.update = async (req, res, next) => {
    const temp = {};

    ({
        nom: temp.nom,
        niveau: temp.niveau
    } = req.body);

    try {
        let langue = await Langue.findOne({ email: temp.email });

        if (langue) {
            Object.keys(temp).forEach((key) => {
                if (!!temp[key]) {
                    langue[key] = temp[key];
                }
            });

            await langue.save();
            return res.status(201).json(langue);
        }

        return res.status(404).json('langue_not_found');
    } catch (error) {
        console.log(error)
        return res.status(501).json(error);
    }
}

exports.delete = async (req, res, next) => {
    const { id } = req.body;

    try {
        await Langue.deleteOne({ _id: id });

        return res.status(201).json('delete_ok');
    } catch (error) {
        return res.status(501).json(error);
    }
}