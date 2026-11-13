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

Todo teste vigia o console do navegador (`automacao/fixtures/console.ts`): erro de JavaScript não tratado
reprova o teste, mesmo que a tela pareça certa (é assim que o `TypeError` do `error_user` aparece no relatório).
`console.error` vai anexado ao resultado, sem reprovar, porque o site gera erros de serviços de terceiros.

## Lições para um projeto real

O SauceDemo tem defeitos de propósito. Num sistema de produção, o que este projeto ensina vira prática:

- **Um problema, um defeito.** O mesmo bug visto em execuções diferentes é vinculado ao defeito aberto, não registrado de novo. No QAlor o defeito duplicado recebe o status *Duplicado* e aponta para o principal; falhas da mesma causa (ex.: as do `problem_user`) ficam agrupadas num defeito pai. Assim a densidade de defeitos não infla.
- **Shift-left nas validações.** CEP com letras, campos só com espaços e checkout com carrinho vazio deveriam ser barrados no refinamento da história, com critérios de aceite de máscara e sanitização no front e no back.
- **Console limpo como critério de saída.** Erro de JavaScript não tratado é defeito, mesmo sem quebra visual.
- **Personas de erro só em homologação.** Contas como `problem_user` e `error_user` são úteis em QA/staging e não devem existir no ambiente de produção dos clientes.

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
