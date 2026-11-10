import { Page, expect } from '@playwright/test';

export class ProdutosPage {
  constructor(private page: Page) {}

  titulo = () => this.page.getByTestId('title');
  itens = () => this.page.getByTestId('inventory-item');
  nomes = () => this.page.getByTestId('inventory-item-name');
  precos = () => this.page.getByTestId('inventory-item-price');
  imagens = () => this.page.locator('.inventory_item_img img');
  ordenacao = () => this.page.getByTestId('product-sort-container');
  ordenacaoAtiva = () => this.page.getByTestId('active-option');
  contadorCarrinho = () => this.page.getByTestId('shopping-cart-badge');

  item(nome: string) {
    return this.itens().filter({ hasText: nome });
  }

  async estaAberta() {
    await expect(this.page).toHaveURL(/inventory\.html/);
    await expect(this.titulo()).toHaveText('Products');
  }

  async ordenarPor(valor: 'az' | 'za' | 'lohi' | 'hilo') {
    await this.ordenacao().selectOption(valor);
  }

  async adicionar(nome: string) {
    await this.item(nome).getByRole('button', { name: 'Add to cart' }).click();
  }

  async remover(nome: string) {
    await this.item(nome).getByRole('button', { name: 'Remove' }).click();
  }

  async listaDePrecos() {
    const textos = await this.precos().allTextContents();
    return textos.map((t) => Number(t.replace('$', '')));
  }

  async abrirCarrinho() {
    await this.page.getByTestId('shopping-cart-link').click();
  }
}
