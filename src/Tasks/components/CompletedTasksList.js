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
        if (this.props.completeddata == undefined && this.props.completeddata.length === 0) {
            return null;
        }

        let completedtasklist = this.props.completeddata.map((completedTasks, index) => {
            return (
                <li key={completedTasks.completedText + index}>
                    <span>{completedTasks.completedText}</span>
                    <div className="flex-layout action-buttons">
                        <label><input type="checkbox" onChange={() => { this.props.incompleteHandleCheck(index) }} defaultChecked={this.props.isChecked} />Mark as Incomplete</label>
                    </div>
                </li>
            )
        })
        return (
            <ul className="tasks-list">
                {completedtasklist}
            </ul>
        )
    }
}