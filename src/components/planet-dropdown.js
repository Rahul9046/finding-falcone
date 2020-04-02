
import React from 'react';
import { Select } from 'antd';
import "antd/dist/antd.css";

const { Option } = Select;
const PlanetDropDown = (props) => {
    let planets = props.planets;
    planets = planets.map((planet, index) => {
        let planetName = planet.name;
        return (
            <Option key={index} value={planetName} >
                {planetName}
            </Option>
        )
    })
    return (
        <Select 
            showSearch
            style={{ width: 200 }}
            placeholder="Select a planet"
            optionFilterProp="children"
            filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            {planets}
        </Select>
    );
}

export default PlanetDropDown;
