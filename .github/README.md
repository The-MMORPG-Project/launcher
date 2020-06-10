## Roadmap
- [ ] Download Latest Platform Specific Client Releases / Release Notes from Web Server
- [ ] Login / Register Pages

## Setup
1. Install dependencies with `yarn install`
2. Start launcher with `yarn dev:start`

*Note that you will need to setup the web server when testing out the 'Play' button (or temporarily comment out the communication to the web server and provide your own latest.zip test file)*

## Build
Build the project's binaries with `yarn build:win` (`win` can be replaced with `linux` or `mac`, you can only build a platform if you're currently on that OS, for e.g. you can't build mac or linux on windows)
