import React, {Component} from "react"
import axios from "axios"
import "./Steam.css"

import DisplayAchievements from "./DisplayAchievements"
import keys from "../../../Keys"

class Steam extends Component {
    constructor(props) {
        super(props)

        this.state = {
            achievements: []
        }
    }

    componentDidMount() {
        const arr = []
        axios.get(`http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${keys.steamApiKey}&appid=730`)
        .then(res => {
            for(var i = 0; i <= 9; i++) {
                arr.push(res.data.game.availableGameStats.achievements[i])
            }

            this.setState({
                achievements: arr
            })
        })        
    }

    render() {
        let achievement = this.state.achievements.map((achievement, i) => {

            return(
                <DisplayAchievements key={i} displayName={achievement.displayName} description={achievement.description}/>
            )
        })
        return (
            <div>
                <div>
                    <input type="text"/>
                    <button>Find Achievement</button>
                </div>
                {achievement}
            </div>
        )
    }
}

export default Steam