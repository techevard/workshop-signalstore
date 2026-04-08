import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
    },
    {
        path: 'step-one',
        loadComponent: () => import('./pages/step/step-one/step-one').then(m => m.StepOne)
    },
    {
        path: 'step-two',
        loadComponent: () => import('./pages/step/step-two/step-two').then(m => m.StepTwo)
    },
    {
        path: 'resume',
        loadComponent: () => import('./pages/step/resume/resume').then(m => m.Resume)
    }
];
