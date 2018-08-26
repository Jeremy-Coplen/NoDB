import React, { Component } from "react"
import axios from "axios"
import "./InternalInfo.css"

import DisplayGames from "./DisplayGames"

class InternalInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            games: [],
            title: "",
            img: "",
            hoursPlayed: "",
        }

        this.editGame = this.editGame.bind(this)
        this.removeGame = this.removeGame.bind(this)
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

    editGame(id, title, img, hoursPlayed) {
        axios.put(`/api/games/${id}`, {title, img, hoursPlayed})
        .then(res => {
            this.setState({
                games: res.data,
            })
        })
    }

    removeGame(id) {
        axios.delete(`/api/games/${id}`)
        .then(res => {
            this.setState({
                games: res.data
            })
        })
    }

    render() {
        return (
            <div className="game_container">
                <div className="game_add">
                    <input className="input" type="text"
                        placeholder="Enter game title"
                        onChange={(e) => this.updateTitle(e.target.value)}
                        value={this.state.title} />
                    <input className="input" type="text"
                        placeholder="Enter an image url"
                        onChange={(e) => this.updateImg(e.target.value)}
                        value={this.state.img} />
                    <input className="input" type="text"
                        placeholder="Enter hours played"
                        onChange={(e) => this.updateHoursPlayed(e.target.value)}
                        value={this.state.hoursPlayed} />
                    <button
                    onClick={() => this.addGame()}>Add game</button>
                </div>
                <div className="game_display">
                    {
                        this.state.games.map(game => (
                            <DisplayGames id={game.id} 
                            key={game.id} 
                            title={game.title} 
                            img={game.img} 
                            hoursPlayed={game.hoursPlayed} 
                            editGameFn={this.editGame} 
                            removeGameFn={this.removeGame}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default InternalInfo