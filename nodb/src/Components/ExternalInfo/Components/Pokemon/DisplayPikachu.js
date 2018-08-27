import React, { Component } from "react"
import "./DisplayPikachu.css"

class DisplayPikachu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userInput: ""
        }
    }

    resetMoves() {
        this.props.resetMovesFn()
        this.setState({
            userInput: ""
        })
    }

    updateInput(val) {
        this.setState({
            userInput: val
        }, () => this.props.searchMovesFn(this.state.userInput))
    }

    removeMove(id) {
        this.props.removeMoveFn(id)
    }

    render() {
        const moves = this.props.moves.map((move, i) => {
            return (
                <div className="pikachu_moves" key={i}>
                    <h3 className="move_name">{move.name}</h3>
                    <button className="btn"
                        onClick={() => this.removeMove(move.id)}>Delete</button>
                </div>
            )
        })

        return (
            <div className="pikachu_container">
                <div className="pikachu_discription">
                    <h2 className="pikachu">Pikachu </h2>
                    <img className="pikachu_img" src={this.props.sprite} alt="Pikachu" />
                </div>
                <div className="pikachu_input">
                    <button
                        onClick={() => this.resetMoves()}>Reset Moves</button>
                    <input type="text"
                        placeholder="Find a Move"
                        onChange={(e) => this.updateInput(e.target.value)}
                        value={this.state.userInput} />
                </div>
                <h2 className="moves">Moves:</h2>
                <div className="move_container">
                    {moves}
                </div>
            </div>
        )
    }
}

export default DisplayPikachu