var intervalID = null;

function InitBubbleSort(window)
{
  intervalID = window.setInterval(BubbleSortStep, 1);
}

var i = 0;
var j = 0;

function BubbleSortStep()
{
  var swappedLines = false;

  if (randomLines[i].yPercent < randomLines[j].yPercent)
  {
    SwapLines(i, j);
    window.clearInterval(intervalID);
    swappedLines = true;
  }

  j++;

  if (j >= randomLines.length)
  {
    j = 0;
    i++;
  }

  if (i >= randomLines.length)
  {
    window.clearInterval(intervalID);
    OnFinished();
  }

  if (swappedLines)
  {
    intervalID = window.setInterval(BubbleSortStep, 1);
  }
  else
  {
    BubbleSortStep();
  }
}
