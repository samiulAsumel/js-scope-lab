function throttle(fn, interval) {
  // lastCalled is private closure state — only the returned wrapper can read/update it.
  let lastCalled = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCalled >= interval) {
      lastCalled = now;
      fn.apply(this, args); // preserves the caller's `this` and arguments
    } else {
      console.log(`Ignored (only ${now - lastCalled}ms since last run)`);
    }
  };
}

function logMessage(message) {
  console.log(`[${Date.now()}] ${message}`);
}

const throttledLog = throttle(logMessage, 1000);

throttledLog("call 1"); // 0ms   -> runs
setTimeout(() => throttledLog("call 2"), 300); // 300ms -> too soon, ignored
setTimeout(() => throttledLog("call 3"), 1200); // 1200ms -> interval passed, runs
