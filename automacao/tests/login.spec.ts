import { test, expect } from '../fixtures/console';
import { LoginPage } from '../pages/LoginPage';
import { ProdutosPage } from '../pages/ProdutosPage';
import { USUARIOS, SENHA } from '../pages/dados';

test.describe('Login', () => {
  test('TC-1 login com credenciais válidas', async ({ page }) => {
    await new LoginPage(page).entrar(USUARIOS.padrao);
    await new ProdutosPage(page).estaAberta();
  });

  test('TC-2 erro ao entrar sem usuário', async ({ page }) => {
    const login = new LoginPage(page);
    await login.entrar('', SENHA);
    await login.esperarErro('Epic sadface: Username is required');
  });

  test('TC-3 erro ao entrar sem senha', async ({ page }) => {
    const login = new LoginPage(page);
    await login.entrar(USUARIOS.padrao, '');
    await login.esperarErro('Epic sadface: Password is required');
  });

  test('TC-4 erro com senha incorreta', async ({ page }) => {
    const login = new LoginPage(page);
    await login.entrar(USUARIOS.padrao, 'senha123');
    await login.esperarErro('Epic sadface: Username and password do not match any user in this service');
    await expect(page).toHaveURL('/');
  });

  test('TC-5 usuário bloqueado não entra', async ({ page }) => {
    const login = new LoginPage(page);
    await login.entrar(USUARIOS.bloqueado);
    await login.esperarErro('Epic sadface: Sorry, this user has been locked out.');
  });

  test('TC-6 fechar a mensagem de erro', async ({ page }) => {
    const login = new LoginPage(page);
    await login.abrir();
    await login.botaoLogin().click();
    await expect(login.erro()).toBeVisible();
    await page.getByTestId('error-button').click();
    await expect(login.erro()).toHaveCount(0);
  });

  test('TC-7 usuário diferencia maiúsculas e minúsculas', async ({ page }) => {
    const login = new LoginPage(page);
    await login.entrar('STANDARD_USER');
    await login.esperarErro('Epic sadface: Username and password do not match any user in this service');
  });

  test('TC-35 entrar com Enter no campo de senha', async ({ page }) => {
    const login = new LoginPage(page);
    await login.abrir();
    await login.usuario().fill(USUARIOS.padrao);
    await login.senha().fill(SENHA);
    await login.senha().press('Enter');
    await expect(page.getByTestId('title')).toHaveText('Products');
  });

  test('TC-36 senha aparece mascarada', async ({ page }) => {
    const login = new LoginPage(page);
    await login.abrir();
    await login.senha().fill(SENHA);
    await expect(login.senha()).toHaveAttribute('type', 'password');
  });

  test('TC-37 carrinho sem login volta para o login', async ({ page }) => {
    await page.goto('/cart.html');
    await new LoginPage(page).esperarErro("Epic sadface: You can only access '/cart.html' when you are logged in.");
  });
});
