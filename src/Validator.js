import NumberSchema from './NumberSchema.js';
import ArraySchema from './ArraySchema.js';

class Validator {
  // eslint-disable-next-line
  number() {
    return new NumberSchema();
  }
  // eslint-disable-next-line
  array() {
    return new ArraySchema();
  }
}
export default Validator;

const v = new Validator();
const schema = v.array().length(3);

console.log(schema.isValid([1, 2, 3, 4, 5]));
console.log(schema);
