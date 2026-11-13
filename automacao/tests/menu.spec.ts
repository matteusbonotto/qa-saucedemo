import { test, expect } from '../fixtures/console';
import { LoginPage } from '../pages/LoginPage';
import { ProdutosPage } from '../pages/ProdutosPage';
import { MenuPage } from '../pages/MenuPage';
import { USUARIOS } from '../pages/dados';

test.describe('Menu e sessão', () => {
  test.beforeEach(async ({ page }) => {
    await new LoginPage(page).entrar(USUARIOS.padrao);
  });

  test('TC-27 logout e bloqueio de acesso direto', async ({ page }) => {
    await new MenuPage(page).clicar('Logout');
    await expect(page.getByTestId('login-button')).toBeVisible();
    await page.goto('/inventory.html');
    await new LoginPage(page).esperarErro(
      "Epic sadface: You can only access '/inventory.html' when you are logged in.",
    );
  });

  test('TC-28 Reset App State limpa o carrinho', async ({ page }) => {
    const produtos = new ProdutosPage(page);
    await produtos.adicionar('Sauce Labs Backpack');
    await expect(produtos.contadorCarrinho()).toHaveText('1');
    await new MenuPage(page).clicar('Reset App State');
    await expect(produtos.contadorCarrinho()).toHaveCount(0);
  });
});
