const path = require('path');
const serverBundle = path.resolve(process.cwd(), 'serverDist', 'vue-ssr-server-bundle.json');
const {createBundleRenderer} = require('vue-server-renderer');
const serverBundle = path.resolve(process.cwd(), 'serverDist', 'vue-ssr-server-bundle.json');
