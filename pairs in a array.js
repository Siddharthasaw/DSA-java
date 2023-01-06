const array = [1,2,3,4,5,6,7,8,9]

function pairesAnarray(arr)
{
    for(let i=0; i<arr.length; i++)
    {
        for(let j=i+1; j<arr.length; j++)
        {
            console.log("("+arr[i]+","+arr[j]+")")
        }
    }
}
console.log(pairesAnarray(array))