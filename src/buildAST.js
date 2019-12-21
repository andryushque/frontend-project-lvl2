import _ from 'lodash';

const buildAST = (fileBefore, fileAfter) => {
  const fileKeys = _.union(_.keys(fileBefore), _.keys(fileAfter));
  const iterAST = (fileKey) => {
    if (_.isEqual(fileBefore[fileKey], fileAfter[fileKey])) {
      return { key: fileKey, value: fileBefore[fileKey], type: 'unchanged' };
    }

    if (!_.has(fileBefore, fileKey) && _.has(fileAfter, fileKey)) {
      return { key: fileKey, value: fileAfter[fileKey], type: 'added' };
    }

    if (_.has(fileBefore, fileKey) && !_.has(fileAfter, fileKey)) {
      return { key: fileKey, value: fileBefore[fileKey], type: 'removed' };
    }

    if (_.isObject(fileBefore[fileKey]) && _.isObject(fileAfter[fileKey])) {
      return { key: fileKey, type: 'object', children: buildAST(fileBefore[fileKey], fileAfter[fileKey]) };
    }

    return {
      key: fileKey, valueBefore: fileBefore[fileKey], valueAfter: fileAfter[fileKey], type: 'changed',
    };
  };
  const result = fileKeys.map(iterAST);
  return result;
};

export default buildAST;
