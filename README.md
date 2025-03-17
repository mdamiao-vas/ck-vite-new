Place Js files that need to be bundled in the /src

How to configure bundle options:
webpack.config.js

How to bundle Js:

npx webpack --config webpack.config.js --mode production

Files will be created in the /dist folder.

YOu can test your Js before bundling by running "npm run start".
It should show you something like this:

VITE v5.4.14 ready in 417 ms

➜ Local: http://localhost:5173/
➜ Network: use --host to expose
➜ press h + enter to show help
