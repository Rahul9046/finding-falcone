import React from 'react';
import { Radio } from 'antd';
import "antd/dist/antd.css";

const optionStyleObj = {
    display: 'block',
    height: '30px'
};
const VehicleSelect = (props) => {
    let {vehicles, vehicleSelectHandler} = props;
    vehicles = vehicles.map((vehicle, index) => {
        let vehicleName = vehicle.name,
            vehicleCount = vehicle.total_no;
        return(
            <Radio
                key={index}
                value={vehicleName}
                style={optionStyleObj}
                disabled={ vehicleCount ? false : true }
                onChange = {vehicleSelectHandler}
            >
            {`${vehicleName}(${vehicleCount})`}
            </Radio>
        )
    })
    return (
        <Radio.Group>
            {vehicles}
        </Radio.Group>
    );
}

export default VehicleSelect;
