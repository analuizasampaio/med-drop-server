import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { TipoCadastroComponent } from './components/tipo-cadastro/tipo-cadastro.component';
import { CadastroMedicoComponent } from './components/cadastro-medico/cadastro-medico.component';
import { CadastroFarmaciaComponent } from './components/cadastro-farmacia/cadastro-farmacia.component';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { LoginComponent } from './components/login/login.component';
import { AcompanhamentoComponent } from './components/acompanhamento/acompanhamento.component';
import { MapComponent } from './components/map/map.component';
import { SlideComponent } from './components/slide/slide.component';
import { CardComponent } from './components/card/card.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { StripePaymentComponent } from './components/stripe-payment/stripe-payment.component';
import { StripeProductComponent } from './components/stripe-product/stripe-product.component';
import { StripeSuccessComponent } from './components/stripe-success/stripe-success.component';
import { StripeFailureComponent } from './components/stripe-failure/stripe-failure.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    TipoCadastroComponent,
    CadastroMedicoComponent,
    CadastroFarmaciaComponent,
    CadastroClienteComponent,
    LoginComponent,
    AcompanhamentoComponent,
    MapComponent,
    SlideComponent,
    CardComponent,
    ProdutosComponent,
    StripePaymentComponent,
    StripeProductComponent,
    StripeSuccessComponent,
    StripeFailureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
