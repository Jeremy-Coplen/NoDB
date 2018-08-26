import React, {Component} from "react"
import "./DisplayGames.css"

class DisplayGames extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: this.props.title,
            img: this.props.img,
            hoursPlayed: this.props.hoursPlayed,
            editing: false
        }
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

    editGame(id, title, img, hoursPlayed) {
        this.props.editGameFn(id, title, img, hoursPlayed)
        this.setState({
            editing: false
        })
    }

    render() {
        return (
            <div className="game_box">
                {
                    this.state.editing
                    ?
                      <input className="input" type="text" value={this.state.title} onChange={(e) => this.updateTitle(e.target.value)}/>
                    :
                      <h2 className="game_title">Game: {this.props.title}</h2>
                }
                {
                    this.state.editing
                    ?
                      <input className="input" type="text" value={this.state.img} onChange={(e) => this.updateImg(e.target.value)}/>
                    :
                      <img className="game_img" src={this.props.img} alt={this.props.title}/>
                }
                {
                    this.state.editing
                    ?
                      <input className="input" type="text" value={this.state.hoursPlayed} onChange={(e) => this.updateHoursPlayed(e.target.value)}/>
                    :
                      <h2 className="game_hours">Hours Played: {this.props.hoursPlayed}</h2>
                }
                {
                    this.state.editing
                    ?
                      <button className="btn" onClick={() => this.editGame(this.props.id, this.state.title, this.state.img, this.state.hoursPlayed)}>Confirm Edit</button>
                    :
                      <button className="btn" onClick={() => this.setState({editing: true})}>Edit</button>
                }
                <button className="btn" onClick={() => this.props.removeGameFn(this.props.id)}>Delete</button>
            </div>
        )
    }
}

export default DisplayGames