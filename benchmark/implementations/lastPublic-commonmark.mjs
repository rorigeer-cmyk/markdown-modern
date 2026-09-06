import markdownit from "markdown-it";

const md = markdownit('commonmark')

export function run (data) {
  return md.render(data)
}
