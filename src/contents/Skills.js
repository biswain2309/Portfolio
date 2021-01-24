import React from "react"

class Skills extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'myskills': ['Python', 'Django', 'DjangoRestFramework', 'HTML', 'CSS', 'Javascript', 'React']
        }
    }

    render() {
        return (
            <div className="condiv skills">
                <h1 className="subtopic">My skills</h1>
                <ul>
                    {this.state.myskills.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Skills