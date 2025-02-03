export const createBackArrow = (): SVGElement => {
  const svgNS = "http://www.w3.org/2000/svg"; // Namespace för SVG
  const backArrow = document.createElementNS(svgNS, "svg") as SVGElement;
  backArrow.setAttribute("xmlns", svgNS);
  backArrow.setAttribute("height", "24px");
  backArrow.setAttribute("width", "24px");
  backArrow.setAttribute("viewBox", "0 -960 960 960");
  backArrow.classList.add("backArrow");

  const path = document.createElementNS(svgNS, "path") as SVGPathElement;
  path.setAttribute("d", "M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z");
  backArrow.appendChild(path);

  return backArrow;
};
