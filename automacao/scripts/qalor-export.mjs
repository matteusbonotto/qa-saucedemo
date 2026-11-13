// Converte o resultado do Playwright (resultados/resultado.json) em um arquivo
// que o QAlor importa em "Importar e exportar" > Execuções (formato qalor-docs).
// Casos e defeitos vão pela chave do QAlor (SDEMO-TC-1, SDEMO-DF-1): o QAlor troca pela referência
// interna na importação, então o mesmo arquivo serve para qualquer navegador ou conta.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const PROJETO = process.env.QALOR_PROJETO || 'SDEMO';
const relatorio = JSON.parse(readFileSync('resultados/resultado.json', 'utf8'));

const linkRelatorio = process.env.LINK_RELATORIO || '';
const build = process.env.GITHUB_RUN_NUMBER || 'local';
const agora = new Date().toISOString();

const STATUS = { passed: 'pass', failed: 'fail', timedOut: 'fail', interrupted: 'block', skipped: 'skip' };

const resultados = {};
const casos = [];

function percorrer(suite) {
  for (const spec of suite.specs || []) {
    const chave = spec.title.match(/^(TC-\d+)\b/)?.[1];
    if (!chave) continue;
    const id = `${PROJETO}-${chave}`;
    for (const teste of spec.tests) {
      const ultimo = teste.results.at(-1);
      if (!ultimo) continue;
      const status = STATUS[ultimo.status] || 'block';
      const defeito = teste.annotations.find((a) => a.type === 'defeito')?.description;
      const partes = [`Automação (Playwright) - ${spec.title}.`];
      if (status === 'pass') partes.push('Passou.');
      if (status === 'fail' && defeito) partes.push(`Falhou como esperado. Defeito conhecido: ${defeito}.`);
      if (status === 'fail' && !defeito) partes.push(`Falhou: ${(ultimo.error?.message || '').split('\n')[0]}`);
      if (linkRelatorio) partes.push(`Relatório: ${linkRelatorio}`);
      casos.push(id);
      resultados[id] = {
        status,
        at: ultimo.startTime || agora,
        seconds: Math.round((ultimo.duration || 0) / 1000),
        notes: partes.join(' '),
        ...(defeito && status === 'fail' ? { defects: [defeito] } : {}),
      };
    }
  }
  for (const filha of suite.suites || []) percorrer(filha);
}

for (const suite of relatorio.suites || []) percorrer(suite);

const arquivo = {
  format: 'qalor-docs',
  version: 1,
  type: 'run',
  exportedAt: agora,
  items: [
    {
      type: 'run',
      title: `Automação Playwright - build ${build}`,
      status: 'done',
      data: { environment: 'prod', build: String(build), tester: process.env.QALOR_TESTADOR || 'Matheus Bonotto', cases: casos, results: resultados },
    },
  ],
};

mkdirSync('resultados', { recursive: true });
writeFileSync('resultados/qalor-execucao.json', JSON.stringify(arquivo, null, 2));

const conta = (s) => Object.values(resultados).filter((r) => r.status === s).length;
console.log(`QAlor: ${casos.length} casos | ${conta('pass')} passaram | ${conta('fail')} falharam`);
console.log('Arquivo: resultados/qalor-execucao.json');
