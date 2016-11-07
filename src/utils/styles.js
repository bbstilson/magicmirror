export function positionAndDimensionsToStyles ({ left, top }, width, height) {
  return {
    width,
    height,
    left: left + '%',
    top: top + '%'
  };
}
