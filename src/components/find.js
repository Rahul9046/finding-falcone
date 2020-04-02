
import React from 'react';
import { Button } from 'antd';
import '../css/find.css';

const Find = (props) => {
    return (
        <div className="find-button">
            <Button type="primary" disabled={props.disabled}>
                Find Falcone!
            </Button>
        </div>
    );
}

export default Find;
