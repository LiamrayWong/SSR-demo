//加载服务端构建结果
const path = require('path');
const serverBundle = path.resolve(process.cwd(), 'serverDist', 'vue-ssr-server-bundle.json');
const {createBundleRenderer} = require('vue-server-renderer');
//加载客户端构建结果
const clientManifestPath = path.resolve(process.cwd(), 'dist', 'vue-ssr-client-manifest.json');
const clientManifest = require(clientManifestPath);
//创建 html 渲染器
const template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
const renderer = createBundleRenderer(serverBundle, {
  template,  // 使用HTML模板
  clientManifest // 将客户端的构建结果清单传入
});
