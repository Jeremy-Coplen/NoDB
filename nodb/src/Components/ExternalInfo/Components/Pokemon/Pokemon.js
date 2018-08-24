import React, {Component} from "react"
import axios from "axios"
import "./Pokemon.css"

import DisplayPikachu from "./DisplayPikachu"

class Pokemon extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sprite: "",
            moves: []
        }
    }

    componentDidMount() {
        axios.get("https://pokeapi.co/api/v2/pokemon/25")
        .then(res => {
            const arr = []
            for(var i = 0; i <= 9; i++) {
                arr.push(res.data.moves[i].move.name)
            }
            this.setState({
                sprite: res.data.sprites.front_default,
                moves: arr

            })
        })
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text"/>
                    <button>Find Move</button>
                </div>
                <DisplayPikachu sprite={this.state.sprite} moves={this.state.moves} />
            </div>
        )
    }
}

export default Pokemon