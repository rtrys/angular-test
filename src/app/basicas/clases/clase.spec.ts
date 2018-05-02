import { Jugador } from './clase';
describe('Pruebas de clase', () => {

    let jugador: Jugador;

    beforeEach(() => {
        jugador = new Jugador();
    });

    it('Debe retornar 80 de hp, si recibe 20 de danio', () => {
        const resp = jugador.recibirDanio(20);
        expect( resp ).toBe( 80 );
    });

    it('Debe retornar 50 de hp, si recibe 50 de danio', () => {
        const resp = jugador.recibirDanio(50);
        expect( resp ).toBe( 50 );
    });

    it('Debe retornar 0 de hp, si recibe de danio mas de 100', () => {
        const resp = jugador.recibirDanio(200);
        expect( resp ).toBe( 0 );
    });
});
