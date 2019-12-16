import _ from 'lodash';

const makeTab = (lvl) => '    '.repeat(lvl);

const stringify = (value, lvl = 0) => {
  if (!(_.isObject(value))) {
    return value;
  }

  const objKeys = Object.keys(value);
  const line = objKeys
    .map((key) => `${makeTab(lvl + 1)}${key}: ${stringify(value[key], lvl + 1)}`)
    .join('\r\n');

  const result = `{\r\n${line}\r\n${makeTab(lvl)}}`;
  return result;
};

const render = (ast) => {
  const iterAst = (item, lvl) => {
    const getLineByType = {
      unchanged: (obj) => `${makeTab(lvl + 1)}${obj.key}: ${stringify(obj.value, lvl + 1)}\r\n`,
      added: (obj) => `${makeTab(lvl)}  + ${obj.key}: ${stringify(obj.value, lvl + 1)}\r\n`,
      removed: (obj) => `${makeTab(lvl)}  - ${obj.key}: ${stringify(obj.value, lvl + 1)}\r\n`,
      changed: (obj) => `${makeTab(lvl)}  + ${obj.key}: ${stringify(obj.valueAfter, lvl + 1)}\r\n${makeTab(lvl)}  - ${obj.key}: ${stringify(obj.valueBefore, lvl + 1)}\r\n`,
      object: (obj) => `${makeTab(lvl + 1)}${obj.key}: {\r\n${iterAst(obj.children, lvl + 1)} ${makeTab(lvl)}   }\r\n`,
    };
    return item.reduce((acc, obj) => acc.concat(getLineByType[obj.type](obj)), '');
  };
  const result = `{\r\n${iterAst(ast, 0)}}\r\n`;
  return result;
};

export default render;
