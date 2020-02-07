const express = require("express")
const ejs = require("ejs") // view engine permet de generer des vues
const bodyParser = require("body-parser")// permet d'analyser lea requette et permet d'utiliser le corp de la requette 

let myTasks = []
const app = express()

app.engine("ejs", ejs.renderFile)

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
/* app.use(bodyParser.json()) */

app.get('/todolist', (request, response) => {
    response.render("index.ejs", { myTasks })

})

app.post('/todolist', (request, response) => {
    const newTask = request.body.task
    myTasks.push(newTask)
    console.log(myTasks)
    console.log(myTasks.length, "ma longueur ")
    response.render("index.ejs", { myTasks })
})

app.listen(8080)