import { incrementar } from './numeros';
describe('Pruebas con numeros', () => {
    it('Debe retornar 100, si el numero es mayor que 100', () => {
        const resp = incrementar(300);
        expect( resp ).toBe(100);
    });
    it('Debe retornar el numero enviado + 1, si no es mayor a 100', () => {
        const numero = 50;
        const resp = incrementar(50);
        expect( resp ).toBe( numero + 1 );
    });
});
