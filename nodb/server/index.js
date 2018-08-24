const express = require("express")
const bodyParser = require("body-parser")
const gc = require("./controllers/games_controller")

const app = express()

app.use(bodyParser.json())

app.get("/api/games", gc.read)
app.post("/api/games", gc.create)
app.put("/api/games/:id", gc.update)
app.delete("/api/games/:id", gc.delete)

const port = 3030

app.listen(port, () => console.log(`stuff is happening on ${port}`))