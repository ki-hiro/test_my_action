const core = require('@actions/core');

async function run() {
    try {
        const param1 = core.getInput('param1');
        const param2 = core.getInput('param2');
        core.info((new Date()).toTimeString());
        core.info(`${param1} ${param2} ...`);
        core.wait(1000);
        core.info((new Date()).toTimeString());
    }
    catch (error) {
        core.setFailed(error.message);
    }
}
