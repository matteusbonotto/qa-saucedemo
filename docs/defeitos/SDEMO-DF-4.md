# SDEMO-DF-4 · problem_user: campo Last Name não aceita o texto digitado no checkout

| Severidade | Prioridade | Status | Plataforma | Caso |
|---|---|---|---|---|
| Crítica | Alta | Novo (projeto de estudo: não será corrigido) | Chrome (desktop) - Windows 11 | SDEMO-TC-32 |

## Passos para reproduzir

1. Logar com problem_user
2. Adicionar Sauce Labs Backpack e abrir o carrinho
3. Clicar em Checkout
4. Digitar Matheus, Bonotto e 01001-000
5. Clicar em Continue

## Resultado esperado

O texto digitado em Last Name deve ficar no campo Last Name e o checkout deve seguir para o resumo.

## Resultado obtido

O campo Last Name não fica preenchido e ao clicar em Continue aparece "Error: Last Name is required", travando a compra.

## Evidência

- Relatório do Playwright com print, vídeo e trace: https://matteusbonotto.github.io/qa-saucedemo/
