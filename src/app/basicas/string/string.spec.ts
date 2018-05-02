import { mensaje } from './string';

describe('Pruebas sobre strings', () => {
    it('Debe retornar un string', () => {
        const resp = mensaje('Hugo');
        expect( typeof resp ).toBe('string');
    });
    it('Debe retornar un saludo con el nombre enviado', () => {
        const nombre = 'Hugo';
        const resp = mensaje( nombre );
        expect( resp ).toContain(nombre);
    });
});
