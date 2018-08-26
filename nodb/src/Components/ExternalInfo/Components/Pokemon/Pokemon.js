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
        this.resetMoves = this.resetMoves.bind(this)
        this.removeMove = this.removeMove.bind(this)
    }

    componentDidMount() {
        const arr = []
        axios.get("https://pokeapi.co/api/v2/pokemon/25")
        .then(res => {
            for(var i = 0; i <= 9; i++) {
                arr.push({id: i, name: res.data.moves[i].move.name})
            }
            this.setState({
                sprite: res.data.sprites.front_default,
                moves: arr

            })
        })
    }

    resetMoves() {
        const arr = []
        axios.get("https://pokeapi.co/api/v2/pokemon/25")
        .then(res => {
            for(var i = 0; i <= 9; i++) {
                arr.push({id: i, name: res.data.moves[i].move.name})
            }
            this.setState({
                sprite: res.data.sprites.front_default,
                moves: arr

            })
        })
    }

    searchMoves(text) {
        const newText = text.toLowerCase()
        const filterArr = this.state.moves.filter(move => {
            let newMove = move.name.toLowerCase()
            if(newMove.includes(newText)) {
                return move
            }
        })

        if(text === "") {
            const arr = []
        axios.get("https://pokeapi.co/api/v2/pokemon/25")
        .then(res => {
            for(var i = 0; i <= 9; i++) {
                arr.push({id: i, name: res.data.moves[i].move.name})
            }
            this.setState({
                sprite: res.data.sprites.front_default,
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

    removeMove(id) {
        let arr = [...this.state.moves]
        arr.splice(id, 1)
        this.setState({
            moves: arr
        })
    }

    render() {
        return (
            <div>
                <DisplayPikachu sprite={this.state.sprite} moves={this.state.moves} searchMovesFn={this.searchMoves} resetMovesFn={this.resetMoves} removeMoveFn={this.removeMove} />
            </div>
        )
    }
}

export default Pokemon