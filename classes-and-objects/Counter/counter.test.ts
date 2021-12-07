import test from 'tape';

import { Counter } from './counter';

test('init with 0 and add 5 is 5', t => {
  const c: Counter = new Counter();
  c.add(5);
  t.equal(c.get(), 5);
  t.end();
});

