import { Page, expect } from '@playwright/test';
import { SENHA } from './dados';

export class LoginPage {
  constructor(private page: Page) {}

  usuario = () => this.page.getByTestId('username');
  senha = () => this.page.getByTestId('password');
  botaoLogin = () => this.page.getByTestId('login-button');
  erro = () => this.page.getByTestId('error');

  async abrir() {
    await this.page.goto('/');
  }

  async entrar(usuario: string, senha: string = SENHA) {
    await this.abrir();
    if (usuario) await this.usuario().fill(usuario);
    if (senha) await this.senha().fill(senha);
    await this.botaoLogin().click();
  }

  async esperarErro(texto: string) {
    await expect(this.erro()).toHaveText(texto);
  }
}
