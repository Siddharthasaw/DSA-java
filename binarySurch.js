

function binerySurch(arr,key)
{
  start= 0;
  
  end = arr.length-1;

  while(start<=end)
  {
    let mid = Math.floor((start+end)/2)
    if(arr[mid]==key)
    {
      return mid;
    }
    else if(arr[mid]<key)
    {
      start = mid+1;
    }
    else
    {
      end = mid-1;
    }
  }
  return false;
}
console.log(binerySurch([1 , 3, 4,5,6,7,8],8))