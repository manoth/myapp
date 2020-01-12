import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ConentComponent } from './contents/conent/conent.component';
import { AuthGuardService } from './services/auth-guard.service';
import { PersanalComponent } from './contents/persanal/persanal.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '', component: ConentComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'index', component: PersanalComponent }
    ]
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
