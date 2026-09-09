import { Parser, HtmlRenderer } from "commonmark"

export function run(data) {
  const parser = new Parser()
  const renderer = new HtmlRenderer()
  return renderer.render(parser.parse(data))
}
