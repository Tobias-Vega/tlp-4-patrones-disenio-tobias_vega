import { runAdapter } from "./adapter";
import { runObserver } from "./observer";


(
  async () => {
    await runObserver();
    await runAdapter();
    // await runSingleton();
    // await runFactory();
  }
)();