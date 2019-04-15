import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';

import WeekComponent from '../components/WeekComponent';

configure ({ adapter: new Adapter() });

describe('WeekComponent', () => {
    // const state = { forcast: [], error:{}, status: 'initial' }
    const props = {}
    const wrapper = shallow(<WeekComponent
      {...props}
    />);
  
    const list = [
        {
            0: {
                    clouds: {all: 92},
                    dt: "1555038000",
                    dt_txt: "2019-04-12 03:00:00",
                    main: {temp: -0.77, temp_min: -0.77, temp_max: 4.31, pressure: 1015.41, sea_level: 1015.41},
                    rain: "{3h: 0.64}",
                    snow: {},
                    sys: "{pod: 'n'}",
                    weather: [{}],
                    wind: {speed: 2.86, deg: 18.5003}
                }
        }
    ];

    //     setTimeout(()=> {
    //         wrapper.update();
    //         expect(wrapper.find('DayComponent').length).toEqual(1);
    //         done();
    //     }, 3000);
    //   });

    test('should fetch weather details', () => {
    const resp = {data: list};
    axios.get.mockResolvedValue(resp);
    return WeekComponent.getWeatherDetails().then(resp => expect(resp.data).toEqual(list));
    });
  
    test('renders the wrapper div', () => {
        expect(wrapper.find('.wrapper').length).toBe(1);
    });

    describe('When status is loading', ()=> {
        const wrapper = shallow(<WeekComponent {...props} />);
        wrapper.setState({status: "loading"})
        test('renders Loading text when the status is loading', () => {
            expect(wrapper.find('#load').length).toBe(1);
        });
    });

    describe('When status is loading', ()=> {
        const wrapper = shallow(<WeekComponent {...props} />);
        wrapper.setState({forcast: [], status: "completed"})
        test('renders no info feedback', () => {
            expect(wrapper.find('#no-info').length).toBe(1);
        });
    });

    describe('When an error occured', ()=> {
        const wrapper = shallow(<WeekComponent {...props} />);
        wrapper.setState({status: "error"})
        test('renders error information', () => {
            expect(wrapper.find('#error-info').length).toBe(1);
        });
    });
});
