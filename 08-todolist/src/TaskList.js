import React from 'react'

export default class TaskList extends React.Component {
    state = {
        'tasks':[
            {
                '_id': 1,
                'title':'Wash the car',
                'done': false
            },
            {
                '_id': 2,
                'title': 'Clean the floor',
                'done': false
            },
            {
                '_id': 3,
                'title':'Pay the bills',
                'done': false
            }
        ]
    }
    renderTasks() {
        let jsx = [];
        for (let t of this.state.tasks) {
            jsx.push(<React.Fragment>
                <li>{t.title} - {t.done}</li>
            </React.Fragment>)
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.renderTasks()}
            </React.Fragment>
        )
    }
}