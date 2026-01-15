const core = require('@actions/core');
const github = require('@ctions/github');
const exec = require('@actions/exec');


function run() {
    core.notice("Hello from my custom javascript actions")
}


run();
