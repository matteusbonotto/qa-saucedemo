import { Page } from '@playwright/test';

export class CarrinhoPage {
  constructor(private page: Page) {}

  itens = () => this.page.getByTestId('inventory-item');
  nomes = () => this.page.getByTestId('inventory-item-name');

  item(nome: string) {
    return this.itens().filter({ hasText: nome });
  }

  async remover(nome: string) {
    await this.item(nome).getByRole('button', { name: 'Remove' }).click();
  }

  async continuarComprando() {
    await this.page.getByTestId('continue-shopping').click();
  }

  async irParaCheckout() {
    await this.page.getByTestId('checkout').click();
  }
}
