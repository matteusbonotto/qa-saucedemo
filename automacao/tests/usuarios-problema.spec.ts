import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProdutosPage } from '../pages/ProdutosPage';
import { CarrinhoPage } from '../pages/CarrinhoPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { USUARIOS, CLIENTE } from '../pages/dados';

// Os testes abaixo cobrem defeitos conhecidos que não serão corrigidos (projeto de estudo).
// test.fail() mantém a suíte verde e avisa se algum deles passar a funcionar.
function defeito(id: string, descricao: string) {
  test.info().annotations.push({ type: 'defeito', description: id });
  test.fail(true, `Defeito conhecido ${id}: ${descricao}`);
}

test.describe('Usuários com problema', () => {
  test('TC-30 problem_user: cada produto com sua imagem', async ({ page }) => {
    defeito('SDEMO-DF-13', 'todos os produtos aparecem com a mesma imagem');
    await new LoginPage(page).entrar(USUARIOS.problema);
    const imagens = await new ProdutosPage(page).imagens().evaluateAll((els) =>
      els.map((e) => (e as HTMLImageElement).src),
    );
    expect(new Set(imagens).size).toBe(6);
  });

  test('TC-31 problem_user: ordenação por preço', async ({ page }) => {
    defeito('SDEMO-DF-14', 'a ordenação por preço não funciona');
    await new LoginPage(page).entrar(USUARIOS.problema);
    const produtos = new ProdutosPage(page);
    await produtos.ordenarPor('lohi');
    const precos = await produtos.listaDePrecos();
    expect(precos).toEqual([...precos].sort((a, b) => a - b));
  });

  test('TC-32 problem_user: preencher Last Name no checkout', async ({ page }) => {
    defeito('SDEMO-DF-15', 'o Last Name é gravado no campo First Name');
    await new LoginPage(page).entrar(USUARIOS.problema);
    const produtos = new ProdutosPage(page);
    await produtos.adicionar('Sauce Labs Backpack');
    await produtos.abrirCarrinho();
    await new CarrinhoPage(page).irParaCheckout();
    const checkout = new CheckoutPage(page);
    await checkout.preencher();
    await checkout.continuar();
    await expect(page).toHaveURL(/checkout-step-two\.html/);
  });

  test('TC-33 error_user: finalizar o pedido', async ({ page }) => {
    defeito('SDEMO-DF-16', 'o botão Finish não conclui o pedido');
    await new LoginPage(page).entrar(USUARIOS.erro);
    const produtos = new ProdutosPage(page);
    await produtos.adicionar('Sauce Labs Backpack');
    await produtos.abrirCarrinho();
    await new CarrinhoPage(page).irParaCheckout();
    const checkout = new CheckoutPage(page);
    await checkout.preencher(CLIENTE);
    await checkout.continuar();
    await checkout.finalizar();
    await expect(checkout.mensagemFinal()).toHaveText('Thank you for your order!', { timeout: 5000 });
  });

  test('TC-34 performance_glitch_user: login em até 2 segundos', async ({ page }) => {
    defeito('SDEMO-DF-17', 'o login demora cerca de 5 segundos');
    const login = new LoginPage(page);
    await login.abrir();
    await login.usuario().fill(USUARIOS.lento);
    await login.senha().fill('secret_sauce');
    const inicio = Date.now();
    await login.botaoLogin().click();
    await new ProdutosPage(page).estaAberta();
    expect(Date.now() - inicio).toBeLessThanOrEqual(2000);
  });
});
