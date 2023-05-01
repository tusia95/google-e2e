import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  reporter: [["list"]],
  projects: [
    {
      name: "chromium",
      retries: 0,
      timeout: 70000,
      use: {
        channel: "chrome",
        browserName: "chromium",
        headless: false,
        screenshot: "only-on-failure",
        video: "off",
        trace: "on-first-retry",
        actionTimeout: 10000,
        navigationTimeout: 10000,
      },
      // },
      //     {
      //         name: 'firefox',
      //         retries: 1,
      //         timeout: 120000,
      //         use: {
      //             browserName: 'firefox',
      //             headless: false,
      //             screenshot: 'only-on-failure',
      //             video: 'off',
      //             trace: 'on-first-retry',
      //         }
      //     },
      //     {
      //         name: 'webkit',
      //         retries: 1,
      //         timeout: 120000,
      //         use: {
      //             browserName: 'webkit',
      //             headless: false,
      //             screenshot: 'only-on-failure',
      //             video: 'off',
      //             trace: 'on-first-retry',
      //         }
    },
  ],
};
export default config;