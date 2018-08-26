import React, {Component} from "react"
import "./DisplayPikachu.css"

class DisplayPikachu extends Component{
    constructor(props) {
        super(props)

        this.state = {
            userInput: ""
        }
    }

    resetMoves() {
        this.props.resetMovesFn()
    }

    updateInput(val) {
        this.setState({
            userInput: val
        }, () => this.props.searchMovesFn(this.state.userInput))
    }

    // removeMove(id) {
    //     this.props.removeMoveFn(id)
    // }
    
    render() {
        const moves = this.props.moves.map((move, i) => {
            return (
                <div key={i}>
                    <h3>{move.name}</h3>
                    {/* <button
                    onClick={() => this.removeMove(move.id)}>Delete</button> */}
                </div>
            )
        })

        return (
            <div>
                <div>
                    <h2>Pikachu: </h2>
                    <img src={this.props.sprite} alt="Pikachu"/>
                </div>
                {/* <button
                onClick={() => this.resetMoves()}>Reset Moves</button> */}
                <input type="text"
                    placeholder="Find a Move"
                    onChange={(e) => this.updateInput(e.target.value)}
                    value={this.state.userInput}/>
                <div>
                    <h2>Moves:</h2>
                    {moves}
                </div>
            </div>
        )
    }
}

export default DisplayPikachu