
import React from 'react';
import '../css/time-tracker.css';

const TimeTracker = (props) => {
    return (
        <div className="time-tracker-container">
            <div className="time-tracker-text">Time Taken: {props.time || 0}</div>            
        </div>
    );
}

export default TimeTracker;
