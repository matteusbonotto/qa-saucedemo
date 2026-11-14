# 📄 Documentação

Artefatos do ciclo de teste do SauceDemo, gerados no [QAllor](https://qallor.web.app).

| Documento | Para quê |
|---|---|
| [plano-de-teste.pdf](plano-de-teste.pdf) | Escopo, objetivos, riscos, critérios de entrada e saída |
| [resumo-de-qualidade.pdf](resumo-de-qualidade.pdf) | Dossiê: índice °Q, resultados, cobertura, automação do CI e defeitos |
| [relatorio-de-conclusao.pdf](relatorio-de-conclusao.pdf) | Fechamento do projeto: o que passou, o que falhou e riscos que ficaram |
| [defeitos/](defeitos/) | Uma ficha por defeito, com passos, esperado, obtido e evidência |
| [casos-de-teste.csv](casos-de-teste.csv) · [defeitos.csv](defeitos.csv) | Planilhas para abrir no Excel ou Google Sheets (separador `;`) |
| [prints/](prints/) | Telas do projeto no QAllor |
| [qalor/sdemo.qalor.json](qalor/sdemo.qalor.json) | Fonte dos casos e defeitos, exportada do QAllor |

Para atualizar casos, defeitos e planilhas depois de mudar o projeto no QAllor:
exporte o pacote para `qalor/sdemo.qalor.json` e rode `node scripts/gerar-docs.mjs` dentro de `automacao/`.
