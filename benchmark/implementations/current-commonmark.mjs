import markdownit from '../../index.mjs'

export function run(data) {
  const md = markdownit('commonmark')
  return md.render(data)
}
