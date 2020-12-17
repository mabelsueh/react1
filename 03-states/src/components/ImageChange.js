// Create a component that has two images in the state: image1 and image2. 
// The component will display image1 by default. When a button is clicked, display image2 instead. 
// Hint: you may want to use another state variable to determine which image is shown at the moment.

import React from 'react'

export default class ImageChange extends React.Component{
    state = {
        defaultImage: require('../sad-pepe.png').default,
        newImage: require('../pepe-disappointed.png').default
    }

    render(){
        return (
            <React.Fragment>
                <img src={this.state.defaultImage}/>
                <button onClick={this.switch}>Switch</button>                
            </React.Fragment>
        )
    }

    switch = () => {
        this.setState({
            image: this.state.image
            // need to add something for it to change
        })
    }
}

