const express = require("express");
const app = express();

const homeController = require("./controllers/homeController");
const livresController = require("./controllers/livresController");
const avisController = require("./controllers/avisController");

// config
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// routes
app.get("/", homeController.index);

app.get("/livres", livresController.liste);
app.get("/livres/ajouter", livresController.formulaire);
app.post("/livres/ajouter", livresController.ajouter);

app.get("/livres/:id", livresController.detail);

app.get("/livres/:id/avis", avisController.formulaire);
app.post("/livres/:id/avis", avisController.ajouter);

// serveur
app.listen(3000, () => {
    console.log("Serveur lancé sur http://localhost:3000");
});