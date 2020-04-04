import React from 'react';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';
import '../css/result-page.css'


const ResultPage = (props) => {
    let {result, totalTime, history, setTotalTime} = props,
        handleButtonClick = ()=>{
            setTotalTime(0);
            history.push('/');
        };
        return (
            <div className= "result-container">
                {
                    result.status ? 
                        <div>
                                <div className="result-success-text">Sucess! Congratulations on Finding Falcone. King Shan is mighty pleased.</div>
                                <div className="result-time-details">Time taken: {totalTime}</div>
                                <div className="result-success-text">Planet found: {result.planet_name}</div>
                        </div>
                    :  
                    <div className="result-failure-text">
                        Failure! Could not find Flacone. Click on the button to try again
                    </div>
                }
                 <Button type="primary" onClick={handleButtonClick}>
                    Start Again
                </Button>
           </div>
        )
}

export default withRouter(ResultPage);
