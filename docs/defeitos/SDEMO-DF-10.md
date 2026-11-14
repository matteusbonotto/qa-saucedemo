# SDEMO-DF-10 · visual_user: imagem, preços e botão diferentes do standard_user

| Severidade | Prioridade | Status | Plataforma | Caso |
|---|---|---|---|---|
| Grave | Média | Novo (projeto de estudo: não será corrigido) | Chrome (desktop) - Windows 11 | SDEMO-TC-47 |

## Passos para reproduzir

1. Logar com standard_user e anotar imagens e preços
2. Fazer logout
3. Logar com visual_user
4. Comparar a lista de produtos

## Resultado esperado

A lista do visual_user deve ser igual à do standard_user: mesmas imagens, mesmos preços e botões alinhados.

## Resultado obtido

A Sauce Labs Backpack mostra a imagem de erro 404, os preços mudam a cada login (ex.: $0.63 em vez de $29.99) e o último botão Add to cart fica desalinhado.

## Evidência

- Relatório do Playwright com print, vídeo e trace: https://matteusbonotto.github.io/qa-saucedemo/
