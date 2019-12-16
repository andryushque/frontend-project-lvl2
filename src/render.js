import _ from 'lodash';

const makeTab = (lvl) => '  '.repeat(lvl);

const stringify = (value, lvl = 2) => {
  if (!(_.isObject(value))) {
    return value;
  }

  const objKeys = Object.keys(value);
  const line = objKeys
    .map((key) => `${makeTab(lvl + 2)}${key}: ${stringify(value[key], lvl + 2)}`)
    .join('\r\n');

  const result = `{\r\n${line}\r\n${makeTab(lvl)}}`;
  return result;
};

const render = (ast) => {
  const iterAst = (item, lvl) => {
    const getLineByType = {
      unchanged: (obj) => `${makeTab(lvl + 2)}${obj.key}: ${stringify(obj.value, lvl + 2)}\r\n`,
      added: (obj) => `${makeTab(lvl + 1)}+ ${obj.key}: ${stringify(obj.value, lvl + 2)}\r\n`,
      removed: (obj) => `${makeTab(lvl + 1)}- ${obj.key}: ${stringify(obj.value, lvl + 2)}\r\n`,
      changed: (obj) => `${makeTab(lvl + 1)}+ ${obj.key}: ${stringify(obj.valueAfter, lvl + 2)}\r\n ${makeTab(lvl)} - ${obj.key}: ${stringify(obj.valueBefore, lvl + 2)}\r\n`,
      object: (obj) => `${makeTab(lvl + 2)}${obj.key}: {\r\n${iterAst(obj.children, lvl + 2)} ${makeTab(lvl)}   }\r\n`,
    };
    return item.reduce((acc, obj) => acc.concat(getLineByType[obj.type](obj)), '');
  };
  const result = `{\r\n${iterAst(ast, 0)}}\r\n`;
  return result;
};

export default render;
