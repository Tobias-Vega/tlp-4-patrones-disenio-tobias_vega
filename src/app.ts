import { runAdapter } from "./adapter";
import { runObserver } from "./observer";
import { runSingleton } from "./singleton";


(
  async () => {
    await runObserver();
    await runAdapter();
    await runSingleton();
    // await runFactory();
  }
)();