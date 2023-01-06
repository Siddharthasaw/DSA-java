// find the largest value of array

const array = [12,34,5,6,7,8,9]


function largestNumber(arr)
{
  let largest = 0;
  for(let i=0; i<arr.length; i++)
  {
    if(largest<arr[i])
    {
        largest = arr[i]
    }
  }
  return largest
}
console.log(largestNumber(array))