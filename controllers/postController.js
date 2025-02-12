const datas = require("../data/data")


function index(req, res) {

    //faccio coincidere filteredPosts con l'array iniziale
    let objfilter = datas;

    // Se la richiesta contiene un filtro(req.query.tag = true/false => booleano), allora filtriamo i post
    if (req.query.tags) {
        objfilter = datas.filter(
            post => post.tags.includes(req.query.tags)
        );
    }

    // restituisco l'array filteredPosts, filtrato o meno!
    res.json(objfilter);
};

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
    datas.splice(datas.indexOf(oggettoSingolo), 1)

    //Restituiamo lo stato corretto
    res.sendStatus(204)
}

module.exports = {index, show, store, update, modify, destroy}