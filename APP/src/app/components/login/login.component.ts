import {
  Component,
  ElementRef,
  NgZone,
  ViewChild,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   // *
  // * O "email" e "senha" serão preenchidos pelo usuário.
  // *
  // * O "recaptcha" será retornado pelo Google assim
  // * que o usuário resolver o CAPTCHA
  // *
  form: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.email,
      Validators.required,
    ]),
    senha: new FormControl(null, [Validators.required]),
    recaptcha: new FormControl(null, [Validators.required]),
  });

  @ViewChild('divRecaptcha')
  divRecaptcha!: ElementRef<HTMLDivElement>;

  // *
  // * Quando adicionamos o script do reCAPTCHA no
  // * index.html, o script cria uma variável de
  // * escopo global chamada "grecaptcha".
  // * Então para pegar sua referência podemos
  // * acessá-la através do "window"
  // *
  get grecaptcha(): any {
    const w = window as any;
    return w['grecaptcha'];
  }

  constructor(private ngZone: NgZone) {
    this.renderizarReCaptcha();
  }

  renderizarReCaptcha() {
    // *
    // * Para evitar que change detection seja disparado
    // * cada vez que o setTimeout for executado,
    // * executamos essa recorrência fora da zona
    // * do Angular, por isso o usamos o runOutsideAngular
    // *
    // * Para saber mais sobre change detection:
    // * https://consolelog.com.br/como-funciona-change-detection-angular/
    // * 
    this.ngZone.runOutsideAngular(() => {
      // *
      // * Se o "grecaptcha" ainda não foi carregado ou
      // * o elemento <div> onde o reCAPTCHA será
      // * renderizado ainda não foi construído,
      // * aguardamos algum tempo e executamos novamente
      // * este método:
      // *
      if (!this.grecaptcha || !this.divRecaptcha) {
        setTimeout(() => {
          this.renderizarReCaptcha();
        }, 500);

        return;
      }

      // * Se chegou aqui é porque o recaptcha já está
      // * carregado. Então solicitamos sua renderização
      // * na tela.
      const idElemento =
        this.divRecaptcha.nativeElement.getAttribute('id');

      this.grecaptcha.render(idElemento, {
        sitekey: '6LdXaJ8mAAAAADWFzBeLYBBE-bFGjCSiibBBoxpF',
        callback: (response: string) => {
          // * Este método é chamado quando o usuário
          // * resolver o desafio do CAPTCHA
          this.ngZone.run(() => {
            this.form.get('recaptcha')?.setValue(response);
          });
        },
      });
    });
  }

  login() {
    console.log(this.form.value);
  }

}
