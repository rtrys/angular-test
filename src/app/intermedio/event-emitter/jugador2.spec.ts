import { Jugador2 } from './jugador2';

describe('Jugador2 emit', () => {

    let jugador2: Jugador2;

    beforeEach(() => {
        jugador2 = new Jugador2();
    });

    it('Debe emitir un evento cuando recibe danio', () => {

        let nuevoHp = 0;
        jugador2.hpCambia.subscribe( hp => {
            nuevoHp = hp;
        });

        jugador2.recibirDanio( 1000 );
        expect( nuevoHp ).toBe( 0 );
    });

    it('Debe emitir un evento cuando recibe danio y sobrevivir si es menor de 100', () => {

        let nuevoHp = 0;
        jugador2.hpCambia.subscribe( hp => {
            nuevoHp = hp;
        });

        jugador2.recibirDanio( 50 );
        expect( nuevoHp ).toBe( 50 );
    });

});
