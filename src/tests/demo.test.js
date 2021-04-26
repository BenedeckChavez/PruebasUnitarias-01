
describe('Pruebas del archivo demo.test.js', () => {
    
    test('debe de ser iguales los strings', () => {

        // 1. Inicialización
        const Mensaje = 'Hola Mundo';

        // 2. Estímulo
        const mensaje3 = "Hola Mundo";

        // 3. Observar comportamiento
        expect(Mensaje).toBe(mensaje3)
    })

})



