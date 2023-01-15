var arrayCopy = null;

function InitQuickSort()
{
  arrayCopy = [...randomLines];
  SetLineOperationInterval(50);
  QuickSort(0, arrayCopy.length - 1);
  OnFinishedSortingAlgorithm();
}

function QuickSort(left, right)
{
    var index;

    if (arrayCopy.length > 1)
    {
        index = Partition(left, right);

        if (left < index - 1)
        {
            QuickSort(left, index - 1);
        }
        if (index < right)
        {
            QuickSort(index, right);
        }
    }
}

function Partition(left, right)
{
  var pivot = arrayCopy[Math.floor((right + left) / 2)];

  var l = left;
  var r = right;

  while (l <= r)
  {
    while (arrayCopy[l].yPercent < pivot.yPercent)
    {
        l++;
    }

    while (arrayCopy[r].yPercent > pivot.yPercent)
    {
        r--;
    }

    if (l <= r)
    {
        Swap(arrayCopy, l, r);
        l++;
        r--;
    }
  }

  return l;
}
