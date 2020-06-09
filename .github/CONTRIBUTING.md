# Contributing
## Setup
1. Navigate to the Launcher directory
2. Install dependencies with `yarn install`
3. Start launcher with `yarn dev:start` (protip: use `yarn start` to run without developer tools)
    - Open debugger with `Ctrl + Shift + I`
    - Reload page with `Ctrl + R`
    - Run linter with `yarn dev:lint`
4. Optional: Build the project's binaries with `yarn build:win` (`win` can be replaced with `linux` or `mac`, you can only build a platform if you're currently on that OS, for e.g. you can't build mac or linux on windows)
5. Note that you will need to setup the web server when testing out the 'Play' button (or temporarily comment out the communication to the web server and provide your own latest.zip test file)