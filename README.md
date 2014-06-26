# JSON File Stub API Tool

Silly CLI tool for serving out static files and a static "API".

# Usage

Install the tool using `npm install --save-dev` or whichever is your preferred method of installation.

If you install the tool to your node_modules, make sure to add `./node_modules/.bin` to your $PATH.

Run the tool like this, specifying the `statics` folder first (e.g. `dist/`) and the `routes` folder last (e.g. `routes`)

    $ json-file-stub-api dist/ routes/
    route:  /routes
    route:  /routes/other
    we listenin 4 u @ 3000

    $ curl -X GET localhost:3000/
    sdfsdffds
    $ curl -X GET localhost:3000/routes
    123mybagel
    $ curl -X GET localhost:3000/routes/other
    765muteki
