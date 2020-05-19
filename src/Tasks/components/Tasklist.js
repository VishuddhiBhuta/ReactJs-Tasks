import React from 'react'
import './Tasklist.css'



/**
 * Parent: 
 *     Tasks
 */

export default class Tasklist extends React.Component {
    render() {
        if (this.props.data == undefined && this.props.data.length === 0) {
            return null;
        }

        if (this.props.showCompleted) {
            return (
                <ul className="tasks-list">
                    {
                        this.props.data.map((tasks, index) => {
                            if (tasks.isCompleted) {
                                return (
                                    <li key={tasks.inputText + index}>
                                        <span>{tasks.inputText}</span>
                                        <div className="flex-layout action-buttons">
                                            <label><input type="checkbox" onChange={() => { this.props.completeHandleCheck(index, !tasks.isCompleted) }} />Mark as Incomplete</label>
                                        </div>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            )
        }

        return (
            <ul className="tasks-list">
                {
                    this.props.data.map((tasks, index) => {
                        if (!tasks.isCompleted) {
                            return (
                                <li key={tasks.inputText + index}>
                                    {tasks.inputText}
                                    <div className="flex-layout action-buttons">
                                        <button title="Edit" className="edit-btn" onClick={() => {
                                            this.props.editTask(index)
                                        }}>Edit</button>
                                        <label><input type="checkbox" value={index} onChange={() => { this.props.completeHandleCheck(index, !tasks.isCompleted) }} defaultChecked={this.props.isChecked} />Completed</label>
                                    </div>
                                </li>
                            )
                        }
                    })
                }
            </ul >
        )
    }
}