import { LockManager } from "../src/polyfill";
export * from "../src/sleep";
export * from "../src/polyfill";

export function createWebLocksInstance() {
  localStorage.clear();
  return new LockManager();
}

export const neverSettledPromise = new Promise((resolve) => {
  /* never */
});
