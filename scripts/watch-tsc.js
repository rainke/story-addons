const shell = require('shelljs');

shell.exec('tsc --outDir ./dist --listEmittedFiles true -w');
