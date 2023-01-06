const array = [11,22,33,56,76,89,09]

function linearSurch(arr)
{
    let key=9;

    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]==key)
        {
            console.log(arr[i]+","+i)
        }
    }
}
linearSurch(array)