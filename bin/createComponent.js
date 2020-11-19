#! /usr/bin/env node
const createComponent = require('../lib/createComponent');
const capitalize = require('../lib/capitalize');

const name = capitalize(process.argv[2]);

console.log(`Running Create Component with '${name}'`);

createComponent({ name });
