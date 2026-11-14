# SDEMO-DF-8 · Campo Zip/Postal Code aceita letras

| Severidade | Prioridade | Status | Plataforma | Caso |
|---|---|---|---|---|
| Leve | Baixa | Novo (projeto de estudo: não será corrigido) | Chrome (desktop) - Windows 11 | SDEMO-TC-42 |

## Passos para reproduzir

1. Logar com standard_user
2. Adicionar um produto e ir para o checkout
3. Preencher Matheus / Bonotto / ABCDE
4. Clicar em Continue

## Resultado esperado

O sistema deve recusar um CEP só com letras e mostrar mensagem de formato inválido.

## Resultado obtido

Com "ABCDE" no Zip/Postal Code o Continue segue para o resumo do pedido sem nenhum aviso.

## Evidência

- Relatório do Playwright com print, vídeo e trace: https://matteusbonotto.github.io/qa-saucedemo/
