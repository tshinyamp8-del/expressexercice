const { livres } = require("./livresController");

exports.formulaire = (req, res) => {
    res.render("avis", { id: req.params.id });
};

exports.ajouter = (req, res) => {
    const { message } = req.body;
    const livre = livres[req.params.id];

    livre.avis.push(message);

    res.send(`Avis ajouté : ${message}`);
};