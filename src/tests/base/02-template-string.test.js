import '@testing-library/jest-dom'
import { getSaludo } from '../../base/base-pruebas/02-template-string';


describe('Pruebas en 02-template-string.js', () => {

    test('Prueba en getSaludo() debe retornar Hola Benedeck!', () => {

        const nombre= 'Benedeck';
        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre +"!");

        
    })

    test('Prueba en getSaludo() debe retornar Hola Carlos! si el parametro es vacio', () => {

        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos!');

        
    })
    
})
