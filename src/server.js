const express = require('express');
const {createBundleRenderer} = require('vue-server-renderer');
const path = require('path');
const fs = require('fs');
const app = express();
const serverBundle = path.resolve(process.cwd(), 'serverDist', 'vue-ssr-server-bundle.json');
const clientManifestPath = path.resolve(process.cwd(), 'dist', 'vue-ssr-client-manifest.json');
const clientManifest = JSON.parse(fs.readFileSync(clientManifestPath, 'utf-8'));
const template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
const renderer = createBundleRenderer(serverBundle, {
  template,
  clientManifest
});




app.get('*', function(req, res) {
  renderer.renderToString({}, (err, html) => {
    if (err) {
      res.send('500 server error');
      return;
    }
    res.send(html);
  })
});

app.listen(3001, function() {
  console.log('listen:3001');
});
