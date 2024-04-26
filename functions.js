function average(a,b,c)
{
    let avg=(a+b+c)/3;
    console.log("the average of three numbers is"+avg);
}

average(1,2,3);

function multiplication(n)
{
    let m;
    for(let i=1;i<10;i++)
    {
        m=n*i;
        console.log(` ${n}  * ${i} =${m}`);
    }
}

multiplication(5);

function sumof1ton(n)
{
      let sum=0;
    for(let i=1;i<=n;i++)
    {
       sum=sum+i;
    }
    return sum; 
}

 let a =sumof1ton(100);
 console.log("the sum of n numbers given is"+a);

let sum=54;

function calsum(a,b)
{  
    sum=sum+10;
    console.log(sum);
}

calsum(1,2);
console.log(sum);