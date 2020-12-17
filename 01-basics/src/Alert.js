import React from 'react'

export default function Alert(props) {
    return (<div className="alert" style={{
        'backgroundColor': props.bgcolor,
        'padding': '10px',
        'margin':'10px'
    }}>
<span className="message">{props.message}</span>
    </div>
    )
}