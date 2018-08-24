let games = []
let id = 0

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
            if(game.id === req.params.id) {
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
            if(game.id === req.params.id) {
                games.splice(i, 1)
            }
        })
        res.status(200).send(games)
    }
}