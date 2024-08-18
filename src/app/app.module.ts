import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApresentacaoComponent } from './Pages/apresentacao/apresentacao.component';
import { CadastroComponent } from './Pages/cadastro/cadastro.component';
import { PrincipalComponent } from './Pages/principal/principal.component';
import { LoginComponent } from './Pages/login/login.component';
import { FooterComponent } from './Components/Apresentacao/footer/footer.component';
import { PrincipalApresentacaoComponent } from './Components/Apresentacao/principal-apresentacao/principal-apresentacao.component';
import { PlanosComponent } from './Components/Apresentacao/planos/planos.component';


@NgModule({
  declarations: [
    AppComponent,
    ApresentacaoComponent,
    CadastroComponent,
    PrincipalComponent,
    LoginComponent,
    FooterComponent,
    PrincipalApresentacaoComponent,
    PlanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
