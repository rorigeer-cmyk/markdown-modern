import { Parser, HtmlRenderer } from "commonmark";

const parser = new Parser()
const renderer = new HtmlRenderer()

export function run (data) {
  return renderer.render(parser.parse(data))
}
