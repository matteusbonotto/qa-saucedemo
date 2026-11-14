# SDEMO-DF-7 · Ordenação volta para Name (A to Z) ao sair do detalhe do produto

| Severidade | Prioridade | Status | Plataforma | Caso |
|---|---|---|---|---|
| Leve | Baixa | Novo (projeto de estudo: não será corrigido) | Chrome (desktop) - Windows 11 | SDEMO-TC-40 |

## Passos para reproduzir

1. Logar com standard_user
2. Escolher Price (high to low)
3. Abrir qualquer produto
4. Clicar em Back to products

## Resultado esperado

A lista deve continuar na ordenação escolhida (Price high to low) ao voltar do detalhe.

## Resultado obtido

Ao clicar em "Back to products" a lista volta para Name (A to Z) e o filtro também.

## Evidência

- Relatório do Playwright com print, vídeo e trace: https://matteusbonotto.github.io/qa-saucedemo/
