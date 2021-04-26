import '@testing-library/jest-dom'
import { getHeroeById, getHeroesByOwner } from '../../base/base-pruebas/08-imp-exp';
import heroes from '../../data/heroes';


describe('Pruebas en 08-imp-exp', () => {

    test('Prueba en getHeroeById() debe retornar un heroe por id', () => {

        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find( h => h.id === id);

        expect(heroe).toEqual(heroeData);
    })

    test('Prueba en getHeroeById() debe retornar undefine si no existe id', () => {

        const id = 11;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined );

    })


    test('Prueba en getHeroesByOwner() debe retornar lista de heroes por owner', () => {

        const owner = 'DC';
        const heroes_f = getHeroesByOwner(owner);
        const heroe_fData = heroes.filter( (heroe) => heroe.owner === owner );

        expect(heroes_f).toEqual(heroe_fData );

    })


    test('Prueba en getHeroesByOwner() debe retornar 2 si owner es igual a Marvel', () => {

        const owner = 'Marvel';
        const heroes_f = getHeroesByOwner(owner);

        expect(heroes_f.length).toBe(2);

    })

})
