//1
let arr = [1, 2, 3, 4, 5];
console.log("1:",arr.join()); 

//2
console.log("2");
for (let element of arr) {
    console.log(element); 
}

//3
console.log("3:");
for (let index in arr) {
    console.log(arr[index]); 
}

//4
console.log("4:",Array.isArray(arr)); 

//5
let arrayLike = {0: "a", 1: "b", 2: "c", length: 3};
let newArray = Array.from(arrayLike);
console.log("5:",newArray); 

//6
const arr6 = [1, 2, 3, 4, 5];
const result6 = [];
arr6.forEach(element => {
  result6.push(element);
  if (element === 5) {
    result6.push(6);
  }
});
console.log("6:", result6);

//6
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = arr1.concat(arr2);
console.log("6:",combined); 

//7
let arr7 = [1, 2, 3, 4, 5];
let output7 = arr7.map(num => arr7.indexOf(num) + 1); 
console.log("7:", output7.join(',')); 

//8
let arr8 = [1, 2, 3, 4, 5, 6];
let firstPart = arr8.slice(0, 2);  
let secondPart = arr8.slice(4);   
let result8 = firstPart.concat(secondPart);
console.log("8:", result8.join(','));

//9
let arr9 = [1, 2, 3, 4, 5];
arr9.splice(2,1,2)
console.log("9:",arr9[2]);

//10
let input = "1,2,3,4,5";
let arr10 = input.split(",").map(Number);
console.log("10:",arr10);



//11
let str11 = "1,2,3,4,5";
let arr11 = str11.split(","); 
let lastElement = arr11[arr11.length - 1]; 
console.log("11:",lastElement); 

//12
let arr12=Array.of(1,2,3);
console.log("12:",arr);

//13
arr.fill(0,0,3);
console.log("13:",arr);

//14
let arr14= [1, 2, 3, 4, 5];
arr14.copyWithin(1, 0, 1); 
arr14.copyWithin(2, 0, 1); 
console.log("14:",arr14);

//15
let arr15 = ["apple", "banana", "cherry"];
arr.sort();
console.log("15:",arr15);

//16
arr15.reverse();
console.log("16:",arr15);

//17
let arr17 = [1, 2, 3, 4, 5];
console.log("17:", arr17.map(x => x * 2));

//18
let arr18= [1, 2, 3, 4, 5];
let evens = arr18.filter(x => x % 2 === 0);
console.log("18:",evens); 

//19
let arr19 = [1, 2, 3, 4, 5];
let sum = arr19.reduce((acc, curr) => acc + curr, 0);
console.log("19:",sum); 