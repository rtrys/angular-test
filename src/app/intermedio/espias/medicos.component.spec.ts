import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('MedicosComponent', () => {

    let comp: MedicosComponent;
    const svc = new MedicosService(null);

    beforeEach( () => {
        comp = new MedicosComponent(svc);
    });

    it('Debe cargar medicos', () => {
        spyOn( svc, 'getMedicos' ).and.callFake(() => {
            return Observable.from( ['medico1', 'medico2', 'medico3'] );
        });

        comp.ngOnInit();
        expect( comp.medicos.length ).toBeGreaterThan( 0 );
    });

    it('Debe llamar al servidor para agregar medico', () => {
        const spy = spyOn( svc, 'agregarMedico' ).and.callFake((medico) => {
            return Observable.empty();
        });
        comp.agregarMedico();
        expect( spy ).toHaveBeenCalled();
    });

    it('Debe agregar un nuevo medico al arreglo de medicos', () => {
        const medico = { id: 1, nombre: 'medicoX' };
        spyOn( svc, 'agregarMedico' ).and.returnValue( Observable.from( [medico] ) );
        comp.agregarMedico();
        expect( comp.medicos.indexOf( medico ) ).toBeGreaterThanOrEqual( 0 );
    });

    it('Si falla la adicion, el error debe ser igual al error del servicio', () => {
        const miError = 'No se puede agregar el medico';
        spyOn( svc, 'agregarMedico' ).and.returnValue(
            Observable.throw( miError )
        );
        comp.agregarMedico();
        expect( comp.mensajeError ).toBe( miError );
    });

    it('Debe de llamar al servidor para borrar un medico', () => {
        const spy = spyOn( svc, 'borrarMedico' ).and.returnValue(Observable.empty());
        spyOn( window, 'confirm' ).and.returnValue( true );
        comp.borrarMedico( '1' );
        expect( spy ).toHaveBeenCalledWith( '1' );
    });

    it('NO Debe de llamar al servidor para borrar un medico', () => {
        const spy = spyOn( svc, 'borrarMedico' ).and.returnValue(Observable.empty());
        spyOn( window, 'confirm' ).and.returnValue( false );
        comp.borrarMedico( '1' );
        expect( spy ).not.toHaveBeenCalledWith( '1' );
    });

    it('NO Debe de llamar al servidor para borrar un medico', () => {
        const spy = spyOn( svc, 'borrarMedico' ).and.returnValue(Observable.empty());
        spyOn( window, 'confirm' ).and.returnValue( false );
        comp.borrarMedico( '1' );
        expect( spy ).not.toHaveBeenCalledWith( '1' );
    });
});
