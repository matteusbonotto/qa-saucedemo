# SDEMO-DF-1 · Checkout permite finalizar pedido com o carrinho vazio

| Severidade | Prioridade | Status | Plataforma | Caso |
|---|---|---|---|---|
| Grave | Média | Novo (projeto de estudo: não será corrigido) | Chrome (desktop) - Windows 11 | SDEMO-TC-26 |

## Passos para reproduzir

1. Logar com standard_user
2. Abrir o carrinho sem adicionar produtos
3. Clicar em Checkout
4. Preencher Matheus / Bonotto / 01001-000 e clicar em Continue
5. Clicar em Finish

## Resultado esperado

A loja não deveria deixar seguir para o checkout (ou finalizar) sem nenhum produto no carrinho.

## Resultado obtido

Com o carrinho vazio, o botão Checkout funciona, o resumo mostra Total $0.00 e o Finish mostra "Thank you for your order!".

## Evidência

- Relatório do Playwright com print, vídeo e trace: https://matteusbonotto.github.io/qa-saucedemo/
