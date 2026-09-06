import markdownit from "markdown-it";

const md = markdownit()

export function run (data) {
  return md.render(data)
}
