var arrayCopy = null;

function InitCocktailSort()
{
  arrayCopy = [...randomLines];
  SetLineOperationInterval(1);
  CocktailSort();
  console.log(arrayCopy);
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
        Swap(i, i + 1);
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
        Swap(i, i + 1);
        swapped = true;
      }
    }

    start = start + 1;
  }
}

function Swap(i, j)
{
  AddLineSwapData(i, j);
  var temp = arrayCopy[i];
  arrayCopy[i] = arrayCopy[j];
  arrayCopy[j] = temp;
}
