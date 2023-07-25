# REST PDF

A REST endpoint to convert HTML URLs to PDF using Node.js and Puppeteer.

A quick and dirty hack with no error handling. Use at your own risk.

## Requirements

- Node.js (tested with v20.5.0)

## Install

````
npm ci
````

## Run

````
npm start
````

## Test

In your browser open

````
http://localhost:3000/pdf?target=https://example.com
````

## URL Parameter

| Name     | Default | Description |
| -------- | ------- | ----------- |
| `target` |         | URL to convert, eg. `https://example.com` |
| `format` | `A4`    | [Puppeteer paperformat](https://pptr.dev/api/puppeteer.paperformat) |

## License

[MIT licensed](https://en.wikipedia.org/wiki/MIT_License).
