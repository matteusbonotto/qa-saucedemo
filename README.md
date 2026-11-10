# QA - SauceDemo

Projeto de estudo de testes do site [SauceDemo](https://www.saucedemo.com) (Swag Labs).
O plano, os casos e a execução manual ficam no QAlor (projeto **SauceDemo - Testes E2E**, chave `SDEMO`).
Este repositório guarda a documentação exportada, os testes funcionais e a automação.

## Pastas

| Pasta | O que tem |
|---|---|
| `docs/` | Plano de teste e relatórios exportados do QAlor |
| `testes-funcionais/` | Casos de teste por módulo (gerados a partir do QAlor) |
| `automacao/` | Testes automatizados com Playwright + TypeScript |
| `.github/workflows/` | CI: roda a automação a cada push e pull request |

## Rodar a automação

```bash
cd automacao
npm install
npx playwright install chromium
npm test            # roda tudo
npm run report      # abre o relatório
```

Cada teste começa com o ID do caso no QAlor (ex.: `TC-20 compra completa com um produto`).

Os casos com defeito conhecido (DF-10, DF-13 a DF-17) usam `test.fail()`.
Como este projeto é de estudo e os defeitos não serão corrigidos, eles ficam marcados como
falha esperada: a suíte continua verde e, se algum deles começar a passar, o Playwright avisa.

## Levar o resultado para o QAlor

Depois dos testes, rode `npm run qalor`. Ele gera `resultados/qalor-execucao.json`.
No QAlor: **Importar e exportar > Importar documentos > Execuções** e escolha esse arquivo.
Cria uma execução "Automação Playwright - build N" com o resultado de cada caso.

No CI esse arquivo fica disponível no artefato **qalor-execucao** de cada execução do workflow,
junto com o relatório HTML (**relatorio-playwright**).

## Atualizar os testes funcionais

1. No QAlor, exporte **Casos de teste** em JSON e salve em `docs/qalor/casos-de-teste.json`.
2. Rode `cd automacao && node scripts/gerar-casos.mjs ../docs/qalor/casos-de-teste.json`.

## Cobertura

- 47 casos de teste: 33 automatizados, 9 candidatos e 5 manuais.
- Fora do escopo (projeto de estudo): correção de defeitos, reteste e monitoramento.
