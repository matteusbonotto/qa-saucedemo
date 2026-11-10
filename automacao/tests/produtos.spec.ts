import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProdutosPage } from '../pages/ProdutosPage';
import { USUARIOS } from '../pages/dados';

test.describe('Produtos', () => {
  let produtos: ProdutosPage;

  test.beforeEach(async ({ page }) => {
    await new LoginPage(page).entrar(USUARIOS.padrao);
    produtos = new ProdutosPage(page);
  });

  test('TC-8 lista mostra 6 produtos completos', async () => {
    await expect(produtos.itens()).toHaveCount(6);
    for (const item of await produtos.itens().all()) {
      await expect(item.locator('img')).toBeVisible();
      await expect(item.getByTestId('inventory-item-name')).not.toBeEmpty();
      await expect(item.getByTestId('inventory-item-desc')).not.toBeEmpty();
      await expect(item.getByTestId('inventory-item-price')).toContainText('$');
      await expect(item.getByRole('button', { name: 'Add to cart' })).toBeVisible();
    }
  });

  test('TC-9 ordenação padrão é Name (A to Z)', async () => {
    await expect(produtos.ordenacaoAtiva()).toHaveText('Name (A to Z)');
    const nomes = await produtos.nomes().allTextContents();
    expect(nomes).toEqual([...nomes].sort());
    expect(nomes[0]).toBe('Sauce Labs Backpack');
  });

  test('TC-10 ordenação Name (Z to A)', async () => {
    await produtos.ordenarPor('za');
    const nomes = await produtos.nomes().allTextContents();
    expect(nomes).toEqual([...nomes].sort().reverse());
    expect(nomes[0]).toBe('Test.allTheThings() T-Shirt (Red)');
  });

  test('TC-11 ordenação por preço, menor para maior', async () => {
    await produtos.ordenarPor('lohi');
    const precos = await produtos.listaDePrecos();
    expect(precos).toEqual([...precos].sort((a, b) => a - b));
    await expect(produtos.nomes().first()).toHaveText('Sauce Labs Onesie');
    await expect(produtos.nomes().last()).toHaveText('Sauce Labs Fleece Jacket');
  });

  test('TC-12 ordenação por preço, maior para menor', async () => {
    await produtos.ordenarPor('hilo');
    const precos = await produtos.listaDePrecos();
    expect(precos).toEqual([...precos].sort((a, b) => b - a));
    await expect(produtos.nomes().first()).toHaveText('Sauce Labs Fleece Jacket');
    await expect(produtos.nomes().last()).toHaveText('Sauce Labs Onesie');
  });

  test('TC-13 abrir detalhe do produto e voltar', async ({ page }) => {
    await page.getByText('Sauce Labs Backpack').click();
    await expect(page.getByTestId('inventory-item-name')).toHaveText('Sauce Labs Backpack');
    await expect(page.getByTestId('inventory-item-price')).toHaveText('$29.99');
    await page.getByTestId('back-to-products').click();
    await produtos.estaAberta();
  });
});
