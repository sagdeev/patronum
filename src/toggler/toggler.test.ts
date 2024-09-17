import { argumentHistory, watch } from '../../test-library';

import { toggler } from './index';

test('toggler: initial value should be false', () => {
  const model = toggler(false);
  const fn = watch(model.$value);

  expect(fn).toHaveBeenCalledTimes(1);
  expect(fn).toHaveBeenCalledWith(false);
});

test('toggler: initial value should be true', () => {
  const model = toggler(true);
  const fn = watch(model.$value);

  expect(fn).toHaveBeenCalledTimes(1);
  expect(fn).toHaveBeenCalledWith(true);
});

test('toggler: value should be changed by toggle', () => {
  const model = toggler(false);
  const fn = watch(model.$value);

  model.toggle();
  model.toggle();

  expect(fn).toHaveBeenCalledTimes(3);
  expect(argumentHistory(fn)).toMatchInlineSnapshot(`
    [
      false,
      true,
      false,
    ]
  `);
});

test('toggler: on should works', () => {
  const model = toggler(false);
  const fn = watch(model.$value);

  model.on();

  expect(fn).toHaveBeenCalledTimes(2);
  expect(argumentHistory(fn)).toMatchInlineSnapshot(`
    [
      false,
      true,
    ]
  `);
});

test('toggler: off should works', () => {
  const model = toggler(true);
  const fn = watch(model.$value);

  model.off();

  expect(fn).toHaveBeenCalledTimes(2);
  expect(argumentHistory(fn)).toMatchInlineSnapshot(`
    [
      true,
      false,
    ]
  `);
});

test('toggler: set should works', () => {
  const model = toggler(true);
  const fn = watch(model.$value);

  model.set(false);
  model.set(true);

  expect(fn).toHaveBeenCalledTimes(3);
  expect(argumentHistory(fn)).toMatchInlineSnapshot(`
    [
      true,
      false,
      true,
    ]
  `);
});

test('toggler: reset should works', () => {
  const model = toggler(true);
  const fn = watch(model.$value);

  model.set(false);
  model.reset();

  expect(fn).toHaveBeenCalledTimes(3);
  expect(argumentHistory(fn)).toMatchInlineSnapshot(`
    [
      true,
      false,
      true,
    ]
  `);
});
