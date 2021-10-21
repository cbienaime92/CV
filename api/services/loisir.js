const Loisir = require('../models/loisir');

exports.getall = async (req, res, next) => {
    try {
        let loisir = await Loisir.find();
        if (loisir) {
            console.log(res.status(200).json(loisir))
            return res.status(200).json(loisir);
        }

    }
    catch (error) {
        return res.status(501).json(error);
    }
}

exports.getById = async (req, res, next) => {
    const { id } = req.params;

    try {
        let loisir = await Loisir.findById(id);

        if (loisir) {
            return res.status(200).json(loisir);
        }

        return res.status(404).json('loisir_not_found');
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
        let loisir = await Loisir.create(temp);

        return res.status(201).json(loisir);
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
        let loisir = await Loisir.findOne({ email: temp.email });

        if (loisir) {
            Object.keys(temp).forEach((key) => {
                if (!!temp[key]) {
                    loisir[key] = temp[key];
                }
            });

            await loisir.save();
            return res.status(201).json(loisir);
        }

        return res.status(404).json('loisir_not_found');
    } catch (error) {
        console.log(error)
        return res.status(501).json(error);
    }
}

exports.delete = async (req, res, next) => {
    const { id } = req.body;

    try {
        await Loisir.deleteOne({ _id: id });

        return res.status(201).json('delete_ok');
    } catch (error) {
        return res.status(501).json(error);
    }
}