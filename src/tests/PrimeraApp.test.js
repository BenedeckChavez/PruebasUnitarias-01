/* 
import { render } from "@testing-library/react";
*/
import React from 'react';
import '@testing-library/jest-dom';
import PrimeraApp from "../PrimeraApp"; 
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp />', () => {
    
/*     test('debe regresar el mensaje "Hola, soy Goku"', () => {

        const Saludo = "Hola, soy Goku";
        const {getByText} = render(<PrimeraApp saludo={ Saludo }/>);

        expect(getByText(Saludo)).toBeInTheDocument();
    }) */

    test('Debe mostrar Primerapp correctamente', () => {

        const Saludo = "Hola, soy Goku";
        const wrapper = shallow(<PrimeraApp  saludo={ Saludo }/>)

        expect( wrapper ).toMatchSnapshot();

    })
    
    test('Debe de enviar el subtitulo enviado por props', () => {
        const Saludo = "Hola, soy Goku";
        const SubTitle = "Soy una prueba de subtitle" 
        const wrapper = shallow(<PrimeraApp  saludo={ Saludo } subtitulo = {SubTitle}/>)

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(SubTitle);

    })
    

})


