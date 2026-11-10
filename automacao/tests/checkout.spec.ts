import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProdutosPage } from '../pages/ProdutosPage';
import { CarrinhoPage } from '../pages/CarrinhoPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { USUARIOS, CLIENTE } from '../pages/dados';

test.describe('Checkout', () => {
  let produtos: ProdutosPage;
  let carrinho: CarrinhoPage;
  let checkout: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    await new LoginPage(page).entrar(USUARIOS.padrao);
    produtos = new ProdutosPage(page);
    carrinho = new CarrinhoPage(page);
    checkout = new CheckoutPage(page);
  });

  async function irParaCheckout(...itens: string[]) {
    for (const item of itens) await produtos.adicionar(item);
    await produtos.abrirCarrinho();
    await carrinho.irParaCheckout();
  }

  test('TC-20 compra completa com um produto', async ({ page }) => {
    await irParaCheckout('Sauce Labs Backpack');
    await expect(page.getByTestId('title')).toHaveText('Checkout: Your Information');
    await checkout.preencher();
    await checkout.continuar();
    await expect(checkout.subtotal()).toHaveText('Item total: $29.99');
    await expect(checkout.taxa()).toHaveText('Tax: $2.40');
    await expect(checkout.total()).toHaveText('Total: $32.39');
    await checkout.finalizar();
    await expect(checkout.mensagemFinal()).toHaveText('Thank you for your order!');
    await expect(produtos.contadorCarrinho()).toHaveCount(0);
    await checkout.voltarParaHome();
    await produtos.estaAberta();
  });

  test('TC-21 total com dois produtos e taxa de 8%', async () => {
    await irParaCheckout('Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt');
    await checkout.preencher();
    await checkout.continuar();
    await expect(checkout.subtotal()).toHaveText('Item total: $45.98');
    await expect(checkout.taxa()).toHaveText('Tax: $3.68');
    await expect(checkout.total()).toHaveText('Total: $49.66');
  });

  test('TC-22 First Name obrigatório', async () => {
    await irParaCheckout('Sauce Labs Backpack');
    await checkout.preencher({ sobrenome: CLIENTE.sobrenome, cep: CLIENTE.cep });
    await checkout.continuar();
    await expect(checkout.erro()).toHaveText('Error: First Name is required');
  });

  test('TC-23 Last Name obrigatório', async () => {
    await irParaCheckout('Sauce Labs Backpack');
    await checkout.preencher({ nome: CLIENTE.nome, cep: CLIENTE.cep });
    await checkout.continuar();
    await expect(checkout.erro()).toHaveText('Error: Last Name is required');
  });

  test('TC-24 Zip/Postal Code obrigatório', async () => {
    await irParaCheckout('Sauce Labs Backpack');
    await checkout.preencher({ nome: CLIENTE.nome, sobrenome: CLIENTE.sobrenome });
    await checkout.continuar();
    await expect(checkout.erro()).toHaveText('Error: Postal Code is required');
  });

  test('TC-25 cancelar nos passos 1 e 2', async ({ page }) => {
    await irParaCheckout('Sauce Labs Backpack');
    await checkout.cancelar();
    await expect(page).toHaveURL(/cart\.html/);
    await expect(carrinho.itens()).toHaveCount(1);
    await carrinho.irParaCheckout();
    await checkout.preencher();
    await checkout.continuar();
    await checkout.cancelar();
    await produtos.estaAberta();
    await expect(produtos.contadorCarrinho()).toHaveText('1');
  });

  test('TC-26 checkout bloqueado com carrinho vazio', async ({ page }) => {
    test.info().annotations.push({ type: 'defeito', description: 'SDEMO-DF-10' });
    test.fail(true, 'Defeito conhecido SDEMO-DF-10: o checkout abre com o carrinho vazio');
    await produtos.abrirCarrinho();
    await carrinho.irParaCheckout();
    await expect(page).toHaveURL(/cart\.html/);
  });
});
