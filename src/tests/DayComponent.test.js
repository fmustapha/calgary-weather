import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DayComponent  from '../components/DayComponent';

configure ({ adapter: new Adapter() });

const setUp = (props={}) => {
    const component = shallow(<DayComponent {...props} />);
    return component;
}

describe('DayComponent', () => {

    let component;
    beforeEach(() => {
        const props = {
            index: 1,
            icon: {
                alt: "mist",
                src: "faWater",
                color: "black",
                id: "7"
            },
            details: {
                dt_txt: " 2019-04-13 15:00:00"
            }
        };
        component = setUp(props);
        
    });
    describe('Have props', ()=> {
        test('should render a card', () => {
            console.log(component.debug())
            const wrapper = component.find('.card');
            expect(wrapper.length).toBe(1);
        });

        test('should render a font awesome icon', () => {
            const wrapper = component.find('.icon');
            expect(wrapper.length).toBe(1);
        });

        test('should render the body of the card', () => {
            const wrapper = component.find('.card-body .card-align');
            expect(wrapper.length).toBe(1);
        });

        test('should render a date', () => {
            const wrapper = component.find('.card-title');
            expect(wrapper.length).toBe(1);
        });

        test('should render a date', () => {
            const wrapper = component.find('.card-title');
            expect(wrapper.length).toBe(1);
        });
        
        test('should render a date', () => {
            const wrapper = component.find('p');
            expect(wrapper.length).toBe(2);
        });
    });

    describe('Have no props', ()=> {
        let component;
        beforeEach(() => {
            component = setUp();
            });
    });
});