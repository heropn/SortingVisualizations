var arrayCopy = null;

function InitMergeSort()
{
  arrayCopy = [...randomLines];
  SetLineOperationInterval(30);
  MergeSort(0, arrayCopy.length - 1);
  OnFinishedSortingAlgorithm();
}

function MergeSort(left, right)
{
  if(left >= right)
  {
    return;
  }

  var mid = Math.floor((right + left) / 2);

  MergeSort(left, mid);
  MergeSort(mid + 1, right);

  Merge(left, mid, right);
}


function Merge(left, mid, right)
{
  var sizeOne = mid - left + 1;
  var sizeTwo = right - mid;

  var L = new Array(sizeOne);
  var R = new Array(sizeTwo);

  for (let i = 0; i < sizeOne; i++)
  {
    L[i] = arrayCopy[left + i];
  }

  for (let j = 0; j < sizeTwo; j++)
  {
    R[j] = arrayCopy[mid + 1 + j];
  }

  var firstIndex = 0;
  var secondIndex = 0;
  var mergedIndex = left;

  while (firstIndex < sizeOne && secondIndex < sizeTwo)
  {
    if (L[firstIndex].yPercent <= R[secondIndex].yPercent)
    {
      AddLineValueChangeData(mergedIndex, L[firstIndex].yPercent);
      arrayCopy[mergedIndex] = L[firstIndex];
      firstIndex++;
    }
    else
    {
      AddLineValueChangeData(mergedIndex, R[secondIndex].yPercent);
      arrayCopy[mergedIndex] = R[secondIndex];
      secondIndex++;
    }

    mergedIndex++;
  }

  while (firstIndex < sizeOne)
  {
    AddLineValueChangeData(mergedIndex, L[firstIndex].yPercent);
    arrayCopy[mergedIndex] = L[firstIndex];
    firstIndex++;
    mergedIndex++;
  }

  while (secondIndex < sizeTwo)
  {
    AddLineValueChangeData(mergedIndex, R[secondIndex].yPercent);
    arrayCopy[mergedIndex] = R[secondIndex];
    secondIndex++;
    mergedIndex++;
  }
}
