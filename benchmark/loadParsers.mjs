import { run as commonmarkReference } from './implementations/commonmark-reference.mjs'
import { run as currentCommonmark } from './implementations/current-commonmark.mjs'
import { run as current } from './implementations/current.mjs'
import { run as lastPublicCommonmark } from './implementations/lastPublic-commonmark.mjs'
import { run as marked } from './implementations/marked.mjs'
import { run as lastPublic } from "./implementations/lastPublic.mjs"
export const markdownIt = [
  { name: 'current', run: current },
  { name: 'lastPublic', run: lastPublic }
]

export const markdownItCommonmark = [
  { name: 'current-commonmark', run: currentCommonmark },
  { name: 'lastPublic-commonmark', run: lastPublicCommonmark },
]

export const alternatives = [
  { name: 'commonmark-reference', run: commonmarkReference },
  { name: 'current', run: current },
  { name: 'marked', run: marked },
]
