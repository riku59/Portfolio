export const isElementVisible = (elementRef, threshold = 0.7) => {
  const element = elementRef.current;

  if (element) {
    const bounding = element.getBoundingClientRect();
    return bounding.top <= window.innerHeight * threshold;
  }

  return false;
};
