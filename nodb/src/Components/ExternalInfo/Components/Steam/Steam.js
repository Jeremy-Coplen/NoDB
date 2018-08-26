import React, {Component} from "react"
import axios from "axios"
import "./Steam.css"

import DisplayAchievements from "./DisplayAchievements"
import keys from "../../../Keys"

class Steam extends Component {
    constructor(props) {
        super(props)

        this.state = {
            achievements: [],
            userInput: ""
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

    resetAchievements() {
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

    updateInput(val) {
        this.setState({
            userInput: val
        }, () => this.searchAchievement(this.state.userInput))
    }

    searchAchievement(text) {
        const newText = text.toLowerCase()
        const arr = []
        const filterArr = this.state.achievements.filter(achievement => {
            let newDisplayName = achievement.displayName.toLowerCase()
            if(newDisplayName.includes(newText)) {
                return achievement
            }
        })
        if(text === "") {
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
        else {
            this.setState({
                achievements: filterArr
            })
        }
    }

    removeAchievement(id) {
        axios.delete()
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
                    {/* <button
                    onClick={() => this.resetAchievements()}>Reset Achievements</button> */}
                    <input type="text"
                    placeholder="Find Achievement"
                    onChange={(e) => this.updateInput(e.target.value)}
                    value={this.state.userInput}/>
                </div>
                {achievement}
            </div>
        )
    }
}

export default Steam