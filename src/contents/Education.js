import React from "react"
import Widecard from '../components/Widecard'

class Education extends React.Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="B.Tech" where="Dr.B.C.Roy Engineering College" from="2010" to="2014" />
            </div>
        )
    }
}

export default Education
