import React, {Component} from 'react'

class PersonCard extends Component {
    render() {
        const {firstName, lastName, age, hairColor} = this.props
        return (
            <div>
                <h2>{firstName} {lastName}</h2>
                <p>{age}</p>
                <p>{hairColor}</p>
            </div>
        )
    }
}

export default PersonCard