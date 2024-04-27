import { defineConfig, loadEnv } from 'vite'
import path from 'node:path'
import copy from 'rollup-plugin-copy'
import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'
import vue2Jsx from '@vitejs/plugin-vue2-jsx'
import Components from 'unplugin-vue-components/vite'
// import AutoImport from 'unplugin-auto-import/vite'
import { PrimeVue2Resolver, optimizePrimeVueDeps } from './src/plugins/unplugin-primevue2-resolver'
import { visualizer } from 'rollup-plugin-visualizer'
import { vitePluginFakeServer } from 'vite-plugin-fake-server'
// 提供点击浏览器元素自动跳转到本地IDE的功能
import Inspector from 'unplugin-vue-inspector/vite'

function resolve(dir) {
  return path.join(__dirname, dir)
}

export default defineConfig(({ mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀
  const env = loadEnv(mode, process.cwd())
  const isEnableMock = env.VITE_MOCK === 'true'
  const isEnableInspector = env.VITE_VUE_INSPECTOR === 'true'

  return {
    base: env.VITE_BASE_URL,
    define: {
      'process.env': JSON.stringify(process.env),
    },
    resolve: {
      alias: [
        { find: '@', replacement: resolve('src') }
      ]
    },
    plugins: [
      copy({ 
        targets: [
          { src: 'node_modules/primevue/resources/*.css', dest: 'public/resource' },
          { src: 'node_modules/primeflex/*.css', dest: 'public/resource/primeflex' },
          { src: ['node_modules/primeicons/fonts', 'node_modules/primeicons/raw-svg', 'node_modules/primeicons/primeicons.css'], dest: 'public/resource/primeicons'}
        ],
      }),
      legacy({
        modernPolyfills: true
      }),
      vue2(),
      vue2Jsx(),
      Components({
        version: 2.7,
        dirs: ['src/plugins/components'],
        extensions: ['vue'],
        deep: true,
        resolvers: [PrimeVue2Resolver()]
      }),
      // AutoImport({
      //   dirs: ['src/plugins/components'],
      //   resolvers: [PrimeVue2Resolver()]
      // }),
      visualizer(),
      vitePluginFakeServer({
        include: 'mock',
        exclude: ['data'],
        infixName: false,
        extensions: ['js'],
        basename: env.VITE_APP_BASE_API,
        timeout: 1000,
        logger: true,
        enableDev: isEnableMock,
        enableProd: isEnableMock
      }),
      Inspector({
        vue: 2,
        toggleButtonVisibility: isEnableInspector ? 'always' : 'never',
        enabled: isEnableInspector
      }),
    ],
    server: {
      // 监听所有地址
      host: isEnableInspector ? undefined : '0.0.0.0',
      // 端口号
      port: Number(env.VITE_PORT),
      // 是否开启 https
      https: false,
      // 服务启动时是否自动打开浏览器
      open: true,
      cors: false,
      // 自定义代理规则
      proxy: !isEnableMock ? {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_APP_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), ''),
        }
      } : null
    },
    optimizeDeps: {
      entries: ['index.html', 'src/**/*.vue'],
      include: optimizePrimeVueDeps,
      exclude: ['vite-plugin-fake-server']
    },
    build: {
      outDir: env.VITE_OUTDIR,
      assetsDir: env.VITE_ASSETS_DIR,
      // 设置最终构建的浏览器兼容目标
      // target: 'es2015', // 以package.json中browserslist为准
      // 构建后是否生成 source map 文件
      sourcemap: true,
      //  chunk 大小警告的限制（以 kbs 为单位）
      // chunkSizeWarningLimit: 1024,
      // 启用/禁用 gzip 压缩大小报告
      // reportCompressedSize: false,
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash:8].js',
          entryFileNames: 'js/[name]-[hash:8].js',
          assetFileNames: '[ext]/[name]-[hash:8].[ext]',
          manualChunks: (id) => {
            if (id.includes('@fullcalendar')) {
              return 'app.fullcalendar'
            }

            if (id.includes('node_modules')) {
              const pkgName = id.split('node_modules/')[1].split('/')[0].toString()

              if (['vue', 'vue-router', 'vuex', 'axios', 'crypto-js', 'nprogress', 'screenfull', 'path-browserify', 'vee-validate'].includes(pkgName)) {
                return 'app.core'
              }
              // if (pkgName === 'primevue2') {
              //   const moduleName = id.toString().split('/').pop().split('.')[0].toLowerCase()
              //   if (!replaceComponents.includes(moduleName)) {
              //     if (initialComponents.includes(moduleName)) {
              //       return 'primevue.lib'
              //     }
              //     return 'primevue.lib2'
              //   }
              // }

              return pkgName
            }



            if (id.includes('src/components') || id.includes('src/utils')) {
              return 'app.component'
            }

            if (id.includes('mock') || id.includes('vite-plugin-fake-server')) {
              return 'app.mock.server'
            }
          }
        }
      }
    },
    /**
     * Replace rollup-plugin-terser with drop of esbuild
     * 用 esbuild.drop 替换 rollup-plugin-terser
     */
    esbuild: {
      drop: [
        'console',
        'debugger'
      ]
    },
  }
})
