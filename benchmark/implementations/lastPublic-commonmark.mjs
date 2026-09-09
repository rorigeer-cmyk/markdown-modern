import markdownit from "markdown-it"

export function run(data) {
  const md = markdownit('commonmark')
  return md.render(data)
}
