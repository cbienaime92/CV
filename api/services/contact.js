const Contact = require('../models/contact');

exports.getall = async (req, res, next) => {
    try {
        let contact = await Contact.find();
        if (contact) {
            return res.status(200).json(contact);
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
        let contact = await Contact.findById(id);

        if (contact) {
            return res.status(200).json(contact);
        }

        return res.status(404).json('contact_not_found');
    } catch (error) {
        return res.status(501).json(error);
    }
}

exports.add = async (req, res, next) => {
    const temp = {};

    ({
        nom: temp.nom,
        prenom: temp.prenom,
        metier: temp.metier,
        ville: temp.ville,
        email: temp.email,
        tel: temp.tel,
        permis: temp.permis
    } = req.body);

    Object.keys(temp).forEach((key) => (temp[key] == null) && delete temp[key]);

    try {
        let contact = await Contact.create(temp);

        return res.status(201).json(contact);
    } catch (error) {
        return res.status(501).json(error);
    }
}

exports.update = async (req, res, next) => {
    const temp = {};

    ({
        nom: temp.nom,
        prenom: temp.prenom,
        metier: temp.metier,
        ville: temp.ville,
        email: temp.email,
        tel: temp.tel,
        permis: temp.permis
    } = req.body);

    try {
        let contact = await Contact.findOne({ email: temp.email });

        if (contact) {
            Object.keys(temp).forEach((key) => {
                if (!!temp[key]) {
                    contact[key] = temp[key];
                }
            });

            await contact.save();
            return res.status(201).json(contact);
        }

        return res.status(404).json('contact_not_found');
    } catch (error) {
        console.log(error)
        return res.status(501).json(error);
    }
}

exports.delete = async (req, res, next) => {
    const { id } = req.body;

    try {
        await Contact.deleteOne({ _id: id });

        return res.status(201).json('delete_ok');
    } catch (error) {
        return res.status(501).json(error);
    }
}