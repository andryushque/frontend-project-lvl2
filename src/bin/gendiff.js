#!/usr/bin/env node
import program from 'commander';
import gendiff from '..';

program
  .version('0.0.3')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => {
    console.log(gendiff(firstConfig, secondConfig));
  });

program.parse(process.argv);

export default gendiff;
