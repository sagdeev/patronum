import { fork, allSettled } from 'effector';

import { toggler } from './index';

test('toggler/scope: works in forked scope', async () => {
  const model = toggler(false);

  const scope = fork();

  await allSettled(model.toggle, { scope });
  expect(scope.getState(model.$value)).toBeTruthy();

  await allSettled(model.toggle, { scope });
  expect(scope.getState(model.$value)).toBeFalsy();
});

test('toggler/scope: not affects another scope', async () => {
  const model = toggler(false);

  const scopeA = fork();
  const scopeB = fork();

  await allSettled(model.set, { scope: scopeA, params: true });
  expect(scopeA.getState(model.$value)).toBeTruthy();
  expect(scopeB.getState(model.$value)).toBeFalsy();

  await allSettled(model.toggle, { scope: scopeA });
  await allSettled(model.toggle, { scope: scopeB });
  expect(scopeA.getState(model.$value)).toBeFalsy();
  expect(scopeB.getState(model.$value)).toBeTruthy();
});

test('toggler/scope: not affects original store state', async () => {
  const model = toggler(false);

  const scope = fork();

  await allSettled(model.on, { scope });
  expect(scope.getState(model.$value)).toBeTruthy();
  expect(model.$value.getState()).toBeFalsy();
});
