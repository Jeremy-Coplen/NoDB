import React, {Component} from "react"
import "./DisplayPikachu.css"

class DisplayPikachu extends Component{
    constructor(props) {
        super(props)

        this.state = {
            userInput: ""
        }
    }

    updateInput(val) {
        this.setState({
            userInput: val
        }, () => this.props.searchMovesFn(this.state.userInput))
    }

    
    render() {
        const moves = this.props.moves.map((move, i) => {
            return (
                <div key={i}>
                    <h3>{move}</h3>
                </div>
            )
        })

        return (
            <div>
                <div>
                    <h2>Pikachu: </h2>
                    <img src={this.props.sprite} alt="Pikachu"/>
                </div>
                <input type="text"
                    placeholder="Find a move"
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