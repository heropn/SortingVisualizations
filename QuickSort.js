var intervalID = null;

var array = [5,3,7,6,2,9,31,61,7,2,76,1476,316,1,0,1,6,1,76,1,76,1,54,31,75,1,671];

function InitQuickSort(window)
{
  console.log(array);
  QuickSort(0, array.length - 1);
  console.log(array);
}

function QuickSort(left, right)
{
    var index;

    if (array.length > 1)
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
  var pivot = array[Math.floor((right + left) / 2)];

  i = left;
  j = right;

  while (i <= j)
  {
    while (array[i] < pivot)
    {
        i++;
    }

    while (array[j] > pivot)
    {
        j--;
    }

    if (i <= j)
    {
        swap(i, j); //swap two elements
        i++;
        j--;
    }
  }

  return i;
}

function swap(leftIndex, rightIndex)
{
    var temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
}
