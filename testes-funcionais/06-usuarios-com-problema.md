# Usuários com problema

6 casos de teste. Todos automatizados em `automacao/tests` (o título do teste começa com o ID do caso).

## SDEMO-TC-30 · Validar imagens dos produtos com o usuário problem_user

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | SDEMO-RQ-2 | Não | [SDEMO-DF-2](../docs/defeitos/SDEMO-DF-2.md) |

**Objetivo:** Cada produto deve exibir a própria imagem.

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário faz login com problem_user | `problem_user / secret_sauce` | cada um dos 6 produtos exibe a imagem correspondente |

## SDEMO-TC-31 · Validar ordenação por preço com o usuário problem_user

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | SDEMO-RQ-2 | Não | [SDEMO-DF-3](../docs/defeitos/SDEMO-DF-3.md) |

**Objetivo:** A ordenação deve funcionar para qualquer usuário.

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário faz login com problem_user e ordena por preço | `Price (low to high)` | os produtos ficam do menor para o maior preço |

## SDEMO-TC-32 · Validar preenchimento do Last Name no checkout com o usuário problem_user

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Alta | SDEMO-RQ-4 | Não | [SDEMO-DF-4](../docs/defeitos/SDEMO-DF-4.md) |

**Objetivo:** O campo Last Name deve aceitar o texto digitado.

**Dado** que o usuário está logado com "problem_user" **e** que o produto "Sauce Labs Backpack" está no carrinho

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário (problem_user) preenche o passo 1 do checkout e clica em "Continue" | `Matheus / Bonotto / 01001-000` | o sistema exibe o resumo do pedido |

## SDEMO-TC-33 · Validar finalização do pedido com o usuário error_user

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Alta | SDEMO-RQ-4 | Não | [SDEMO-DF-5](../docs/defeitos/SDEMO-DF-5.md) |

**Objetivo:** O botão Finish deve concluir o pedido.

**Dado** que o usuário está logado com "error_user" **e** que o produto "Sauce Labs Backpack" está no carrinho

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário (error_user) segue até o resumo e clica em "Finish" | `Matheus / Bonotto / 01001-000` | o sistema exibe "Thank you for your order!" |

## SDEMO-TC-34 · Validar tempo de resposta do login com o usuário performance_glitch_user

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | SDEMO-RQ-1 | Não | [SDEMO-DF-6](../docs/defeitos/SDEMO-DF-6.md) |

**Objetivo:** A lista de produtos deve aparecer em até 2 segundos.

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário faz login com performance_glitch_user | `performance_glitch_user / secret_sauce` | a página "Products" é exibida em até 2 segundos |

## SDEMO-TC-47 · Validar layout da lista de produtos com o usuário visual_user

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | SDEMO-RQ-2 | Não | [SDEMO-DF-10](../docs/defeitos/SDEMO-DF-10.md) |

**Objetivo:** Encontrar diferenças visuais em relação ao standard_user.

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário faz login com visual_user e compara a tela com a do standard_user | `visual_user / secret_sauce` | imagens, preços, botões e ícone do carrinho aparecem iguais aos do standard_user |
