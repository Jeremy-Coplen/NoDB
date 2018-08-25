import React, {Component} from "react"
import axios from "axios"
import "./Pokemon.css"

import DisplayPikachu from "./DisplayPikachu"

class Pokemon extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sprite: "",
            moves: [],
        }

        this.searchMoves = this.searchMoves.bind(this)
    }

    componentDidMount() {
        const arr = []
        axios.get("https://pokeapi.co/api/v2/pokemon/25")
        .then(res => {
            for(var i = 0; i <= 9; i++) {
                arr.push(res.data.moves[i].move.name)
            }
            this.setState({
                sprite: res.data.sprites.front_default,
                moves: arr

            })
        })
    }

    searchMoves(text) {
        const newText = text.toLowerCase()
        const arr = []
        const filterArr = this.state.moves.filter(move => {
            let newMove = move.toLowerCase()
            if(newMove.includes(newText)) {
                return move
            }
        })

        if(text === "") {
            axios.get("https://pokeapi.co/api/v2/pokemon/25")
        .then(res => {
            for(var i = 0; i <= 9; i++) {
                arr.push(res.data.moves[i].move.name)
            }
            this.setState({
                moves: arr
            })
        })
        }
        else {
            this.setState({
                moves: filterArr
            })
        }
    }

    render() {
        return (
            <div>
                <DisplayPikachu sprite={this.state.sprite} moves={this.state.moves} searchMovesFn={this.searchMoves} />
            </div>
        )
    }
}

export default Pokemon