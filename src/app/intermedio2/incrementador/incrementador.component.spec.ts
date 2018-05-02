import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { element } from 'protractor';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe mostar leyenda', () => {
        component.leyenda = 'Progreso de carga';

        // dispara la deteccion de cambios
        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;
        expect( elem.innerHTML ).toContain( 'Progreso de carga' );
    });

    it('Debe mostrar en el input el valor del progreso', () => {
        component.cambiarValor( 5 );

        // dispara la deteccion de cambios
        fixture.detectChanges();

        // la deteccion de cambios puede tardar
        // es posible utilizar esta promesa para
        // asegurar que se valida hasta que este
        // completado el cambaio
        fixture.whenStable().then(() => {
            const elem = fixture.debugElement.query( By.css('input') ).nativeElement;
            expect( elem.value ).toBe( '55' );
        });
    });

    it('Debe incrementar / decrementar a traves de los botones', () => {
        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );

        botones[0].triggerEventHandler( 'click', null );
        expect(component.progreso).toBe(45);

        botones[1].triggerEventHandler( 'click', null );
        expect(component.progreso).toBe(50);
    });

    it('Debe incrementar / decrementar el progreso a traves de los botones', () => {
        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );
        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        botones[0].triggerEventHandler( 'click', null );

        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect( elem.innerHTML ).toContain( '45' );

            botones[1].triggerEventHandler( 'click', null );
            botones[1].triggerEventHandler( 'click', null );

            fixture.detectChanges();
            fixture.whenStable().then(() => {
                expect( elem.innerHTML ).toContain( '55' );
            });
        });


    });

});
