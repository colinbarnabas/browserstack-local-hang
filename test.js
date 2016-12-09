#!/usr/bin/env node

var Browserstack = require('browserstack-local');

var local = new Browserstack.Local();
var opts = {
    forcelocal: true,
    onlyAutomate: true,
    v: true,
}

console.log('Starting tunnel...');
local.start(opts, function(err) {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('Tunnel started');
    
    console.log('Stopping tunnel...');
    local.stop(function() {
        console.log('Tunnel stopped');
    });
});