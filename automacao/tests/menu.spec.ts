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

  test('TC-29 About leva ao site da Sauce Labs', async ({ page }) => {
    await new MenuPage(page).abrir();
    await expect(page.getByTestId('about-sidebar-link')).toHaveAttribute('href', 'https://saucelabs.com/');
  });

  test('TC-44 abrir e fechar o menu lateral', async ({ page }) => {
    await new MenuPage(page).abrir();
    for (const id of ['inventory-sidebar-link', 'about-sidebar-link', 'logout-sidebar-link', 'reset-sidebar-link']) await expect(page.getByTestId(id)).toBeVisible();
    await page.getByRole('button', { name: 'Close Menu' }).click();
    await expect(page.getByTestId('logout-sidebar-link')).toBeHidden();
  });

  test('TC-45 All Items volta para os produtos', async ({ page }) => {
    await new ProdutosPage(page).abrirCarrinho();
    await new MenuPage(page).clicar('All Items');
    await new ProdutosPage(page).estaAberta();
  });

  test('TC-46 rodapé com redes sociais e copyright', async ({ page }) => {
    const rodape = page.locator('footer');
    const redes = { X: 'https://x.com/saucelabs', Facebook: 'https://www.facebook.com/saucelabs', LinkedIn: 'https://www.linkedin.com/company/sauce-labs/' };
    for (const [nome, href] of Object.entries(redes)) {
      const link = rodape.getByRole('link', { name: nome, exact: true });
      await expect(link).toHaveAttribute('href', href);
      await expect(link).toHaveAttribute('target', '_blank');
    }
    await expect(rodape).toContainText(/© \d{4} Sauce Labs\. All Rights Reserved\./);
  });
});
