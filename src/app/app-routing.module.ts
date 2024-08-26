import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApresentacaoComponent } from './Pages/apresentacao/apresentacao.component';
import { LoginComponent } from './Pages/login/login.component';
import { CadastroComponent } from './Pages/cadastro/cadastro.component';
import { PrincipalComponent } from './Pages/principal/principal.component';

const routes: Routes = [
{path: '', redirectTo: "/apresentacao", pathMatch: 'full'},
{ path: 'apresentacao', component: ApresentacaoComponent },
{path: 'login', component: LoginComponent},
{path: 'cadastro', component: CadastroComponent},
{ path: '**', redirectTo: '/apresentacao', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
