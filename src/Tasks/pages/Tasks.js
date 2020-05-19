import React from 'react'
import './Tasks.css'
import Tasklist from '../components/Tasklist'
import CompletedTasksList from '../components/CompletedTasksList'

export default class Tasks extends React.Component {

    state = {
        inputText: "",
        showForm: false,
        tasks: [],
        editIndex: -1,
        isChecked: false,
        completedText: "",
        completedTasks: []
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    showForm = (e) => {
        e.preventDefault();
        //console.log(this.state.showForm);
        this.setState({
            showForm: !this.state.showForm
        })
    }

    addTasks = () => {
        let task = {
            inputText: this.state.inputText
        }
        this.setState({
            tasks: [task, ...this.state.tasks],
            inputText: ""
        });
    }

    editTasks = (editTaskIndex) => {
        if (this.state.editIndex > -1) {
            console.log("you are in saveMode")
            let newTasks = [...this.state.tasks];
            newTasks[this.state.editIndex] = {
                inputText: this.state.inputText
            }
            this.setState({
                tasks: newTasks,
                inputText: "",
                editIndex: -1
            })
        } else {
            console.log("you are in editMode")
            this.setState({
                inputText: this.state.tasks[editTaskIndex].inputText,
                editIndex: editTaskIndex,
            })
        }
    }

    completeHandleCheck = (completeIndex) => {
        let newObj = {
            completedText: this.state.tasks[completeIndex].inputText
        }
        let filteredTasks = this.state.tasks.filter((task, index) => (index !== completeIndex))
        //console.log(this.state.tasks[completeIndex])
        this.setState({
            tasks: filteredTasks,
            completedTasks: [newObj, ...this.state.completedTasks],
            //isChecked: !this.state.isChecked
        });
    }

    incompleteHandleCheck = (incompleteIndex) => {
        let newObj = {
            inputText: this.state.completedTasks[incompleteIndex].completedText
        }
        let filteredTasks = this.state.completedTasks.filter((completetask, index) => (index !== incompleteIndex))
        console.log(newObj)
        this.setState({
            completedTasks: filteredTasks,
            tasks: [newObj, ...this.state.tasks]
        });
    }

    render() {
        return (
            <div className="task-wrapper">
                <h2>Tasks</h2>
                <div className="flex-layout">
                    <div className="left-column">
                        <div className="flex-layout">
                            <h4>List of In-Progress Tasks</h4>
                            <button className="add-task" title="Add Task" onClick={this.showForm}>+</button>
                        </div>
                        {this.state.showForm &&
                            <input type="text"
                                className="form-control"
                                value={this.state.inputText}
                                name="inputText"
                                placeholder="Enter the task here..."
                                onChange={this.handleChange}
                                onKeyDown={(e) => {
                                    if (e.keyCode === 13) {
                                        if (this.state.editIndex > -1) {
                                            this.editTasks()
                                        } else {
                                            this.addTasks()
                                        }
                                    }
                                }} />
                        }
                        {/* Tasks List */}
                        <Tasklist
                            data={this.state.tasks}
                            addTask={this.addTasks}
                            editTask={this.editTasks}
                            isChecked={this.state.isChecked}
                            completeHandleCheck={this.completeHandleCheck} />
                    </div>
                    <div className="right-column">
                        <h4>List of Completed Tasks</h4>
                        <CompletedTasksList
                            completeddata={this.state.completedTasks}
                            incompleteHandleCheck={this.incompleteHandleCheck} />
                    </div>
                </div>
            </div>
        )
    }

}