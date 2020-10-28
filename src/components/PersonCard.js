import React, {Component} from 'react'

class PersonCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            age: this.props.age
        }
    }

    IncrementItem = () => {
        this.setState({age: this.state.age + 1})
    }
    render() {
        const {firstName, lastName, age, hairColor} = this.props
        return (
            <div>
                <h2>{firstName} {lastName}</h2>
                <p>{this.state.age}</p>
                <p>{hairColor}</p>
        <button onClick={ ()=> this.IncrementItem()}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }
}

export default PersonCard