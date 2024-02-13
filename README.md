# [appium-service] Running Appium WDIO spec from VS Code debugger is rarely working (extremely flaky)

Steps to reproduce:
- Pull the code from: {this_repo}
- `npm i`
- In VSCode add a breakpoint in the `/test/specs/test.e2e.js` on the line 5, and keep this file as active
- Open the VS Code "Run and debug" extension, select "run select spec (iOS)" config (https://webdriver.io/docs/debugging/)
- Run this spec from VS Code debugger multiple times in the row

# There are a few problems:
#1 (the main one). Running the WDIO Appium spec from VS Code debugger is extremely flaky. The majority of times it fails with the following console output:
```
{USER}@{USER} appium-service-error %  cd /Users/{USER}/dev/appium-service-bug/appium-service-error ; /usr/b
in/env 'NODE_OPTIONS= --require "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/ms-vscode.js-debug/src/bootloader.js"
--inspect-publish-uid=http' 'VSCODE_INSPECTOR_OPTIONS=:::{"inspectorIpc":"/var/folders/sm/swqb23fd0jv0s33zs257l0sc0000gp/T/node-cdp.22312-7a188
243-1122.sock","deferredMode":false,"waitForDebugger":"","execPath":"/Users/{USER}/.nvm/versions/node/v20.9.0/bin/node","onlyEntryp
oint":false,"autoAttachMode":"always","fileCallback":"/var/folders/sm/swqb23fd0jv0s33zs257l0sc0000gp/T/node-debug-callback-8c5b8ce04287aa37"}'
/Users/{USER}/.nvm/versions/node/v20.9.0/bin/node ./node_modules/@wdio/cli/bin/wdio.js wdio.ios.conf.js --spec /Users/alexzagriychu
k-mbp/dev/appium-service-bug/appium-service-error/test/specs/test.e2e.js
Debugger attached.

Execution of 1 workers started at 2024-02-13T02:54:24.288Z

2024-02-13T02:54:24.321Z INFO @wdio/cli:launcher: Run onPrepare hook
2024-02-13T02:54:24.322Z INFO @wdio/appium-service: Will spawn Appium process: node /Users/{USER}/dev/appium-service-bug/appium-service-error/node_modules/appium/index.js --base-path / --relaxed-security --log ./_results_/appium.log --port 4723
2024-02-13T02:54:24.426Z ERROR @wdio/appium-service: Debugger attached.

2024-02-13T02:54:24.427Z ERROR @wdio/cli:utils: A service failed in the 'onPrepare' hook
Error: Debugger attached.

    at Socket.<anonymous> (file:///Users/{USER}/dev/appium-service-bug/appium-service-error/node_modules/@wdio/appium-service/build/launcher.js:172:28)
    at Object.onceWrapper (node:events:629:26)
    at Socket.emit (node:events:514:28)
    at Socket.emit (node:domain:488:12)
    at addChunk (node:internal/streams/readable:376:12)
    at readableAddChunk (node:internal/streams/readable:349:9)
    at Readable.push (node:internal/streams/readable:286:10)
    at Pipe.onStreamRead (node:internal/stream_base_commons:190:23)
    at Pipe.callbackTrampoline (node:internal/async_hooks:130:17)

Continue...
2024-02-13T02:54:24.427Z INFO @wdio/cli:launcher: Run onWorkerStart hook
2024-02-13T02:54:24.428Z INFO @wdio/local-runner: Start worker 0-0 with arg: wdio.ios.conf.js,--spec,/Users/{USER}/dev/appium-service-bug/appium-service-error/test/specs/test.e2e.js
[0-0] 2024-02-13T02:54:25.964Z INFO @wdio/local-runner: Run worker command: run
[0-0] RUNNING in Safari - file:///test/specs/test.e2e.js
[0-0] 2024-02-13T02:54:26.149Z INFO webdriver: Initiate new session using the WebDriver protocol
[0-0] 2024-02-13T02:54:26.149Z INFO @wdio/utils: Connecting to existing driver at http://127.0.0.1:4723/
[0-0] 2024-02-13T02:54:26.251Z INFO webdriver: [POST] http://127.0.0.1:4723/session
[0-0] 2024-02-13T02:54:26.252Z INFO webdriver: DATA {
[0-0]   capabilities: {
[0-0]     alwaysMatch: {
[0-0]       platformName: 'iOS',
[0-0]       browserName: 'Safari',
[0-0]       'appium:deviceName': 'iPhone 14 Pro',
[0-0]       'appium:platformVersion': '16.4',
[0-0]       'appium:automationName': 'XCUITest'
[0-0]     },
[0-0]     firstMatch: [ {} ]
[0-0]   },
[0-0]   desiredCapabilities: {
[0-0]     platformName: 'iOS',
[0-0]     browserName: 'Safari',
[0-0]     'appium:deviceName': 'iPhone 14 Pro',
[0-0]     'appium:platformVersion': '16.4',
[0-0]     'appium:automationName': 'XCUITest'
[0-0]   }
[0-0] }
[0-0] 2024-02-13T02:54:26.572Z ERROR webdriver: RequestError: connect ECONNREFUSED 127.0.0.1:4723
[0-0]     at ClientRequest.<anonymous> (file:///Users/{USER}/dev/appium-service-bug/appium-service-error/node_modules/got/dist/source/core/index.js:790:107)
[0-0]     at Object.onceWrapper (node:events:629:26)
[0-0]     at ClientRequest.emit (node:events:526:35)
[0-0]     at ClientRequest.emit (node:domain:488:12)
[0-0]     at Socket.socketErrorListener (node:_http_client:495:9)
[0-0]     at Socket.emit (node:events:514:28)
[0-0]     at Socket.emit (node:domain:488:12)
[0-0]     at emitErrorNT (node:internal/streams/destroy:151:8)
[0-0]     at emitErrorCloseNT (node:internal/streams/destroy:116:3)
[0-0]     at process.processTicksAndRejections (node:internal/process/task_queues:82:21)
[0-0]     at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1595:16)
[0-0]     at TCPConnectWrap.callbackTrampoline (node:internal/async_hooks:130:17)
[0-0] 2024-02-13T02:54:26.572Z ERROR @wdio/runner: Error: Failed to create session.
[0-0] Unable to connect to "http://127.0.0.1:4723/", make sure browser driver is running on that address.
[0-0] It seems like the service failed to start or is rejecting any connections.
[0-0]     at startWebDriverSession (file:///Users/{USER}/dev/appium-service-bug/appium-service-error/node_modules/webdriver/build/utils.js:69:15)
[0-0]     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
[0-0]     at async WebDriver.newSession (file:///Users/{USER}/dev/appium-service-bug/appium-service-error/node_modules/webdriver/build/index.js:20:45)
[0-0]     at async remote (file:///Users/{USER}/dev/appium-service-bug/appium-service-error/node_modules/webdriverio/build/index.js:45:22)
[0-0]     at async Runner._startSession (file:///Users/{USER}/dev/appium-service-bug/appium-service-error/node_modules/@wdio/runner/build/index.js:241:29)
[0-0]     at async Runner._initSession (file:///Users/{USER}/dev/appium-service-bug/appium-service-error/node_modules/@wdio/runner/build/index.js:207:25)
[0-0]     at async Runner.run (file:///Users/{USER}/dev/appium-service-bug/appium-service-error/node_modules/@wdio/runner/build/index.js:88:19)
[0-0] FAILED in Safari - file:///test/specs/test.e2e.js
2024-02-13T02:54:26.702Z INFO @wdio/cli:launcher: Run onWorkerEnd hook
2024-02-13T02:54:26.705Z INFO @wdio/cli:launcher: Run onComplete hook

Spec Files:      0 passed, 1 failed, 1 total (100% completed) in 00:00:02

2024-02-13T02:54:26.706Z INFO @wdio/local-runner: Shutting down spawned worker
2024-02-13T02:54:26.957Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
2024-02-13T02:54:26.958Z INFO @wdio/local-runner: shutting down
Waiting for the debugger to disconnect...
```


#2. Even if in rare cases it actually starts and we see the debug runner paused at the breakpoint, we still see the console error (which seem to make consecutive successful execution impossible, and overall execution from the VS Code debugger extremely flaky)
```
Execution of 1 workers started at 2024-02-13T03:00:25.450Z

2024-02-13T03:00:25.479Z INFO @wdio/cli:launcher: Run onPrepare hook
2024-02-13T03:00:25.480Z INFO @wdio/appium-service: Will spawn Appium process: node /Users/{USER}/dev/appium-service-bug/appium-service-error/node_modules/appium/index.js --base-path / --relaxed-security --log ./_results_/appium.log --port 4723
2024-02-13T03:00:25.581Z ERROR @wdio/appium-service: Debugger attached.

2024-02-13T03:00:25.581Z ERROR @wdio/cli:utils: A service failed in the 'onPrepare' hook
Error: Debugger attached.

    at Socket.<anonymous> (file:///Users/{USER}/dev/appium-service-bug/appium-service-error/node_modules/@wdio/appium-service/build/launcher.js:172:28)
    at Object.onceWrapper (node:events:629:26)
    at Socket.emit (node:events:514:28)
    at Socket.emit (node:domain:488:12)
    at addChunk (node:internal/streams/readable:376:12)
    at readableAddChunk (node:internal/streams/readable:349:9)
    at Readable.push (node:internal/streams/readable:286:10)
    at Pipe.onStreamRead (node:internal/stream_base_commons:190:23)
    at Pipe.callbackTrampoline (node:internal/async_hooks:130:17)

Continue...
```


# Notes:
- If I run `npm run wdio-ios` multiple times in the row I see no #1 nor #2 issue, and successfully stop at the breakpoint every time (sometimes need to execute `npm run appium-kill` once before running the script). So both #1 and #2 issues seem to only be present when running from the VSCode debugger
- seems like the #1 problem flakiness rate reduces if I `npm uninstall appium-uiautomator2-driver` (which is not a fix, just an observation), but #2 still present every time
