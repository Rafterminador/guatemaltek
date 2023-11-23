import { Routes } from '@angular/router';
import { InventoryComponent } from './pages/inventory/inventory.component';

export const routes: Routes = [
    { path: '', component: InventoryComponent },
    { path: '**', redirectTo: '' }
];
