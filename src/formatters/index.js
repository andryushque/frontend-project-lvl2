import renderTree from './renderTree';
import renderPlain from './renderPlain';
import renderJson from './renderJson';

const renderFormats = {
  tree: renderTree,
  plain: renderPlain,
  json: renderJson,
};

const getRender = (format) => renderFormats[format];
export default getRender;
