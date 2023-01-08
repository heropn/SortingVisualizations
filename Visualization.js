var canvas = document.querySelector('.visCanvas');
var context = canvas.getContext('2d');

var maxHeight = 0;
var maxWidth = 0;

var randomLines = [];

const lineWidth = 0.5; // it looks like it is the smalles size | investigate
const lineOffset = lineWidth + 0.1;

const whiteColor = '#FFFFFF'
const defaultLineColor = '#FF0000'

class Line
{
  constructor(yPercent, color)
  {
    this.yPercent = yPercent;
    this.color = color;
  }
}

window.onload = function()
{
  ResizeCanvas();
  GenerateRandomLines();
  DrawLinesOnCanvas();

  InitBubbleSort(window);
}

function OnFinished()
{
  console.log("Finished!");
  canvas.style.borderColor="#00FF00"
}

function SwapRandomLines()
{
  var firstIdx = Math.floor(Math.random() * randomLines.length);
  var secondIdx = Math.floor(Math.random() * randomLines.length);

  SwapLines(firstIdx, secondIdx);
}

function DrawLinesOnCanvas()
{
  for (let i = 0; i < randomLines.length; i++)
  {
    DrawLineAtIndex(i);
  }
}

function SwapLines(firstIndex, secondIndex)
{
  ClearCanvas();

  var temp = randomLines[firstIndex];
  randomLines[firstIndex] = randomLines[secondIndex];
  randomLines[secondIndex] = temp;

  DrawLinesOnCanvas();
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
    //Math.max(Math.random(), 0.01) * maxHeight
    randomLines.push(new Line(Math.max(Math.random(), 0.01), defaultLineColor));
  }
}
