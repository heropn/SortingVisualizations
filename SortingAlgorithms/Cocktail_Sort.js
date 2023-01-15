var arrayCopy = null;

function InitCocktailSort()
{
  arrayCopy = [...randomLines];
  SetLineOperationInterval(1);
  CocktailSort();
  OnFinishedSortingAlgorithm();
}

function CocktailSort()
{
  let swapped = true;
  let start = 0;
  let end = arrayCopy.length;

  while (swapped == true)
  {
    swapped = false;

    for (let i = start; i < end - 1; i++)
    {
      if (arrayCopy[i].yPercent > arrayCopy[i + 1].yPercent)
      {
        Swap(arrayCopy, i, i + 1);
        swapped = true;
      }
    }

    if (swapped == false)
    {
      break;
    }

    end = end - 1;
    swapped = false;

    for (let i = end - 1; i >= start; i--)
    {
      if (arrayCopy[i].yPercent > arrayCopy[i + 1].yPercent)
      {
        Swap(arrayCopy, i, i + 1);
        swapped = true;
      }
    }

    start = start + 1;
  }
}
