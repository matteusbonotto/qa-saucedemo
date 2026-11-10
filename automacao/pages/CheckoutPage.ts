import { Page } from '@playwright/test';
import { CLIENTE } from './dados';

export class CheckoutPage {
  constructor(private page: Page) {}

  nome = () => this.page.getByTestId('firstName');
  sobrenome = () => this.page.getByTestId('lastName');
  cep = () => this.page.getByTestId('postalCode');
  erro = () => this.page.getByTestId('error');
  subtotal = () => this.page.getByTestId('subtotal-label');
  taxa = () => this.page.getByTestId('tax-label');
  total = () => this.page.getByTestId('total-label');
  mensagemFinal = () => this.page.getByTestId('complete-header');

  async preencher(dados: Partial<typeof CLIENTE> = CLIENTE) {
    if (dados.nome !== undefined) await this.nome().fill(dados.nome);
    if (dados.sobrenome !== undefined) await this.sobrenome().fill(dados.sobrenome);
    if (dados.cep !== undefined) await this.cep().fill(dados.cep);
  }

  async continuar() {
    await this.page.getByTestId('continue').click();
  }

  async cancelar() {
    await this.page.getByTestId('cancel').click();
  }

  async finalizar() {
    await this.page.getByTestId('finish').click();
  }

  async voltarParaHome() {
    await this.page.getByTestId('back-to-products').click();
  }
}
