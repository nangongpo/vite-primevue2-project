import { normalizePath } from 'vite'
import fs from 'node:fs'
import fg from 'fast-glob'
import path from 'node:path'

const components = fg.globSync(normalizePath(path.resolve(__dirname, '**/*.vue')))
const componentNames = []

for (const fileName of components) {
  const componentName = fileName.split('/').pop().replace(/\.\w+$/, '')
  componentNames.push(componentName)
}

// 提取primevue所有模块路径
const webTypes = fs.readFileSync(path.resolve(process.cwd(), 'node_modules/primevue2/web-types.json'))
const primevue2Tags = JSON.parse(webTypes).contributions.html.tags
const filePaths = []
for (const tag of primevue2Tags) {
  if (!componentNames.includes(tag.name)) {
    filePaths.push(path.join('primevue2', tag.name.toLowerCase()))
  }
}

export default {
  paths: filePaths,
  names: componentNames
}
