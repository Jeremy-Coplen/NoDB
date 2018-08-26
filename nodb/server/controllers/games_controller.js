let games = [{
    id: 0,
    title: "CSGO",
    img: "https://steamuserimages-a.akamaihd.net/ugc/857232612836470805/BE977F032855F301A599B0A24E772F081B334259/",
    hoursPlayed: "1700"
},
{
    id: 1,
    title: "Terraria",
    img: "https://505games.com/wp-content/uploads/Terraria-NG-752x430.jpg",
    hoursPlayed: "384"
}]
let id = 2

module.exports = {
    read: (req, res) => {
        res.status(200).send(games)
    },

    create: (req, res) => {
        const {title, img, hoursPlayed} = req.body
        const game = {
            id,
            title,
            img,
            hoursPlayed
        }
        games.push(game)
        id++
        res.status(200).send(games)
    },

    update: (req, res) => {
        const {title, img, hoursPlayed} = req.body
        gameID = null
        games.forEach((game, i) => {
            if(game.id === Number(req.params.id)) {
                gameID = i
            }
        })
        games[gameID] = {
            id: games[gameID].id,
            title: title || games[gameID].title,
            img: img || games[gameID].img,
            hoursPlayed: hoursPlayed || games[gameID].hoursPlayed

        }
        res.status(200).send(games)
    },

    delete: (req, res) => {
        games.forEach((game, i) => {
            if(game.id === Number(req.params.id)) {
                games.splice(i, 1)
            }
        })
        res.status(200).send(games)
    }
}