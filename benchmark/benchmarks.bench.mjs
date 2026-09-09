import fs from 'node:fs'
import { join } from 'node:path'
import { run as commonmarkReference } from './implementations/commonmark-reference.mjs'
import { run as current } from './implementations/current.mjs'
import { run as currentCommonmark } from './implementations/current-commonmark.mjs'
import { run as lastPublicCommonmark } from './implementations/lastPublic-commonmark.mjs'
import { run as marked } from './implementations/marked.mjs'
import { run as lastPublic } from "./implementations/lastPublic.mjs";

const content = fs.readFileSync(
  join(import.meta.dirname, 'samples', 'TEST-REAL-FILE.md'),
  'utf8',
)

export default {
  benchmarks: {
    'commonmark_reference': {
      fn: () => commonmarkReference(content),
      tags: ['commonmark', 'competitor'],
    },
    'current': {
      fn: () => current(content),
      tags: ['regression', 'competitor', 'current'],
    },
    'marked': {
      fn: () => marked(content),
      tags: ['marked', 'competitor'],
    },
    'lastPublic':{
      fn:()=> lastPublic(content),
      tags:['regression', 'prev']
    },
    'current-commonmark': {
      fn: () => currentCommonmark(content),
      tags: ['commonmark'],
    },
    'lastPublic-commonmark': {
      fn: () => lastPublicCommonmark(content),
      tags: ['commonmark'],
    },
  },
}
