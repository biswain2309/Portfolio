import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import profilepic from '../img/IMG_2439.jpg'
import Social from '../components/Social'

class Home extends React.Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} className="profilepic"></img>
                <ReactTypingEffect className="typingeffect" text={['I am Indrani....']} speed={100} eraseDelay={700} />
                <Social />
            </div>
        )
    }
}

export default Home;