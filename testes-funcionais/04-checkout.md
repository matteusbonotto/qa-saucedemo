# Checkout

10 casos de teste. Todos automatizados em `automacao/tests` (o título do teste começa com o ID do caso).

## SDEMO-TC-20 · Validar finalização de compra com um produto (fluxo principal)

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Crítica | SDEMO-RQ-4 | Sim | — |

**Objetivo:** Caminho feliz do checkout.

**Dado** que o usuário está logado com "standard_user" **e** que o produto "Sauce Labs Backpack" está no carrinho

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário abre o carrinho e clica em "Checkout" |  | o sistema exibe o formulário "Checkout: Your Information" |
| 2 | o usuário preenche os dados e clica em "Continue" | `Matheus / Bonotto / 01001-000` | o resumo mostra Item total $29.99, Tax $2.40 e Total $32.39 |
| 3 | o usuário clica em "Finish" |  | o sistema exibe "Thank you for your order!" e o carrinho fica vazio |
| 4 | o usuário clica em "Back Home" |  | o sistema volta para a lista de produtos |

## SDEMO-TC-21 · Validar cálculo do total com vários produtos e taxa de 8%

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Alta | SDEMO-RQ-4 | Sim | — |

**Objetivo:** Conferir a soma dos itens e o cálculo da taxa.

**Dado** que o usuário está logado com "standard_user"

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário segue até o resumo do pedido com dois produtos | `Sauce Labs Backpack ($29.99) + Sauce Labs Bolt T-Shirt ($15.99)` | o resumo mostra Item total $45.98, Tax $3.68 e Total $49.66 |

## SDEMO-TC-22 · Validar obrigatoriedade do campo First Name no checkout

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Alta | SDEMO-RQ-4 | Sim | — |

**Objetivo:** Partição inválida: First Name vazio.

**Dado** que o usuário está logado com "standard_user" **e** que o produto "Sauce Labs Backpack" está no carrinho **e** que o usuário está no passo 1 do checkout

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário deixa First Name vazio e clica em "Continue" | `Last Name: Bonotto / Zip: 01001-000` | o sistema exibe "Error: First Name is required" |

## SDEMO-TC-23 · Validar obrigatoriedade do campo Last Name no checkout

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Alta | SDEMO-RQ-4 | Sim | — |

**Objetivo:** Partição inválida: Last Name vazio.

**Dado** que o usuário está logado com "standard_user" **e** que o produto "Sauce Labs Backpack" está no carrinho **e** que o usuário está no passo 1 do checkout

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário deixa Last Name vazio e clica em "Continue" | `First Name: Matheus / Zip: 01001-000` | o sistema exibe "Error: Last Name is required" |

## SDEMO-TC-24 · Validar obrigatoriedade do campo Zip/Postal Code no checkout

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Alta | SDEMO-RQ-4 | Sim | — |

**Objetivo:** Partição inválida: CEP vazio.

**Dado** que o usuário está logado com "standard_user" **e** que o produto "Sauce Labs Backpack" está no carrinho **e** que o usuário está no passo 1 do checkout

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário deixa Zip/Postal Code vazio e clica em "Continue" | `First Name: Matheus / Last Name: Bonotto` | o sistema exibe "Error: Postal Code is required" |

## SDEMO-TC-25 · Validar cancelamento do checkout nos passos 1 e 2

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Baixa | SDEMO-RQ-4 | Sim | — |

**Objetivo:** Conferir os botões Cancel.

**Dado** que o usuário está logado com "standard_user" **e** que o produto "Sauce Labs Backpack" está no carrinho

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário clica em "Cancel" no passo 1 |  | o sistema volta para o carrinho com os itens |
| 2 | o usuário vai até o passo 2 e clica em "Cancel" |  | o sistema volta para a lista de produtos e os itens continuam no carrinho |

## SDEMO-TC-26 · Validar bloqueio do checkout com o carrinho vazio

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | SDEMO-RQ-4 | Sim | [SDEMO-DF-1](../docs/defeitos/SDEMO-DF-1.md) |

**Objetivo:** A loja não deve permitir finalizar pedido sem itens.

**Dado** que o usuário está logado com "standard_user" **e** que o carrinho está vazio

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário abre o carrinho vazio e clica em "Checkout" |  | o sistema impede seguir ou avisa que o carrinho está vazio |

## SDEMO-TC-41 · Validar informações de pagamento e entrega no resumo do pedido

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | SDEMO-RQ-4 | Sim | — |

**Objetivo:** Conferir os dados exibidos no passo 2.

**Dado** que o usuário está logado com "standard_user" **e** que o produto "Sauce Labs Backpack" está no carrinho

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário segue até o resumo do pedido | `Matheus / Bonotto / 01001-000` | o resumo exibe "SauceCard #31337" em Payment Information e "Free Pony Express Delivery!" em Shipping Information |

## SDEMO-TC-42 · Validar formato aceito no campo Zip/Postal Code

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Baixa | SDEMO-RQ-4 | Não | [SDEMO-DF-8](../docs/defeitos/SDEMO-DF-8.md) |

**Objetivo:** Verificar se o CEP aceita qualquer texto.

**Dado** que o usuário está logado com "standard_user" **e** que o produto "Sauce Labs Backpack" está no carrinho **e** que o usuário está no passo 1 do checkout

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário informa letras no CEP e clica em "Continue" | `Zip: ABCDE` | o sistema informa que o CEP é inválido |

## SDEMO-TC-43 · Validar campos do checkout preenchidos só com espaços

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Baixa | SDEMO-RQ-4 | Não | [SDEMO-DF-9](../docs/defeitos/SDEMO-DF-9.md) |

**Objetivo:** Espaços em branco não devem contar como preenchimento.

**Dado** que o usuário está logado com "standard_user" **e** que o produto "Sauce Labs Backpack" está no carrinho **e** que o usuário está no passo 1 do checkout

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário preenche os 3 campos com espaços e clica em "Continue" | `"   " / "   " / "   "` | o sistema exibe a mensagem de campo obrigatório |
