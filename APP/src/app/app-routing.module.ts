import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { CadastroFarmaciaComponent } from './components/cadastro-farmacia/cadastro-farmacia.component';
import { CadastroMedicoComponent } from './components/cadastro-medico/cadastro-medico.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SlideComponent } from './components/slide/slide.component';
import { AcompanhamentoComponent } from './components/acompanhamento/acompanhamento.component';
import { TipoCadastroComponent } from './components/tipo-cadastro/tipo-cadastro.component';
import { MapComponent } from './components/map/map.component';
import { CardComponent } from './components/card/card.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { StripePaymentComponent } from './components/stripe-payment/stripe-payment.component';
import { StripeFailureComponent } from './components/stripe-failure/stripe-failure.component';
import { StripeSuccessComponent } from './components/stripe-success/stripe-success.component';
import { StripeProductComponent } from './components/stripe-product/stripe-product.component';

const routes: Routes = [
  {path:"", redirectTo: "home", pathMatch:"full"},
  {path:"home", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"map", component: MapComponent},
  {path:"slide", component: SlideComponent},
  {path:"card", component: CardComponent},
  {path:"produtos", component: ProdutosComponent},
  {path:"acompanhamento", component: AcompanhamentoComponent},
  {path:"tipo/cadastro", component: TipoCadastroComponent},
  {path:"cadastro/medico", component: CadastroMedicoComponent},
  {path:"cadastro/farmacia", component: CadastroFarmaciaComponent},
  {path:"cadastro/cliente", component: CadastroClienteComponent},
  {path:"pagamento", component: StripePaymentComponent},
  {path:"falha", component: StripeFailureComponent},
  {path:"sucesso", component: StripeSuccessComponent},
  {path:"produto", component: StripeProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
