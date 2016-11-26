export function positionAndDimensionsToStyles ({ left, top }, width, height) {
  return {
    width: width || 'auto',
    height: height || 'auto',
    left: left + '%',
    top: top + '%'
  };
}
