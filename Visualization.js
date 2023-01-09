var canvas = document.querySelector('.visCanvas');
var context = canvas.getContext('2d');
var backButton = document.querySelector('.backButton');

var maxHeight = 0;
var maxWidth = 0;

var randomLines = [];

var lineOperations = [];

const lineWidth = 0.5; // it looks like it is the smalles size | investigate
const lineOffset = lineWidth + 0.1;

const whiteColor = '#FFFFFF'
const defaultLineColor = '#F54032'

var lineOperationIntervalHandle = null;
var stopSwapingAtEnd = false;

class LineValueChangeData
{
  constructor(lineIndex, newYPercentage)
  {
    this.lineIndex = lineIndex;
    this.newYPercentage = newYPercentage;
  }
}

class LineSwapData
{
  constructor(indexOne, indexTwo)
  {
    this.indexOne = indexOne;
    this.indexTwo = indexTwo;
  }
}

class Line
{
  constructor(yPercent, color)
  {
    this.yPercent = yPercent;
    this.color = color;
  }
}

backButton.addEventListener('click', () => {
  document.location.href = "Menu.php";
});

window.onload = function()
{
  ResizeCanvas();
  GenerateRandomLines();
  DrawLinesOnCanvas();

  const sortingAlgorithmsDict = {
    "Bubble Sort" : InitBubbleSort,
    "Merge Sort" : InitMergeSort,
    "Quick Sort" : InitQuickSort,
    "Heap Sort" : InitHeapSort,
    "Gnome Sort" : InitGnomeSort,
    "Cocktail Sort" : InitCocktailSort
  };

  var sortType = localStorage.getItem('sort');
  if (sortType in sortingAlgorithmsDict)
  {
    sortingAlgorithmsDict[sortType]();

    if (lineOperationIntervalHandle == null)
    {
      SetLineOperationInterval(50);
    }
  }
}

function OnFinished()
{
  canvas.style.borderColor="#00FF00"
}

function OnFinishedSortingAlgorithm()
{
  stopSwapingAtEnd = true;
}

function DrawLinesOnCanvas()
{
  for (let i = 0; i < randomLines.length; i++)
  {
    DrawLineAtIndex(i);
  }
}

function AddLineValueChangeData(lineIndex, newYPercentage)
{
  lineOperations.push(new LineValueChangeData(lineIndex, newYPercentage));
}

function AddLineSwapData(indexOne, indexTwo)
{
  lineOperations.push(new LineSwapData(indexOne, indexTwo));
}

function SetLineOperationInterval(time)
{
  if (lineOperationIntervalHandle == null)
  {
    lineOperationIntervalHandle = window.setInterval(HandleLineOperation, time);
  }
  else
  {
    console.log("Swapping interval is already set!");
  }
}

function HandleLineOperation()
{
  if (lineOperations.length == 0)
  {
    return;
  }

  var lineOperation = lineOperations.shift();

  ClearCanvas();

  if (lineOperation.constructor.name == "LineSwapData")
  {
    var temp = randomLines[lineOperation.indexOne];
    randomLines[lineOperation.indexOne] = randomLines[lineOperation.indexTwo];
    randomLines[lineOperation.indexTwo] = temp;
  }
  else if (lineOperation.constructor.name == "LineValueChangeData")
  {
    randomLines[lineOperation.lineIndex].yPercent = lineOperation.newYPercentage;
  }

  DrawLinesOnCanvas();

  if (lineOperations.length == 0 && stopSwapingAtEnd)
  {
    window.clearInterval(lineOperationIntervalHandle);
    OnFinished();
  }
}

function DrawLineAtIndex(index)
{
  DrawLine(randomLines[index], (index + 1) * lineOffset);
}

function DrawLine(line, x)
{
  context.beginPath();

  context.lineWidth = lineWidth;
  context.strokeStyle = line.color;

  context.moveTo(x, maxHeight);
  context.lineTo(x, Math.abs((line.yPercent * maxHeight) - maxHeight));

  context.stroke();
}

function ClearCanvas()
{
  context.clearRect(0, 0, canvas.width, canvas.height)
}

function ResizeCanvas()
{
  const scale = window.devicePixelRatio;
  maxHeight = canvas.height / scale;
  maxWidth = canvas.width / scale;
  context.scale(scale, scale);
}

function GenerateRandomLines()
{
  var linesToGenerate = Math.floor(maxWidth / lineOffset) - 1;

  for (let i = 0; i < linesToGenerate; i++)
  {
    randomLines.push(new Line(Math.max(Math.random(), 0.01), defaultLineColor));
  }
}
