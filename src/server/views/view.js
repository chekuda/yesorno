module.exports = ({ content = 'Its Running', script = '', store = '', title = '' }) =>
  `<!doctype html>
    <html lang="en">
      <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <script src="main.js"></script>
      </head>
      <body>
        <div id="root">${content}</div>
        <button id="redirect type="button">REDIRECT</button>
      </body>
    </html>`