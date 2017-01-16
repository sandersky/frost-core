const {assign} = Object

function scrollFrame ({interval, pixelsPerFrame, pixelsToMove}) {
  if (Math.abs(pixelsToMove) < Math.abs(pixelsPerFrame)) {
    pixelsToMove = pixelsPerFrame
  }

  document.scrollingElement.scrollTop += pixelsPerFrame
  pixelsToMove -= pixelsPerFrame

  if (pixelsToMove === 0) {
    return
  }

  setTimeout(scrollFrame.bind(null, {interval, pixelsPerFrame, pixelsToMove}), interval)
}

export function scrollIntoView (element, options) {
  options = assign(
    {
      duration: 500,
      fps: 30
    },
    options || {}
  )

  const elementRect = element.getBoundingClientRect()
  const interval = options.duration / options.fps
  const scrollingElement = document.scrollingElement
  const scrollingElementRect = scrollingElement.getBoundingClientRect()
  const pixelsToMove = elementRect.top - scrollingElementRect.top - scrollingElement.scrollTop
  const pixelsPerFrame = pixelsToMove / interval

  scrollFrame({interval, pixelsPerFrame, pixelsToMove})
}
