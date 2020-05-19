import React from 'react'
import './Tasklist.css'

/**
 * Parent 
 *     Tasks
 * 
 * Child
 *     TaskList
 */

export default class Tasklist extends React.Component {
    render() {
        if (this.props.data == undefined && this.props.data.length === 0) {
            return null;
        }

        let tasklist = this.props.data.map((tasks, index) => {
            return (
                <li key={tasks.inputText + index}>
                    {tasks.inputText}
                    <div className="flex-layout action-buttons">
                        <button title="Edit" className="edit-btn" onClick={() => {
                            this.props.editTask(index)
                        }}>Edit</button>
                        <label><input type="checkbox" value={index} onChange={() => { this.props.completeHandleCheck(index) }} defaultChecked={this.props.isChecked} />Completed</label>
                    </div>
                </li>
            )
        })
        return (
            <ul className="tasks-list">
                {tasklist}
            </ul>
        )
    }
}