var arrayCopy = null;

function InitGnomeSort()
{
  arrayCopy = [...randomLines];
  SetLineOperationInterval(5);
  GnomeSort();
  OnFinishedSortingAlgorithm();
}

function GnomeSort()
{
  var index = 1;

  while (index < arrayCopy.length)
  {
    if (arrayCopy[index].yPercent >= arrayCopy[index - 1].yPercent)
    {
      index++;
    }
    else
    {
      Swap(index, index - 1);
      index = Math.max(index - 1, 1);
    }
  }

  return;
}

function Swap(i, j)
{
  AddLineSwapData(i, j);
  var temp = arrayCopy[i];
  arrayCopy[i] = arrayCopy[j];
  arrayCopy[j] = temp;
}
