import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApresentacaoComponent } from './Pages/apresentacao/apresentacao.component';
import { CadastroComponent } from './Pages/cadastro/cadastro.component';
import { LoginComponent } from './Pages/login/login.component';
import { FooterComponent } from './Components/CP-Principais/footer/footer.component';
import { PrincipalApresentacaoComponent } from './Components/Apresentacao/principal-apresentacao/principal-apresentacao.component';
import { PlanosComponent } from './Components/Apresentacao/planos/planos.component';
import { QuemSomosComponent } from './Components/Apresentacao/quem-somos/quem-somos.component';
import { FuncionalidadesComponent } from './Components/Apresentacao/funcionalidades/funcionalidades.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { InicialComponent } from './Pages/inicial/inicial.component';
import { FuncionalidadesInicialComponent } from './Components/Inicial/funcionalidades-inicial/funcionalidades-inicial.component';
import { CriacaoInicialComponent } from './Components/Inicial/criacao-inicial/criacao-inicial.component';
import { HeaderComponent } from './Components/CP-Principais/header/header.component'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormularioComponent } from './Pages/formulario/formulario.component';
import { FormularioCriacaoComponent } from './Components/Formulario-criacao/formulario-criacao/formulario-criacao.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TermosUsoComponent } from './Pages/termos-uso/termos-uso.component';
import { EventoExistenteComponent } from './Pages/evento-existente/evento-existente.component';
import { EventosComponent } from './Components/eventos/eventos.component';
import { AreaUsuarioComponent } from './Pages/area-usuario/area-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ApresentacaoComponent,
    CadastroComponent,
    LoginComponent,
    FooterComponent,
    PrincipalApresentacaoComponent,
    PlanosComponent,
    QuemSomosComponent,
    FuncionalidadesComponent,
    InicialComponent,
    FuncionalidadesInicialComponent,
    CriacaoInicialComponent,
    HeaderComponent,
    FormularioComponent,
    FormularioCriacaoComponent,
    TermosUsoComponent,
    EventoExistenteComponent,
    EventosComponent,
    AreaUsuarioComponent,
  ],
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    HttpClientModule,
    MatDatepickerModule,
MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
