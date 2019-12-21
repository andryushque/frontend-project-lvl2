import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return value;
};

const render = (ast) => {
  const iterAst = (item, parentKey) => {
    const getKey = (obj) => [...parentKey, obj.key];
    const getProperty = (obj) => `'${getKey(obj).join('.')}'`;
    const getLineByType = {
      added: (obj) => `Property ${getProperty(obj)} was added with value: ${stringify(obj.value)}`,
      removed: (obj) => `Property ${getProperty(obj)} was removed`,
      changed: (obj) => `Property ${getProperty(obj)} was updated. From ${stringify(obj.valueBefore)} to ${stringify(obj.valueAfter)}`,
      object: (obj) => iterAst(obj.children, getKey(obj)),
    };
    const line = item.filter((obj) => obj.type !== 'unchanged')
      .reduce((acc, obj) => [...acc, getLineByType[obj.type](obj)], []);
    return line.join('\n');
  };
  const result = iterAst(ast, []);
  return `${result}\n`;
};

export default render;
