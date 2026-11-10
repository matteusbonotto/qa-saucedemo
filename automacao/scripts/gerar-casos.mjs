// Gera os arquivos de testes-funcionais/ a partir da exportação JSON de
// "Casos de teste" do QAlor (Importar e exportar > Casos de teste > JSON).
// Uso: node scripts/gerar-casos.mjs ../docs/qalor/casos-de-teste.json
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const entrada = process.argv[2];
if (!entrada) {
  console.error('Informe o arquivo exportado do QAlor.');
  process.exit(1);
}

const MODULOS = {
  '01-login.md': ['Login', [1, 2, 3, 4, 5, 6, 7, 35, 36, 37]],
  '02-produtos.md': ['Produtos', [8, 9, 10, 11, 12, 13, 38, 39, 40]],
  '03-carrinho.md': ['Carrinho', [14, 15, 16, 17, 18, 19]],
  '04-checkout.md': ['Checkout', [20, 21, 22, 23, 24, 25, 26, 41, 42, 43]],
  '05-menu-e-sessao.md': ['Menu e sessão', [27, 28, 29, 44, 45, 46]],
  '06-usuarios-com-problema.md': ['Usuários com problema', [30, 31, 32, 33, 34, 47]],
};
const PRIORIDADE = { critical: 'Crítica', high: 'Alta', medium: 'Média', low: 'Baixa' };
const AUTOMACAO = { automated: 'Automatizado', candidate: 'Candidato', manual: 'Manual' };

const exportado = JSON.parse(readFileSync(entrada, 'utf8'));
const porNumero = new Map(exportado.items.map((c) => [Number(c.key.split('-').pop()), c]));

mkdirSync('../testes-funcionais', { recursive: true });

for (const [arquivo, [titulo, numeros]] of Object.entries(MODULOS)) {
  const linhas = [`# ${titulo}`, ''];
  for (const n of numeros) {
    const c = porNumero.get(n);
    if (!c) continue;
    const d = c.data;
    linhas.push(`## ${c.key.replace('SDEMO-', '')} - ${c.title}`, '');
    linhas.push(`Prioridade: ${PRIORIDADE[d.priority] || d.priority} | Automação: ${AUTOMACAO[d.automation] || d.automation}`, '');
    if (d.objective) linhas.push(d.objective, '');
    if (d.preconditions?.length) linhas.push(`Pré-condição: ${d.preconditions.join('; ')}`, '');
    linhas.push('| # | Passo | Dados | Resultado esperado |', '|---|---|---|---|');
    d.steps.forEach((s, i) => linhas.push(`| ${i + 1} | ${s.action} | ${s.data || '-'} | ${s.expected} |`));
    linhas.push('');
  }
  writeFileSync(`../testes-funcionais/${arquivo}`, linhas.join('\n'));
  console.log(`testes-funcionais/${arquivo}`);
}
