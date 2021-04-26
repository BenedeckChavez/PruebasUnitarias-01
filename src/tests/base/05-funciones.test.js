import '@testing-library/jest-dom'
import { getUser,getUsuarioActivo } from '../../base/base-pruebas/05-funciones'


describe('Pruebas en 05-funciones', () => {

    test('Prueba en getUser() debe retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const userGet = getUser();

        expect(userGet).toEqual(userTest);
        
    })

    test('Prueba en getUsuarioActivo() debe retornar un objeto con username El_Papi1502', () => {

    
        const userTest = {
            uid: 'ABC567',
            username: 'El_Papi1502'
        }
        const userGet = getUsuarioActivo(userTest.username);
        
        expect(userGet).toEqual(userTest);
        
    })
    
})
