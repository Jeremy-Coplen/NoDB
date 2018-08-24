import React, {Component} from "react"
import "./ExternalInfo.css"

import Steam from "./Components/Steam/Steam"
import Pokemon from "./Components/Pokemon/Pokemon"

class ExternalInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div>
                <Steam />
                <Pokemon />
            </div>
        )
    }
}

export default ExternalInfo