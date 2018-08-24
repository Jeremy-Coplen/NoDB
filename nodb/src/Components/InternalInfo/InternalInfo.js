import React, { Component } from "react"
import axios from "axios"
import "./InternalInfo.css"

class InternalInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            games: [],
            title: "",
            img: "",
            hoursPlayed: ""
        }
    }

    componentDidMount() {
        axios.get("/api/games")
            .then(res => {
                this.setState({
                    games: res.data
                })
            })
    }

    updateTitle(val) {
        this.setState({
            title: val
        })
    }

    updateImg(val) {
        this.setState({
            img: val
        })
    }

    updateHoursPlayed(val) {
        this.setState({
            hoursPlayed: val
        })
    }

    addGame() {
        const { title, img, hoursPlayed } = this.state
        axios.post("/api/games", { title, img, hoursPlayed })
            .then(res => {
                this.setState({
                    games: res.data
                })
            })

        this.setState({
            title: "",
            img: "",
            hoursPlayed: ""
        })
    }

    render() {
        let games = this.state.games.map((game, i) => {
            return (
                <div key={i}>
                    <h2>Game: {game.title} Game Art: <img src={game.img} alt={game.title}/> Hours Played: {game.hoursPlayed}</h2>
                </div>
            )
        })
        return (
            <div>
                <div>
                    <input type="text"
                        placeholder="Enter game title"
                        onChange={(e) => this.updateTitle(e.target.value)}
                        value={this.state.title} />
                    <input type="text"
                        placeholder="Enter an image url"
                        onChange={(e) => this.updateImg(e.target.value)}
                        value={this.state.img} />
                    <input type="text"
                        placeholder="Enter hours played"
                        onChange={(e) => this.updateHoursPlayed(e.target.value)}
                        value={this.state.hoursPlayed} />
                    <button
                    onClick={() => this.addGame()}>Add game</button>
                </div>
                <div>
                    {games}
                </div>
            </div>
        )
    }
}

export default InternalInfo