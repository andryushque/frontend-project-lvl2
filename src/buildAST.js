import _ from 'lodash';

const buildAST = (obj1, obj2) => {
  const keys = _.union(_.keys(obj1), _.keys(obj2));
  const iterAST = (key) => {
    if (_.isEqual(obj1[key], obj2[key])) {
      return { key, value: obj1[key], type: 'unchanged' };
    }

    if (!_.has(obj1, key) && _.has(obj2, key)) {
      return { key, value: obj2[key], type: 'added' };
    }

    if (_.has(obj1, key) && !_.has(obj2, key)) {
      return { key, value: obj1[key], type: 'removed' };
    }

    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      return { key, type: 'object', children: buildAST(obj1[key], obj2[key]) };
    }

    return {
      key, valueBefore: obj1[key], valueAfter: obj2[key], type: 'changed',
    };
  };
  const result = keys.map(iterAST);
  return result;
};

export default buildAST;
