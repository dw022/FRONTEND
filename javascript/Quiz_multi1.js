/* 1/1, 1/2, 1/3 ... 1/10 까지의 합을 구해보세요. */

var sum=0;
var r=1;
while (sum<=1)
{
    for(var n=1; n<=10; n++) {
        r+=r/n;
    }
    sum=r;
}
console.log(sum);