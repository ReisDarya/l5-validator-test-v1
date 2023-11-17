import ArraySchema from './ArraySchema.js';
import NumberSchema from './NumberSchema.js';
import ObjectSchrema from './ObjectSchema.js';

class Validator {
// eslint-disable-next-line
  number() {
    return new NumberSchema();
  }
  // eslint-disable-next-line
  array() {
    return new ArraySchema();
  }
  // eslint-disable-next-line
  object() {
    return new ObjectSchrema();
  }
}

export default Validator;
