export const createForwardArrow = (): SVGElement => {
  const svgNS = "http://www.w3.org/2000/svg";
  const forwardArrow = document.createElementNS(svgNS, "svg") as SVGElement;
  forwardArrow.setAttribute("xmlns", svgNS);
  forwardArrow.setAttribute("height", "24px");
  forwardArrow.setAttribute("width", "24px");
  forwardArrow.setAttribute("viewBox", "0 -960 960 960");
  forwardArrow.classList.add("forwardArrow");

  const path = document.createElementNS(svgNS, "path") as SVGPathElement;
  path.setAttribute("d", "m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z");

  forwardArrow.appendChild(path);
  return forwardArrow;
};
