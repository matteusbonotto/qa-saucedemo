# Login

10 casos de teste. Todos automatizados em `automacao/tests` (o título do teste começa com o ID do caso).

## SDEMO-TC-1 · Validar login com credenciais válidas (standard_user)

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Crítica | SDEMO-RQ-1 | Sim | — |

**Objetivo:** Garantir que um usuário válido acessa a lista de produtos.

**Dado** que o usuário está na tela de login

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário informa usuário e senha válidos e clica em Login | `standard_user / secret_sauce` | o sistema exibe a página "Products" (/inventory.html) |

## SDEMO-TC-2 · Validar mensagem de erro ao fazer login sem informar o usuário

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Alta | SDEMO-RQ-1 | Sim | — |

**Objetivo:** Partição inválida: campo Username vazio.

**Dado** que o usuário está na tela de login

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário informa apenas a senha e clica em Login | `secret_sauce` | o sistema exibe "Epic sadface: Username is required" |

## SDEMO-TC-3 · Validar mensagem de erro ao fazer login sem informar a senha

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Alta | SDEMO-RQ-1 | Sim | — |

**Objetivo:** Partição inválida: campo Password vazio.

**Dado** que o usuário está na tela de login

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário informa apenas o usuário e clica em Login | `standard_user` | o sistema exibe "Epic sadface: Password is required" |

## SDEMO-TC-4 · Validar mensagem de erro ao fazer login com senha incorreta

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Alta | SDEMO-RQ-1 | Sim | — |

**Objetivo:** Credenciais que não conferem não devem dar acesso.

**Dado** que o usuário está na tela de login

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário informa um usuário válido com senha incorreta e clica em Login | `standard_user / senha123` | o sistema exibe "Epic sadface: Username and password do not match any user in this service" e permanece na tela de login |

## SDEMO-TC-5 · Validar bloqueio de acesso para usuário bloqueado (locked_out_user)

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Alta | SDEMO-RQ-1 | Sim | — |

**Objetivo:** Usuário bloqueado não deve acessar a loja.

**Dado** que o usuário está na tela de login

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário faz login com o usuário bloqueado | `locked_out_user / secret_sauce` | o sistema exibe "Epic sadface: Sorry, this user has been locked out." e não libera o acesso |

## SDEMO-TC-6 · Validar fechamento da mensagem de erro do login

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Baixa | SDEMO-RQ-1 | Sim | — |

**Objetivo:** O botão X deve fechar a mensagem de erro.

**Dado** que o usuário está na tela de login

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário clica em Login com os campos vazios |  | o sistema exibe a mensagem de erro |
| 2 | o usuário clica no X da mensagem |  | a mensagem de erro deixa de ser exibida |

## SDEMO-TC-7 · Validar que o usuário diferencia letras maiúsculas e minúsculas

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Baixa | SDEMO-RQ-1 | Sim | — |

**Objetivo:** Verificar se o login é case sensitive.

**Dado** que o usuário está na tela de login

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário faz login com o usuário em maiúsculas | `STANDARD_USER / secret_sauce` | o sistema recusa o login com a mensagem de credenciais inválidas |

## SDEMO-TC-35 · Validar login pressionando Enter no campo de senha

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | SDEMO-RQ-1 | Sim | — |

**Objetivo:** O formulário deve ser enviado pelo teclado (acessibilidade).

**Dado** que o usuário está na tela de login

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário preenche usuário e senha e pressiona Enter | `standard_user / secret_sauce` | o sistema exibe a página "Products" |

## SDEMO-TC-36 · Validar que a senha é exibida mascarada

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | SDEMO-RQ-1 | Sim | — |

**Objetivo:** A senha não pode aparecer em texto aberto.

**Dado** que o usuário está na tela de login

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário digita a senha | `secret_sauce` | o campo Password exibe apenas caracteres mascarados (type="password") |

## SDEMO-TC-37 · Validar bloqueio de acesso direto ao carrinho sem login

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Alta | SDEMO-RQ-5 | Sim | — |

**Objetivo:** Páginas internas exigem login.

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário sem login acessa a URL do carrinho | `https://www.saucedemo.com/cart.html` | o sistema volta para o login com a mensagem "You can only access '/cart.html' when you are logged in." |
