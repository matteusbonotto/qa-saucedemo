import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProdutosPage } from '../pages/ProdutosPage';
import { CarrinhoPage } from '../pages/CarrinhoPage';
import { USUARIOS } from '../pages/dados';

test.describe('Carrinho', () => {
  let produtos: ProdutosPage;
  let carrinho: CarrinhoPage;

  test.beforeEach(async ({ page }) => {
    await new LoginPage(page).entrar(USUARIOS.padrao);
    produtos = new ProdutosPage(page);
    carrinho = new CarrinhoPage(page);
  });

  test('TC-14 adicionar produto pela lista', async () => {
    await produtos.adicionar('Sauce Labs Backpack');
    await expect(produtos.item('Sauce Labs Backpack').getByRole('button')).toHaveText('Remove');
    await expect(produtos.contadorCarrinho()).toHaveText('1');
    await produtos.abrirCarrinho();
    const item = carrinho.item('Sauce Labs Backpack');
    await expect(item.getByTestId('item-quantity')).toHaveText('1');
    await expect(item.getByTestId('inventory-item-price')).toHaveText('$29.99');
  });

  test('TC-15 adicionar todos os produtos', async ({ page }) => {
    for (const botao of await page.getByRole('button', { name: 'Add to cart' }).all()) {
      await botao.click();
    }
    await expect(produtos.contadorCarrinho()).toHaveText('6');
    await produtos.abrirCarrinho();
    await expect(carrinho.itens()).toHaveCount(6);
  });

  test('TC-16 remover produto pela lista', async () => {
    await produtos.adicionar('Sauce Labs Bike Light');
    await expect(produtos.contadorCarrinho()).toHaveText('1');
    await produtos.remover('Sauce Labs Bike Light');
    await expect(produtos.item('Sauce Labs Bike Light').getByRole('button')).toHaveText('Add to cart');
    await expect(produtos.contadorCarrinho()).toHaveCount(0);
  });

  test('TC-17 remover produto dentro do carrinho', async () => {
    await produtos.adicionar('Sauce Labs Backpack');
    await produtos.adicionar('Sauce Labs Bike Light');
    await produtos.abrirCarrinho();
    await expect(carrinho.itens()).toHaveCount(2);
    await carrinho.remover('Sauce Labs Bike Light');
    await expect(carrinho.nomes()).toHaveText(['Sauce Labs Backpack']);
    await expect(produtos.contadorCarrinho()).toHaveText('1');
  });

  test('TC-18 Continue Shopping mantém o carrinho', async () => {
    await produtos.adicionar('Sauce Labs Backpack');
    await produtos.abrirCarrinho();
    await carrinho.continuarComprando();
    await produtos.estaAberta();
    await expect(produtos.contadorCarrinho()).toHaveText('1');
  });

  test('TC-19 carrinho continua após recarregar', async ({ page }) => {
    await produtos.adicionar('Sauce Labs Backpack');
    await page.reload();
    await expect(produtos.contadorCarrinho()).toHaveText('1');
    await expect(produtos.item('Sauce Labs Backpack').getByRole('button')).toHaveText('Remove');
  });
});
