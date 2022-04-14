import { Five } from '@realsee/five'
import { work } from '@realsee/open-works/virtual/81RojBlJQdVTglNNMr/work'

import './index.scss'

const five = new Five({
  backgroundColor: 0x2bb8aa,
  imageOptions: { size: 512 },
  onlyRenderIfNeeds: true
})

five.appendTo(document.getElementById('app')!)

window.addEventListener('resize', () => five.refresh())

five.load(work)

Object.assign(window, { $five: five })
