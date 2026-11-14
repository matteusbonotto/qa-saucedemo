# SDEMO-DF-9 · Checkout aceita First Name, Last Name e Zip só com espaços

| Severidade | Prioridade | Status | Plataforma | Caso |
|---|---|---|---|---|
| Grave | Média | Novo (projeto de estudo: não será corrigido) | Chrome (desktop) - Windows 11 | SDEMO-TC-43 |

## Passos para reproduzir

1. Logar com standard_user
2. Adicionar um produto e ir para o checkout
3. Digitar um espaço em First Name, Last Name e Zip/Postal Code
4. Clicar em Continue

## Resultado esperado

Campos preenchidos só com espaços devem ser tratados como vazios e mostrar a mensagem de campo obrigatório.

## Resultado obtido

Com um espaço em cada campo o Continue segue para o resumo, e o pedido pode ser finalizado sem nome nem CEP.

## Evidência

- Relatório do Playwright com print, vídeo e trace: https://matteusbonotto.github.io/qa-saucedemo/
