import React from 'react'

export default class FormAdvanced extends React.Component {
    // need state so you can set state variable
    // note that state & render come before return()
    state = {
        name: "",
        email: "",
        color: "",
        // ensures morning is prechecked
        time: "morning",
        fruits: [],
        // ensures sg is preselected in the drpodown menu (not working!!!)
        country: 'th'
    }

    render() {
        return (
            <React.Fragment>
                <h1>FormAdvanced</h1>
                <div>
                    <label>Name: </label>
                    {/* value: tells them to use value of the input of the selected state | onChange: allows typing*/}
                    {/* change/add name segment for setState shortcut */}
                    <input type="text" name="name" value={this.state.name} onChange={this.updateFormField} />
                    <br />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" name="email" value={this.state.email} onChange={this.updateFormField} />
                    <br />
                </div>
                <div>
                    <label>Favorite Color: </label>
                    <input type="radio" name="color" value="red" onChange={this.updateFormField} checked={this.state.color === 'red'} /><label style={{ color: 'red' }}>Red</label>
                    <input type="radio" name="color" value="blue" onChange={this.updateFormField} checked={this.state.color === 'blue'} /><label style={{ color: 'blue' }}>Blue</label>
                    <input type="radio" name="color" value="green" onChange={this.updateFormField} checked={this.state.color === 'green'} /><label style={{ color: 'green' }}>Green</label>
                    <br />
                </div>
                <div>
                    <label>Best Time of the Day: </label>
                    <input type="radio" name="time" value="morning" onChange={this.updateFormField} checked={this.state.time === 'morning'} /><label>Morning</label>
                    <input type="radio" name="time" value="noon" onChange={this.updateFormField} checked={this.state.time === 'noon'} /><label>Noon</label>
                    <input type="radio" name="time" value="evening" onChange={this.updateFormField} checked={this.state.time === 'evening'} /><label>Evening</label>
                    <input type="radio" name="time" value="midnight" onChange={this.updateFormField} checked={this.state.time === 'midnight'} /><label>Midnight</label>
                    <br />
                </div>
                <div>
                    <label>Favorite Fruits: </label>
                    <input type="checkbox" name="fruits" value="orange" onChange={this.updateFruits} checked={this.state.fruits.includes('orange')} /><label>Orange</label>
                    <input type="checkbox" name="fruits" value="apple" onChange={this.updateFruits} checked={this.state.fruits.includes('apple')} /><label>Apple</label>
                    <input type="checkbox" name="fruits" value="mango" onChange={this.updateFruits} checked={this.state.fruits.includes('mango')} /><label>Mango</label>
                    <br />
                </div>
                <div>
                    <label>Country</label>
                    {/* need the value={this.state.country} in select for the preselection in state to work */}
                    <select name="country" onChange={this.updateFormField} value={this.state.country}>
                        <option value="sg">Singapore</option>
                        <option value="my">Malaysia</option>
                        <option value="th">Thailand</option>
                    </select>
                </div>
            </React.Fragment>
        )
    }
    // need the setState in order to type in form (set variable)
    // what does (event) mean? -> 'event' can be subbed for anything (not a prefix). 
    // however it must always be the first argument, and included with the setState [<>.target.<>]

    // updateName is used along with onChange
    // look at the js fundamentals on his video to understand this shortcut
    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value

        })
    }
    // don't mutate variable in functional programming
    updateFruits = (event) => {
        // if fruits array does not include selected value
        if (!this.state.fruits.includes(event.target.value)) {
            // copy array [...arrayName] and paste with new value (event.target) pushed in at the end
            // ... is a spread operator
            let copy = [...this.state.fruits, event.target.value]
            // old version:
            // let copy = this.state.fruits.slice()
            // copy.push(event.target.value)
            this.setState({
                'fruits': copy
            })
        }
        else {
            // if user click a checkbox where value is already in array 
            // (because) react re-registers on both checking and unchecking boxes
            let copy = this.state.fruits.filter((eachFruit) => {
                // returns values that does not match the existing array aka new value registered
                return eachFruit !== event.target.value
            })

            this.setState({
                'fruits': copy
            })
        }
    }
}