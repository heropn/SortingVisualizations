var arrayCopy = null;

function InitBubbleSort()
{
  arrayCopy = [...randomLines];
  SetLineOperationInterval(1);
  BubbleSort();
  OnFinishedSortingAlgorithm();
}

function BubbleSort()
{
  for (let i = 0; i < arrayCopy.length; i++)
  {
    for (let j = i + 1; j < arrayCopy.length; j++)
    {
      if (arrayCopy[i].yPercent > arrayCopy[j].yPercent)
      {
        Swap(arrayCopy, i, j);
      }
    }
  }
}
