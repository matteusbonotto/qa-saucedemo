# Menu e sessão

6 casos de teste. Todos automatizados em `automacao/tests` (o título do teste começa com o ID do caso).

## SDEMO-TC-27 · Validar logout e bloqueio de acesso direto às páginas internas

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Alta | SDEMO-RQ-5 | Sim | — |

**Objetivo:** Depois do logout a loja não pode ser acessada pela URL.

**Dado** que o usuário está logado com "standard_user"

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário abre o menu e clica em "Logout" |  | o sistema volta para a tela de login |
| 2 | o usuário acessa a URL da lista de produtos | `https://www.saucedemo.com/inventory.html` | o sistema exibe "Epic sadface: You can only access '/inventory.html' when you are logged in." |

## SDEMO-TC-28 · Validar que "Reset App State" limpa o carrinho

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Baixa | SDEMO-RQ-5 | Sim | — |

**Objetivo:** Conferir a opção de resetar o estado da loja.

**Dado** que o usuário está logado com "standard_user" **e** que o produto "Sauce Labs Backpack" está no carrinho

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário abre o menu e clica em "Reset App State" |  | o contador do carrinho deixa de ser exibido |

## SDEMO-TC-29 · Validar que o link "About" leva ao site da Sauce Labs

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Baixa | SDEMO-RQ-5 | Não | — |

**Objetivo:** Conferir o link About do menu.

**Dado** que o usuário está logado com "standard_user"

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário abre o menu e clica em "About" |  | o navegador abre o site saucelabs.com |

## SDEMO-TC-44 · Validar abertura e fechamento do menu lateral

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Baixa | SDEMO-RQ-5 | Sim | — |

**Objetivo:** O menu deve abrir e fechar pelo botão X.

**Dado** que o usuário está logado com "standard_user"

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário clica no botão do menu |  | o menu exibe All Items, About, Logout e Reset App State |
| 2 | o usuário clica no X do menu |  | o menu é fechado |

## SDEMO-TC-45 · Validar que "All Items" volta para a lista de produtos

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Baixa | SDEMO-RQ-5 | Sim | — |

**Objetivo:** Conferir a navegação pelo menu.

**Dado** que o usuário está logado com "standard_user"

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário está no carrinho, abre o menu e clica em "All Items" |  | o sistema exibe a lista de produtos |

## SDEMO-TC-46 · Validar links de redes sociais e texto de copyright do rodapé

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Baixa | SDEMO-RQ-5 | Não | — |

**Objetivo:** Conferir o rodapé da loja.

**Dado** que o usuário está logado com "standard_user"

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário rola até o rodapé |  | o rodapé exibe os links de X (antigo Twitter), Facebook e LinkedIn e o texto de copyright da Sauce Labs |
| 2 | o usuário clica no link do LinkedIn |  | o navegador abre a página da Sauce Labs no LinkedIn em outra aba |
