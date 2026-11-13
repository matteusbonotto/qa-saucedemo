import { Page } from '@playwright/test';

const ITENS = { 'All Items': 'inventory-sidebar-link', About: 'about-sidebar-link', Logout: 'logout-sidebar-link', 'Reset App State': 'reset-sidebar-link' };

export class MenuPage {
  constructor(private page: Page) {}

  async abrir() {
    await this.page.getByRole('button', { name: 'Open Menu' }).click();
  }

  async clicar(item: keyof typeof ITENS) {
    await this.abrir();
    await this.page.getByTestId(ITENS[item]).click();
  }
}
