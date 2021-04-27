/* 
import { render } from "@testing-library/react";
*/
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {
    

    const wrapper = shallow(<CounterApp />)

    beforeEach(()=> {})

    test('Debe mostrar CounterApp correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    })
    
    test('Debe de mostrar el valor enviado por props', () => {
        const val = 100; 
        const wrapper = shallow(<CounterApp value={val}/>)

        const textoParrafo = wrapper.find('h2').text(); 

        expect(textoParrafo).toBe('100');

    })
    
    test('Debe incrementar contador con botón +1 ', () => {
        

        wrapper.find('button').at(0).simulate('click');

        const textoParrafo = wrapper.find('h2').text(); 
        expect(textoParrafo).toBe('11');


    })


    test('Debe regresar el valor a 10 ', () => {
        

        wrapper.find('button').at(1).simulate('click');

        const textoParrafo = wrapper.find('h2').text(); 
        expect(textoParrafo).toBe('10');


    })

    test('Debe decrementar contador con botón -1 ', () => {
        

        wrapper.find('button').at(2).simulate('click');

        const textoParrafo = wrapper.find('h2').text(); 
        expect(textoParrafo).toBe('9');


    })


    

})


