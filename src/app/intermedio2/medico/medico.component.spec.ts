import { MedicoComponent } from './medico.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';

describe('Medico Component', () => {

    let comp: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ MedicoComponent ],
            providers: [ MedicoService ],
            imports: [ HttpClientModule ]
        });

        fixture = TestBed.createComponent( MedicoComponent );
        comp = fixture.componentInstance;
    });

    it('Debe crearse el component', () => {
        expect( comp ).toBeTruthy();
    });

    it('Debe retornar el nombre enviado', () => {
        const nombre = 'Hugo';
        const resp = comp.saludarMedico( nombre );
        expect( resp ).toContain( nombre );
    });
});
