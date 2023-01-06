const arr = [1,2,3,4,5,6,7]
function printSubArray(arr)
{
  for(let i=0; i<arr.length; i++)
  {
    for(let j=i+1; j<arr.length; j++)
    {
      for(let k=i; k<=j; k++)
      {
        console.log(arr[k]+" ")
      }
    }
  }

}
console.log(printSubArray(arr))