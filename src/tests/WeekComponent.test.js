import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';

import WeekComponent from '../components/WeekComponent';

configure ({ adapter: new Adapter() });

const setUp = (props={}) => {
    const component = shallow(<WeekComponent {...props} />);
    return component;
}

describe('Header Component', () => {

    let component;
    beforeEach(() => {
        const state = {
            forcast: [], error:[]
        };
        component = setUp(state);
    });

    test('should render correctly', () => {
        const wrapper = component.find('.wrapper');
        expect(wrapper.length).toBe(1);
    });

    test('should render <DayComponent />', ()=> {
        const wrapper = component.find('DayComponent');
        expect(wrapper.length).toBe(1);
    });

    jest.mock('axios');

    const list = [
        {
            0: {
                    "clouds": "{all: 92}",
                    "dt": "1555038000",
                    "dt_txt": "2019-04-12 03:00:00",
                    "main": "{temp: -0.77, temp_min: -0.77, temp_max: 4.31, pressure: 1015.41, sea_level: 1015.41}",
                    "rain": "{3h: 0.64}",
                    "snow": "{}",
                    "sys": "{pod: 'n'}",
                    "weather": "[{…}]",
                    "wind": "{speed: 2.86, deg: 18.5003}"
                }
        }
    ];

        test('should fetch weather details', () => {
        const resp = {data: list};
        axios.get.mockResolvedValue(resp);
        return WeekComponent.getWeatherDetails().then(resp => expect(resp.data).toEqual(list));
        });
});
