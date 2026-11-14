# Produtos

9 casos de teste. Todos automatizados em `automacao/tests` (o título do teste começa com o ID do caso).

## SDEMO-TC-8 · Validar exibição dos 6 produtos com nome, descrição, preço e botão de compra

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Alta | SDEMO-RQ-2 | Sim | — |

**Objetivo:** Conferir a quantidade e o conteúdo dos cards.

**Dado** que o usuário está logado com "standard_user"

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário acessa a página de produtos |  | o sistema exibe 6 produtos, cada um com imagem, nome, descrição, preço e botão "Add to cart" |

## SDEMO-TC-9 · Validar ordenação padrão dos produtos por nome (A a Z)

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | SDEMO-RQ-2 | Sim | — |

**Objetivo:** Conferir a ordem inicial da lista.

**Dado** que o usuário está logado com "standard_user"

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário acessa a página de produtos |  | o filtro mostra "Name (A to Z)" e os produtos estão em ordem alfabética, começando por "Sauce Labs Backpack" |

## SDEMO-TC-10 · Validar ordenação dos produtos por nome (Z a A)

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | SDEMO-RQ-2 | Sim | — |

**Objetivo:** Conferir a ordenação decrescente por nome.

**Dado** que o usuário está logado com "standard_user"

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário seleciona a ordenação | `Name (Z to A)` | os produtos ficam em ordem alfabética decrescente, começando por "Test.allTheThings() T-Shirt (Red)" |

## SDEMO-TC-11 · Validar ordenação dos produtos por preço (menor para maior)

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Alta | SDEMO-RQ-2 | Sim | — |

**Objetivo:** Conferir a ordenação crescente por preço.

**Dado** que o usuário está logado com "standard_user"

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário seleciona a ordenação | `Price (low to high)` | o primeiro produto é "Sauce Labs Onesie" ($7.99) e o último é "Sauce Labs Fleece Jacket" ($49.99) |

## SDEMO-TC-12 · Validar ordenação dos produtos por preço (maior para menor)

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | SDEMO-RQ-2 | Sim | — |

**Objetivo:** Conferir a ordenação decrescente por preço.

**Dado** que o usuário está logado com "standard_user"

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário seleciona a ordenação | `Price (high to low)` | o primeiro produto é "Sauce Labs Fleece Jacket" ($49.99) e o último é "Sauce Labs Onesie" ($7.99) |

## SDEMO-TC-13 · Validar abertura do detalhe do produto e retorno à lista

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | SDEMO-RQ-2 | Sim | — |

**Objetivo:** O detalhe deve mostrar o mesmo produto clicado.

**Dado** que o usuário está logado com "standard_user"

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário clica no nome do produto | `Sauce Labs Backpack` | o sistema exibe o detalhe com o nome "Sauce Labs Backpack" e o preço $29.99 |
| 2 | o usuário clica em "Back to products" |  | o sistema volta para a lista de produtos |

## SDEMO-TC-38 · Validar inclusão no carrinho pela página de detalhe do produto

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | SDEMO-RQ-2, SDEMO-RQ-3 | Sim | — |

**Objetivo:** O detalhe também deve permitir comprar.

**Dado** que o usuário está logado com "standard_user"

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário abre o detalhe do produto | `Sauce Labs Bolt T-Shirt` | o sistema exibe o botão "Add to cart" |
| 2 | o usuário clica em "Add to cart" |  | o botão muda para "Remove" e o carrinho mostra 1 |

## SDEMO-TC-39 · Validar abertura do detalhe ao clicar na imagem do produto

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Baixa | SDEMO-RQ-2 | Sim | — |

**Objetivo:** A imagem também é um link para o detalhe.

**Dado** que o usuário está logado com "standard_user"

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário clica na imagem do produto | `Sauce Labs Onesie` | o sistema exibe o detalhe do "Sauce Labs Onesie" |

## SDEMO-TC-40 · Validar que a ordenação escolhida é mantida ao voltar do detalhe

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Baixa | SDEMO-RQ-2 | Não | [SDEMO-DF-7](../docs/defeitos/SDEMO-DF-7.md) |

**Objetivo:** Verificar se a escolha de ordenação persiste.

**Dado** que o usuário está logado com "standard_user"

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário ordena por "Price (high to low)", abre um produto e volta |  | a lista continua ordenada por preço (maior para menor) |
