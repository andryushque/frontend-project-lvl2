import _ from 'lodash';

const makeTab = (lvl, sign = '') => `${'    '.repeat(lvl)}${sign}`;

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
    const getLineByType = {
      unchanged: (obj) => `${makeTab(lvl + 1)}${obj.key}: ${stringify(obj.value, lvl + 1)}`,
      added: (obj) => `${makeTab(lvl, '  + ')}${obj.key}: ${stringify(obj.value, lvl + 1)}`,
      removed: (obj) => `${makeTab(lvl, '  - ')}${obj.key}: ${stringify(obj.value, lvl + 1)}`,
      changed: (obj) => `${makeTab(lvl, '  + ')}${obj.key}: ${stringify(obj.valueAfter, lvl + 1)}\n${makeTab(lvl, '  - ')}${obj.key}: ${stringify(obj.valueBefore, lvl + 1)}`,
      object: (obj) => `${makeTab(lvl + 1)}${obj.key}: {\n${iterAst(obj.children, lvl + 1)}\n${makeTab(lvl + 1)}}`,
    };
    return item.map((obj) => getLineByType[obj.type](obj)).join('\n');
  };
  const result = iterAst(ast, 0);
  return `{\n${result}\n}`;
};

export default render;
