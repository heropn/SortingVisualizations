var arrayCopy = null;

function InitHeapSort()
{
  arrayCopy = [...randomLines];
  SetLineOperationInterval(30);
  HeapSort();
  OnFinishedSortingAlgorithm();
}

function HeapSort()
{
  for (var i = Math.floor(arrayCopy.length / 2) - 1; i >= 0; i--)
  {
    Heapify(arrayCopy.length, i);
  }

  for (var i = arrayCopy.length - 1; i > 0; i--)
  {
    Swap(0, i);
    Heapify(i, 0);
  }
}

function Heapify(size, root)
{
  var largest = root;
  var left = 2 * root + 1;
  var right = 2 * root + 2;

  if (left < size && arrayCopy[left].yPercent > arrayCopy[largest].yPercent)
  {
    largest = left;
  }

  if (right < size && arrayCopy[right].yPercent > arrayCopy[largest].yPercent)
  {
    largest = right;
  }

  if (largest != root)
  {
    Swap(largest, root);
    Heapify(size, largest);
  }
}

function Swap(i, j)
{
  AddLineSwapData(i, j);
  var temp = arrayCopy[i];
  arrayCopy[i] = arrayCopy[j];
  arrayCopy[j] = temp;
}
