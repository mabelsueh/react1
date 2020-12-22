// Capture first name and last name

import React from 'react'
import axios from 'axios'

export default class BookingForm extends React.Component {

    state = {
        firstname: "",
        lastname: "",
        seating: [],
        smoking: "non-smoking",
        appetizer: [],
        settings: {
            seating: [],
            smoking: [],
            appetizer: []
        }
    }

async componentDidMount(){
    let response = await axios.get('./json/booking.json')
    this.setState({
        settings: response.data
    })
}
// seating radio
    renderSeating() {
        let jsx = []
        for (let seatingType of this.state.settings.seating) {
            jsx.push(
                <React.Fragment>
                    <input
                        type="radio"
                        value={seatingType.value}
                        onChange={this.updateFormField}
                        name="seating"
                        checked={this.state.settings.seating === seatingType.value} />
                    <label>{seatingType.display}</label>
                </React.Fragment>
            )
        }
        return jsx
    }

    render() {
        return (
            <React.Fragment>
                <h1>JSON Booking Form</h1>
                <div>
                    <label>First Name: </label>
                    <input
                        type="text"
                        name="firstname"
                        value={this.state.firstname}
                        onChange={this.updateFormField} />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input
                        type="text"
                        name="lastname"
                        value={this.state.lastname}
                        onChange={this.updateFormField} />
                </div>
                {/* seating radio via function call */}
                <div>
                    <label>Seating: </label>
                    {this.renderSeating()}
                </div>
                {/* smoking dropdown via map */}
                <div>
                    <label>Smoking: </label>
                    <select
                        name="smoking"
                        value={this.state.smoking}
                        onChange={this.updateFormField}>
                    { this.state.settings.smoking.map ( (s,index)=>
                    <option value={s.value} key={index}>{s.display}</option>)
                    }
                    </select>
                </div>
                {/* appetizer checkboz via map */}
                <div>
                    <label>Appetizer: </label>
                    {
                        this.state.settings.appetizer.map((m, index) => {
                            return (
                                <React.Fragment>
                                    <input type="checkbox"
                                        name="appetizer"
                                        value={m.value}
                                        onChange={this.updateCheckboxes}
                                        checked={this.state.appetizer.includes(m.value)} />
                                    <label>{m.display}</label>
                                </React.Fragment>
                            )
                        })
                    }
                </div>
            </React.Fragment>
        )
    }

    updateFormField = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // checkbox prevent double entry
    updateCheckboxes = evt => {
        let originalArray = this.state[evt.target.name];

        // check if the value of the checkbox that the user has clicked on is in the array or not
        if (!originalArray.includes(evt.target.value)) {
            // the checkbox's value is not in the array, so we add it to the array
            let modified = [...originalArray, evt.target.value];
            this.setState({
                [evt.target.name]: modified
            });
        } else {
            // the checkbox's value is already in the array, so this means we should remove it
            let modified = originalArray.filter(eachItem => {
                // only keep items that DOES NOT match the checkbox's value ('cos we are going to delete it from the array)
                return eachItem !== evt.target.value;
            });
            this.setState({
                [evt.target.name]: modified
            });
        }
    };
}
