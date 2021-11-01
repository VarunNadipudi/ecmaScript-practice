function displayValues(val1, val2){
    console.log("Value-1 : "+val1);
    console.log("Value-2 : "+val2);
}

function spreadOpearator(){
    var arr1=[1,2,3,4,5];
    var arr2=["one","two","three","four","five"];

    var combinedArray = [...arr1, ...arr2];
    console.log(combinedArray);
}

function restOperator(){
    function rest(x, ...y){
        console.log("Given data is "+x+" y : "+y);
    }
    rest(2,3,4,5,6,7,8,9);
}

function destructuringArray(){
    var arr1=[1,2,3,4,5];
    const [one,two,three,four,five]= arr1;
    console.log("one : "+one+", two : "+two+", three : "+three+", four : "+four+", five : "+five);
}

function destructuringArray2(){
    var arr1=[1,2,3,4,5];
    const [one,two,three,four,five]= arr1;
    console.log(`usingTemplate Literals --> one:${one} two:${two} three:${three} four:${four} five:${five}`);
}

var arrowfunction1 = (n) => {
    console.log("Entered n value is :"+n);
}

var arrowfunction2 = () =>{
    console.log("Example of arrow function without arguments");
}
var arrowfunction3 = (num) =>{
    return Math.pow(num,2);
}
var power = (num) => {
    console.log("Power of "+num+" is : "+arrowfunction3(num));
}


var arrowfunction4 = (basic,hra,da,pf,tax=35) =>{
    var grossSalary = basic+hra+da;
    //console.log(grossSalary);
    var deductions = (pf + (grossSalary*(tax/100)));
    return grossSalary-deductions;
}

var computeSalary = (basic,hra,da,pf) =>{
    console.log("Total salary is : "+ arrowfunction4(parseInt(basic),parseInt(hra),parseInt(da),parseInt(pf)));
    //below is sending the value to tax..so tax takes 32 instead of 35
    console.log("Total salary is : "+ arrowfunction4(parseInt(basic),parseInt(hra),parseInt(da),parseInt(pf),32));
}

