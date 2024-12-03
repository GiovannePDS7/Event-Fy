import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApresentacaoComponent } from './Pages/apresentacao/apresentacao.component';
import { LoginComponent } from './Pages/login/login.component';
import { CadastroComponent } from './Pages/cadastro/cadastro.component';
import { InicialComponent } from './Pages/inicial/inicial.component';
import { FormularioComponent } from './Pages/formulario/formulario.component';
import { AuthGuard } from './security/AuthGuard';
import { TermosUsoComponent } from './Pages/termos-uso/termos-uso.component';
import { EventoExistenteComponent } from './Pages/evento-existente/evento-existente.component';
import { AreaUsuarioComponent } from './Pages/area-usuario/area-usuario.component';

const routes: Routes = [
  { path: '', redirectTo: "/apresentacao", pathMatch: 'full' },
  { path: 'apresentacao', component: ApresentacaoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'inicial', component: InicialComponent, canActivate: [AuthGuard] },
   { path: 'formulario', component: FormularioComponent, canActivate: [AuthGuard]},
  { path: 'termosUso', component: TermosUsoComponent },
  { path: 'eventoExistente', component: EventoExistenteComponent, canActivate: [AuthGuard]},
  { path: 'areaUsuario', component: AreaUsuarioComponent/*, canActivate: [AuthGuard]*/},
  { path: '**', redirectTo: '/apresentacao', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
