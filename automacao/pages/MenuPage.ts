import { Page } from '@playwright/test';

export class MenuPage {
  constructor(private page: Page) {}

  async abrir() {
    await this.page.getByRole('button', { name: 'Open Menu' }).click();
  }

  async clicar(item: 'All Items' | 'About' | 'Logout' | 'Reset App State') {
    await this.abrir();
    await this.page.getByRole('link', { name: item }).click();
  }
}
