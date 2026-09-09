import markdownit from "markdown-it"

export function run(data) {
  const md = markdownit({
    html: true,
    linkify: true,
    typographer: true
  })
  return md.render(data)
}
