const datas = require("../data/data.js")


function index(req, res) {
    res.json(datas);
}
//show
function show(req, res) {

    const oggettoSingolo = datas.find((element) => element.id === parseInt(req.params.id))

    //controllo
    if (!oggettoSingolo) {
        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }

    res.json(oggettoSingolo)
}
//store
function store(req, res) {
    res.send("Creazione nuovo post ")
}
//update
function update(req, res) {
    res.send("Modifica integrale del post " + req.params.id)
}
// modify
function modify(req, res) {
    res.send("Modifica parziale del post " + req.params.id)
}
// destroy
function destroy(req, res) {

    const oggettoSingolo = datas.find((element) => element.id === parseInt(req.params.id))

    //controllo
    if (!oggettoSingolo) {

        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        })
    }

    //Rimuoviamo il post
    oggettoSingolo.splice(oggettoSingolo.indexOf(oggettoSingolo), 1)

    //Restituiamo lo stato corretto
    res.sendStatus(204)
}

module.exports = {index, show, store, update, modify, destroy}