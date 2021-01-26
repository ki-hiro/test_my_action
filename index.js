const core = require('@actions/core');

const param1 = core.getInput('param1');
const param2 = core.getInput('param2');
console.log(`${param1} ${param2} ...`)

// 出力を設定したい場合はsetOutput()らしい(未試験)
// core.setOutput('hoge', new Date().toTimeString());