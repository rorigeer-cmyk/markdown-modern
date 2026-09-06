#!/usr/bin/env node
/* eslint no-console:0 */

import Benchmark from 'benchmark'
import ansi from 'ansi'
import { loadParsers } from './loadParsers.mjs'
import { loadSamples } from './loadSamples.mjs'

const cursor = ansi(process.stdout)

const [PARERS, samples] = await Promise.all([loadParsers(), loadSamples()])


for (const { title, content } of samples) {
  function onComplete () { cursor.write('\n') }

  const suite = new Benchmark.Suite(
    title,
    {
      onStart: () => { console.log('\nSample: %s', title) },
    }
  )

  for (const impl of PARERS) {
    suite.add(
      impl.name,
      {
        onCycle(event) {
          cursor.horizontalAbsolute()
          cursor.eraseLine()
          cursor.write(' > ' + event.target)
        },
        onComplete,
        fn() { impl.code.run(content) }
      }
    )
  }

  suite.run()
}
