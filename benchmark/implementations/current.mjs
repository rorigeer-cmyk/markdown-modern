import markdownit from '../../index.mjs'

export function run(data) {
  const md = markdownit({
    html: true,
    linkify: true,
    typographer: true
  })
  return md.render(data)
}
