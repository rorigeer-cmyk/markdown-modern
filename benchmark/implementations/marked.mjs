import { createRequire } from 'node:module'

const marked = createRequire(import.meta.url)('../node_modules/marked')

export function run (data) {
  return marked(data)
}
