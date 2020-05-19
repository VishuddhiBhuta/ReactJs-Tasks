import React from 'react'
import './Tasklist.css'

/**
 * Parent 
 *     Tasks
 * 
 * Child
 *     CompletedTasksList
 */

export default class CompletedTasksList extends React.Component {
    render() {
        if (this.props.data == undefined && this.props.data.length === 0) {
            return null;
        }

        let completedtasklist = this.props.data.map((tasks, index) => {
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
        return (
            <ul className="tasks-list">
                {completedtasklist}
            </ul>
        )
    }
}