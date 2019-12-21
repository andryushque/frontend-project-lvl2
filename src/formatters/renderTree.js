import _ from 'lodash';

const makeTab = (lvl) => '    '.repeat(lvl);
const plus = '  + ';
const minus = '  - ';
const tab = makeTab(1);

const stringify = (value, lvl = 0) => {
  if (!(_.isObject(value))) {
    return value;
  }

  const objKeys = Object.keys(value);
  const line = objKeys
    .map((key) => `${makeTab(lvl + 1)}${key}: ${stringify(value[key], lvl + 1)}`)
    .join('\n');

  const result = `{\n${line}\n${makeTab(lvl)}}`;
  return result;
};

const render = (ast) => {
  const iterAst = (item, lvl) => {
    const makeLine = (obj, sign) => `${makeTab(lvl)}${sign}${obj.key}: ${stringify(obj.value, lvl + 1)}\n`;
    const getLineByType = {
      unchanged: (obj) => makeLine(obj, tab),
      added: (obj) => makeLine(obj, plus),
      removed: (obj) => makeLine(obj, minus),
      changed: (obj) => `${makeTab(lvl)}${plus}${obj.key}: ${stringify(obj.valueAfter, lvl + 1)}\n${makeTab(lvl)}${minus}${obj.key}: ${stringify(obj.valueBefore, lvl + 1)}\n`,
      object: (obj) => `${makeTab(lvl + 1)}${obj.key}: {\n${iterAst(obj.children, lvl + 1)}${makeTab(lvl + 1)}}\n`,
    };
    return item.reduce((acc, obj) => acc.concat(getLineByType[obj.type](obj)), '');
  };
  const result = `{\n${iterAst(ast, 0)}}\n`;
  return result;
};

export default render;
