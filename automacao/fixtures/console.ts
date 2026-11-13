import { test as base, expect } from '@playwright/test';

// Vigia o console em todos os testes: erro de JavaScript não tratado (pageerror) reprova o teste,
// mesmo quando a tela parece certa. console.error só vai anexado ao relatório, porque o site
// dispara erros de serviços de terceiros (telemetria) que não são defeito da loja.
export const test = base.extend<{ vigiaConsole: void }>({
  vigiaConsole: [async ({ page }, use, testInfo) => {
    const naoTratados: string[] = [];
    const consoleErros: string[] = [];
    page.on('pageerror', (e) => naoTratados.push(`${e.name}: ${e.message}`));
    page.on('console', (m) => { if (m.type() === 'error') consoleErros.push(m.text()); });
    await use();
    const log = [...naoTratados.map((e) => `[não tratado] ${e}`), ...consoleErros.map((e) => `[console.error] ${e}`)];
    if (log.length) await testInfo.attach('erros-do-console', { body: log.join('\n'), contentType: 'text/plain' });
    expect(naoTratados, 'erros de JavaScript não tratados no navegador').toEqual([]);
  }, { auto: true }],
});

export { expect };
