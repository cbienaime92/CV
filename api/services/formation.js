const Formation = require('../models/formation');

exports.getall = async (req, res, next) => {
    try {
        let formation = await Formation.find();
        if (formation) {
            return res.status(200).json(formation);
        }

    }
    catch (error) {
        return res.status(501).json(error);
    }
}

exports.getById = async (req, res, next) => {
    const { id } = req.params;

    try {
        let formation = await Formation.findById(id);

        if (formation) {
            return res.status(200).json(formation);
        }

        return res.status(404).json('formation_not_found');
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
        organisme: temp.organisme
    } = req.body);

    Object.keys(temp).forEach((key) => (temp[key] == null) && delete temp[key]);

    try {
        let formation = await Formation.create(temp);

        return res.status(201).json(formation);
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
        organisme: temp.organisme
    } = req.body);

    try {
        let formation = await Formation.findOne({ email: temp.email });

        if (formation) {
            Object.keys(temp).forEach((key) => {
                if (!!temp[key]) {
                    formation[key] = temp[key];
                }
            });

            await formation.save();
            return res.status(201).json(formation);
        }

        return res.status(404).json('formation_not_found');
    } catch (error) {
        console.log(error)
        return res.status(501).json(error);
    }
}

// exports.delete = async (req, res, next) => {
//     //const { id } = req.body;

//     try {
        
//         await Formation.deleteOne({_id: req.body.id});
//         console.log(res)
//         return res.status(201).json('delete_ok');
//     } catch (error) {
//         return res.status(501).json(error);
//     }
// }

exports.delete = async (req, res, next) => {
    Formation.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };