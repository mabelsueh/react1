import React from "react";
import "./App.css";

// uses state, so we need a class-based component
export default class TaskList extends React.Component {
  state = {
    tasks: [
      {
        _id: 1,
        title: "Wash the car",
        date: "2020-01-01",
        done: false
      },
      {
        _id: 2,
        title: "Clean the floor",
        date: "2020-01-02",
        done: false
      },
      {
        _id: 3,
        title: "Pay the bills",
        date: "2020-01-03",
        done: false
      }
    ],
    newTaskTitle: "",
    newTaskDate: "",
    // if 0, means no task is being edited, >0 if otherwise
    taskIdBeingEdited: 0
  };

  // renderTasks() {
  //     let jsx = [];
  //     for (let t of this.state.tasks) {
  //         jsx.push(<React.Fragment>
  //             <li>{t.title} - {t.done ? 'Completed' : 'Incomplete'}</li>
  //         </React.Fragment>)
  //     }
  //     return jsx;
  // }

  renderTask(task) {
    return (
      <React.Fragment>
        <li>
          {task.title} - 
          <input type="checkbox" checked={task.done} onChange={()=>{
              this.updateTaskDone(task)
          }}/> 
          (Due:
          {task.date})
          <button
            onClick={() => {
              this.beginEditTask(task);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              this.deleteTask(task);
            }}
          >
            Delete
          </button>
        </li>
      </React.Fragment>
    );
  }

  renderEditTask(task) {
    return (
      <React.Fragment>
        <input
          type="text"
          value={this.state.modifiedTaskTitle}
          onChange={this.updateFormField}
          name="modifiedTaskTitle"
        />
        <input
          type="date"
          value={this.state.modifiedTaskDate}
          onChange={this.updateFormField}
          name="modifiedTaskDate"
        />
        <button
          onClick={() => {
            this.updateTask(task);
          }}
        >
          Update
        </button>
        <button onClick={this.cancelEdit}>Cancel </button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.state.tasks.map(t => {
          if (this.state.taskIdBeingEdited != t._id) {
            return this.renderTask(t);
          } else {
            return this.renderEditTask(t);
          }
        })}
        <h2>Add a new task</h2>
        <div>
          <label>Task Title:</label>
          <input
            type="text"
            value={this.state.newTaskTitle}
            onChange={this.updateFormField}
            name="newTaskTitle"
          />
        </div>
        <div>
          <label>Task Due Date</label>
          <input
            type="date"
            value={this.state.newTaskDate}
            onChange={this.updateFormField}
            name="newTaskDate"
          />
        </div>
        <button onClick={this.addNewTask}>Add new task</button>
      </React.Fragment>
    );
  }

  // this is a callback function so must be arrow function
  updateFormField = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addNewTask = () => {
    let newTask = {
      _id: Math.floor(Math.random() * 100000) + 99999,
      title: this.state.newTaskTitle,
      date: this.state.newTaskDate
    };

    // add this new task to the tasks array
    // this.state.tasks.push(newTask);
    // step 1: clone the existing array
    // let cloned = [...this.state.tasks];

    // // step 2: make the changes to the clone
    // cloned.push(newTask);

    // // step 3: replace the original array with clone
    // this.setState({
    //     'tasks' :cloned
    // })

    this.setState({
      tasks: [...this.state.tasks, newTask],
      newTaskTitle: "",
      newTaskDate: ""
    });
  };

  beginEditTask(task) {
    this.setState({
      taskIdBeingEdited: task._id,
      modifiedTaskDate: task.date,
      modifiedTaskTitle: task.title
    });
  }

  cancelEdit = () => {
    this.setState({
      taskIdBeingEdited: 0
    });
  };

  //   updateTask = (task) => {

  //     // 1. clone the task that is being updated
  //     let clonedTask = {...task};

  //     // 2. change the clone
  //     clonedTask.title = this.state.modifiedTaskTitle;
  //     clonedTask.date = this.state.modifiedTaskDate;

  //     // 3. clone the array
  //     let clonedArray = [...this.state.tasks];

  //     // 4. find the index of the task that we want to update
  //     let index = clonedArray.findIndex( t => t._id === task._id);

  //     // findIndex is e.q.v to:
  //     // let index = -1;
  //     // for (let i=0; i < clonedArray.length; i++) {
  //     //     if (clonedArray[i]._id === task._id) {
  //     //         index = i;
  //     //         break;
  //     //     }
  //     // }

  //     // 5. replace the index in the cloned array with the cloned task
  //     clonedArray[index] = clonedTask;

  //     // 6. set the cloned array back to the state
  //     this.setState({
  //         tasks: clonedArray,
  //         taskIdBeingEdited:0
  //     })

  //   }

  updateTask = task => {
    let index = this.state.tasks.findIndex(t => t._id === task._id);
    this.setState({
      tasks: [
        ...this.state.tasks.slice(0, index),
        {
          title: this.state.modifiedTaskTitle,
          date: this.state.modifiedTaskDate,
          done: task.done
        },
        ...this.state.tasks.slice(index + 1)
      ]
    });
  };

  //  deleteTask = (task) => {
  //      // 1. find the index of the task we want to delete
  //      let index = this.state.tasks.findIndex( t => t._id === task._id);

  //      // 2. cloned the original array
  //      let cloned = [...this.state.tasks]

  //      // 3. use splice on the cloned array to delete by index
  //      cloned.splice(index, 1);

  //      // 4. set the cloned array back into the state
  //      this.setState({
  //          tasks: cloned
  //      })
  //  }

  deleteTask = task => {
    let index = this.state.tasks.findIndex(t => t._id === task._id);
    this.setState({
      tasks: [
        ...this.state.tasks.slice(0, index),
        ...this.state.tasks.slice(index + 1)
      ]
    });
  };

//   updateTaskDone = task => {

//       // 1. clone the object that you changing
//       let clonedTask = {...task};

//       // 2. change the clone
//       // if the task is complete, then set it as incompleted
//       if (clonedTask.done === true) {
//           clonedTask.done = false;
//       } else {
//           clonedTask.done = true;
//       }

//       // 3. find the index of the original object in the array
//       let index = this.state.tasks.findIndex( t => t._id == clonedTask._id);
      
//       // 4. clone the array
//       let clonedArray = [...this.state.tasks];

//       // 5. replace the original object in the array with the clone
//       clonedArray[index] = clonedTask;

//       // 6. set the cloned array into the state
//       this.setState({
//           tasks: clonedArray
//       })
//   }

updateTaskDone = (task) => {
    let index = this.state.tasks.findIndex( t => t._id == task._id);
    this.setState({
        tasks: [
            ...this.state.tasks.slice(0, index),
            {
                ...task,
                done: task.done ? false : true
            },
            ...this.state.tasks.slice(index+1)
        ]
    })
}
}