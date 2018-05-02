import { usuarioLogueado } from './booleanos';

describe('Pruebas de booleanos', () => {
    it('Debe retornar true', () => {
        expect( usuarioLogueado() ).toBeTruthy();
    });
});
