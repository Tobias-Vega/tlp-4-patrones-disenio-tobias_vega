
// import { runAdapter } from "./adapter";
// import { runSingleton } from "./singleton";
// import { runFactory } from "./factory";

import { runObserver } from "./observer/index";


(
  async () => {
    await runObserver();
    // await runAdapter();
    // await runSingleton();
    // await runFactory();
  }
)();