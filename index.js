console.log('index.js entry point')

const core = require('@actions/core');

const param1 = core.getInput('param1');
const param2 = core.getInput('param2');
console.log(`${param1} ${param2} ...`)

async function run() {
    try {
        core.info((new Date()).toTimeString());
        core.info(`${param1} ${param2} ...`);
        core.wait(1000);
        core.info((new Date()).toTimeString());
    }
    catch (error) {
        core.setFailed(error.message);
    }
}

console.log(`async end point`);