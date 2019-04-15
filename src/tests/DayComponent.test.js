import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DayComponent  from '../components/DayComponent';

configure ({ adapter: new Adapter() });

describe('DayComponent', () => {
    const props = {
        index: 1,
        icon: {
            alt: "mist",
            src: "faWater",
            color: "black",
            id: "7"
        },
        details: {
            dt_txt: " 2019-04-13 15:00:00",
            main: { 
                temp: 34.0
            },
            wind: {
                speed: 78
            }
        }
    };
  
    const wrapper = shallow(<DayComponent
      {...props}
    />);
  
    test('renders the card div', () => {
        expect(wrapper.find('.card').length).toBe(1);
    });

    test('renders the Font Awesome Icon component', () => {
      expect(wrapper.find('FontAwesomeIcon').length).toBe(1);
    });

    test('renders the card details wrapper', () => {
        expect(wrapper.find('.card-body').length).toBe(1);
    });

    test('renders the weather date', () => {
        expect(wrapper.find('.card-title').length).toBe(1);
    });

    test('renders the days temperature and wind speed', () => {
        expect(wrapper.find('.card-text').length).toBe(2);
    });
    
    describe('Have no props', ()=> {
        const props = {};
        const wrapper = shallow(<DayComponent {...props} />);
    });
});
