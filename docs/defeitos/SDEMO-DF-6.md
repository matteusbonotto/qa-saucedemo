# SDEMO-DF-6 · performance_glitch_user: login demora vários segundos para mostrar os produtos

| Severidade | Prioridade | Status | Plataforma | Caso |
|---|---|---|---|---|
| Leve | Média | Novo (projeto de estudo: não será corrigido) | Chrome (desktop) - Windows 11 | SDEMO-TC-34 |

## Passos para reproduzir

1. Logar com performance_glitch_user
2. Medir o tempo até aparecer o título Products

## Resultado esperado

A lista de produtos deve aparecer em até 2 segundos depois do login (critério do plano).

## Resultado obtido

A página fica carregando por cerca de 5 segundos antes de mostrar Products.

## Evidência

- Relatório do Playwright com print, vídeo e trace: https://matteusbonotto.github.io/qa-saucedemo/
