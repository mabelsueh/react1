import React from 'react'

export default class Form extends React.Component {
    // need state so you can set state variable
    state = {
        'name': "",
        'email': "",
        'color': "",
        'bestTime': ""
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>Name: </label>
                                       {/* value: tells them to use value of the input of the selected state | onChange: allows typing*/}
                    <input type="text" value={this.state.name} onChange={this.updateName} />
                    <br/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" value={this.state.email} onChange={this.updateEmail} />
                    <br/>
                </div>
                <div>
                    <label>Favorite Color: </label>
                    <input type="radio" name="color" value="red" onChange={this.updateColor}/><label style={{color:'red'}}>Red</label>
                    <input type="radio" name="color" value="blue" onChange={this.updateColor}/><label style={{color:'blue'}}>Blue</label>
                    <input type="radio" name="color" value="green" onChange={this.updateColor}/><label style={{color:'green'}}>Green</label>
                    <br/>
                </div>
                <div>
                    <label>Best Time of the Day: </label>
                    <input type="radio" name="best-time" value="morning" onChange={this.updateBestTime}/><label>Morning</label>
                    <input type="radio" name="best-time" value="noon" onChange={this.updateBestTime}/><label>Noon</label>
                    <input type="radio" name="best-time" value="evening" onChange={this.updateBestTime}/><label>Evening</label>
                    <input type="radio" name="best-time" value="midnight" onChange={this.updateBestTime}/><label>Midnight</label>
                    <br/>
                </div>
            </React.Fragment>
        )
    }
// need the setState in order to type in form (set variable)
// what does (event) mean?

// updateName is used along with onChange
    updateName = (event) => {
        this.setState({
            // name is consistent with state variable name in state above
            name: event.target.value
        })
    }
    updateEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    updateColor = (event) => {
        this.setState({
            color: event.target.value
        })
    }
    updateBestTime= (event) => {
        this.setState ({
            bestTime: event.target.value
        })
    }
}