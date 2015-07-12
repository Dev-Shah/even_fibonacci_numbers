var a=1;
var b=2;
var sum=2;
var c=0;
while(c<4000000){
    c=a+b;
    console.log(c);
	if(c%2===0){
		sum+=c;
	}
    a=b;
    b=c; 
}
console.log(sum);
 
