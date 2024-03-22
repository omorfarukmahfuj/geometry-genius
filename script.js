function triangleCalculation() {
  const triangleBase = getInputValueById('triangleBase');
  const triangleHeight = getInputValueById('triangleHeight');
  const triangleArea = .5 * triangleBase * triangleHeight;
  setInnerTextById('result', 'Triangle', triangleArea);
}

function rectangleCalculation() {
  const rectangleLength = getInputValueById('rectangleLength');
  const rectangleWidth = getInputValueById('rectangleWidth');
  const rectangleArea = rectangleLength * rectangleWidth;
  setInnerTextById('result', 'Rectangle', rectangleArea);
}

function parallelogramCalculation() {
  const parallelogramBase = getInputValueById('parallelogramBase');
  const parallelogramHeight = getInputValueById('parallelogramHeight');
  const parallelogramArea = parallelogramBase * parallelogramHeight;
  setInnerTextById('result', 'Parallelogram', parallelogramArea);
}

function rhombusCalculation() {
  const rhombusDiagonal1 = getInputValueById('rhombusDiagonal1');
  const rhombusDiagonal2 = getInputValueById('rhombusDiagonal2');
  const rhombusArea = .5 * rhombusDiagonal1 * rhombusDiagonal2;
  setInnerTextById('result', 'Rhombus', rhombusArea);
}

function pentagonCalculation() {
  const pentagonPerimeter = getInputValueById('pentagonPerimeter');
  const pentagonApothem = getInputValueById('pentagonApothem');
  const pentagonArea = .5 * pentagonPerimeter * pentagonApothem;
  setInnerTextById('result', 'Pentagon', pentagonArea);
}

function ellipseCalculation() {
  const majorAxis = getInputValueById('majorAxis');
  const minorAxis = getInputValueById('minorAxis');
  const ellipseArea = Math.PI * majorAxis * minorAxis;
  setInnerTextById('result', 'Ellipse', ellipseArea);
}

// Common Funtions

function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueText = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueText);
  inputField.value = " ";
  return inputFieldValue;
}

function setInnerTextById(elementId, elementName, value) {
  const element = document.getElementById(elementId);
  element.innerText = elementName + " Area : " + value;
}