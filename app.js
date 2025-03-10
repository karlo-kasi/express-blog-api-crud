/*Come prima cosa, creiamo un controller per i nostri post, in una cartella controllers.
All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna la logica delle funzioni che attualmente si trovano nel router (al momento restituiscono solo dei messaggi).
Poi torniamo sul file delle rotte. Qui importiamo le funzioni dichiarate nel controller e le associamo alle varie rotte, come visto in classe.
Testiamo su postman se chiamando gli endpoint riceviamo effettivamente le stesse risposte che avevamo prima.
Se tutto funziona, passiamo alla prossima milestone
Milestone 2
Per iniziare, creiamo una cartella data in cui creare un file che contenga ed esporti l’array di posts che trovate in allegato. Importiamo questo file in cima al controller.
Ora passiamo ad implementare le logiche delle nostre CRUD:
Index dovrà restituire la lista dei post in formato JSON
Show dovrà restituire un singolo post in formato JSON
Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (console.log) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.
Bonus
Implementare un filtro di ricerca nella index che mostri solo i post che hanno un determinato Tag
In Show e Destroy, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.
*/

const express = require("express")
const app = express()
const port = 3000
const cors = require("cors")
const postRouter = require("./routers/posts")

//middLewares
const errorsHandler = require("./middlewares/errorsHandler")
const notFound = require("./middlewares/notFound")



app.use(express.json()) // body parse

app.use(express.static('public')); // per file statici

app.use("/posts", postRouter) //richiamare le API 

app.use(cors({
    origin: "http://localhost:5173/"
}))
// app.use("/", (req, res) => {
//     res.send("Il mio sito Blog")
// });


app.use(notFound) // erorri nelle rotte 
app.use(errorsHandler) // i possibili errori dell'applicazione.


// per attivare il server con la porta 3000
app.listen(port, () => {
    console.log(`Le porte del mio server sono ${port}`)
})

