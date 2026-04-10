const livres = [
    {
        id: 0,
        titre: "Le Petit Prince",
        auteur: "Antoine de Saint-Exupéry",
        annee: 1943,
        resume: "Un pilote rencontre un petit prince.",
        avis: ["Magnifique", "Touchant"],
    },
    {
        id: 1,
        titre: "1984",
        auteur: "George Orwell",
        annee: 1949,
        resume: "Un monde sous surveillance.",
        avis: ["Effrayant", "Puissant"],
    },
];

exports.liste = (req, res) => {
    res.render("livres", { livres });
};

exports.detail = (req, res) => {
    const livre = livres[req.params.id];
    res.render("detail", { livre });
};

exports.formulaire = (req, res) => {
    res.render("ajouter");
};

exports.ajouter = (req, res) => {
    const { titre, auteur, annee, resume } = req.body;

    livres.push({
        id: livres.length,
        titre,
        auteur,
        annee,
        resume,
        avis: [],
    });

    res.send(`Livre ajouté : ${titre} par ${auteur}`);
};

exports.livres = livres;