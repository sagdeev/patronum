import { createStore, createApi } from 'effector';

export function toggler(defaultValue: boolean) {
  const $value = createStore(defaultValue);

  const api = createApi($value, {
    on: () => true,
    off: () => false,
    toggle: (state) => !state,
    set: (_, value: boolean) => value,
    reset: () => defaultValue,
  });

  return {
    $value,
    ...api,
    '@@unitShape': () => ({
      value: $value,
      ...api,
    }),
  };
}
