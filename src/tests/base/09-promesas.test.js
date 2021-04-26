import '@testing-library/jest-dom'
import { getHeroeByIdAsync } from '../../base/base-pruebas/09-promesas';
import heroes from '../../data/heroes';


describe('Pruebas en 09-promesas.js', () => {

    test('Prueba en getHeroeByIdAsync() debe retornar un heroe por id', ( done ) => {

        const id = 1;
        getHeroeByIdAsync(id).then(heroe => {
            expect(heroe).toEqual(heroes[0])
            done();
        });

    })

    test('Prueba en getHeroeByIdAsync() debe retornar un error cuando no existe heroe por id', ( done ) => {

        const id = 100;
        getHeroeByIdAsync(id).catch(err => {

            expect(err).toBe( 'No se pudo encontrar el héroe');
            done();
        })

    })



    
})
