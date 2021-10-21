const Profil = require('../models/profil');

exports.getall = async (req, res, next) => {
    try {
        let profil = await Profil.find();
        if (profil) {
            console.log(res.status(200).json(profil))
            return res.status(200).json(profil);
        }

    }
    catch (error) {
        return res.status(501).json(error);
    }
}

exports.getByName = async (req, res, next) => {
    const { nom } = req.params;
    console.log("REQ:",req)
    console.log(nom)

    try {
        let contact = await Contact.findOne({'nom': nom});
        console.log("contact:", contact)

        if (contact) {
            return res.status(200).json(contact);
        }

        return res.status(404).json('contact_not_found');
    } catch (error) {
        return res.status(501).json(error);
    }
}

exports.getById = async (req, res, next) => {
    const { id } = req.params;

    try {
        let profil = await Profil.findById(id);

        if (profil) {
            return res.status(200).json(profil);
        }

        return res.status(404).json('profil_not_found');
    } catch (error) {
        return res.status(501).json(error);
    }
}

exports.add = async (req, res, next) => {
    const temp = {};

    ({
        intitule: temp.intitule
    } = req.body);

    Object.keys(temp).forEach((key) => (temp[key] == null) && delete temp[key]);

    try {
        let profil = await Profil.create(temp);

        return res.status(201).json(profil);
    } catch (error) {
        return res.status(501).json(error);
    }
}

exports.update = async (req, res, next) => {
    const temp = {};

    ({
        intitule: temp.intitule
    } = req.body);

    try {
        let profil = await Profil.findOne({ email: temp.email });

        if (profil) {
            Object.keys(temp).forEach((key) => {
                if (!!temp[key]) {
                    profil[key] = temp[key];
                }
            });

            await profil.save();
            return res.status(201).json(profil);
        }

        return res.status(404).json('profil_not_found');
    } catch (error) {
        console.log(error)
        return res.status(501).json(error);
    }
}

exports.delete = async (req, res, next) => {
    const { id } = req.body;

    try {
        await Profil.deleteOne({ _id: id });

        return res.status(201).json('delete_ok');
    } catch (error) {
        return res.status(501).json(error);
    }
}