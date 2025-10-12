import { LockManager } from "../src/polyfill";
export * from "../src/sleep";
export * from "../src/polyfill";

export function createWebLocksInstance() {
  const webLocks = new LockManager();
  window.localStorage.removeItem("heldLockSet");
  return webLocks;
}

export const neverSettledPromise = new Promise((resolve) => {
  /* never */
});
