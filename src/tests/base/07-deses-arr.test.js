import '@testing-library/jest-dom'
import { retornaArreglo, usState } from '../../base/base-pruebas/07-deses-arr'


describe('Pruebas en 07-deses-arr', () => {

    test('Prueba en retornaArreglo() debe retornar un Array', () => {

        const arr  = retornaArreglo();
        const [letras,numeros] = arr;


        expect(arr).toEqual(['ABC', 123]);

        expect(typeof letras).toBe( 'string');

        expect(typeof numeros).toBe( 'number');
    })

    
})
