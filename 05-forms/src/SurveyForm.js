import React from 'react'
// Form enter: first & last name, 
// enquiry type - sales, support, marketing
// country sg th my
// submit button

// checkbox how to contact snail email phone
export default class SurveyForm extends React.Component {
    state = {
        firstname: "",
        lastname: "",
        enquiry: "",
        country: "sg",
        contactBy: []
    }
    render() {
        return (
            <React.Fragment>
                <h1>Survey Form Lab 5</h1>
                <div>
                    <label>First Name: </label>
                    <input type="text" name="firstname" value={this.state.fistname} onChange={this.updateFormField} />
                    <br />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" name="lastname" value={this.state.lastname} onChange={this.updateFormField} />
                    <br />
                </div>
                <div>
                    <label>Type of Enquiry: </label>
                    <label>Sales</label><input type="radio" name="enquiry" value="sales" onChange={this.updateFormField} checked={this.state.enquiry === 'sales'} />
                    <label>Support</label><input type='radio' name="enquiry" value="support" onChange={this.updateFormField} checked={this.state.enquiry === 'support'} />
                    <label>Marketing</label><input type="radio" name="enquiry" value="marketing" onChange={this.updateFormField} checked={this.state.enquiry === "marketing"} />
                    <br />
                </div>
                <div>
                    <label>Country: </label>
                    <select name="country" value={this.state.country} onChange={this.updateFormField}>
                        <option value="sg">Singapore</option>
                        <option value="my">Malaysia</option>
                        <option value="in">Indonesia</option>
                        <option value="th">Thailand</option>
                    </select>
                    <br />
                </div>
                <div>
                    <label>How to contact you: </label>
                    {/* need checked or no need? */}
                    <input type="checkbox" name="contactBy" value="slow-mail" onChange={this.updateCheckboxes}/><label>Slow Mail</label>
                    <input type="checkbox" name="contactBy" value="email" onChange={this.updateCheckboxes} /><label>Email</label>
                    <input type="checkbox" name="contactBy" value="phone" onChange={this.updateCheckboxes} /><label>Phone</label>
                </div>

                {/* button for submit + trigger alert in submitForm() */}
                <button onClick={this.submitForm}>Submit</button>
            </React.Fragment>
        );
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
}
