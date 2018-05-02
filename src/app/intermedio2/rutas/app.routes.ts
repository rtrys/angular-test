import { Routes } from '@angular/router';
import { HospitalComponent } from '../hospital/hospital.component';
import { MedicoComponent } from '../medico/medico.component';
import { IncrementadorComponent } from '../incrementador/incrementador.component';

export const RUTAS: Routes = [
    { path: '/hospital', component: HospitalComponent },
    { path: '/medico/:id', component: MedicoComponent },
    { path: '**', component: IncrementadorComponent }
];
