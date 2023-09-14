 const marvel_heroes=["thor","Ironman","Spiderman"]
 const dc=["Superman","flash","batman"]
 marvel_heroes.push(dc)
//  console.log(marvel_heroes);
//  console.log(marvel_heroes[3][1]);

// concat function add two arrays and return them into a new array. 
// const allHeroes=marvel_heroes.concat(dc)
// console.log(allHeroes);

// spread operator(...)- another way to add two different arrays into one. 
const all_new_heroes=[...marvel_heroes,...dc] 
// console.log(all_new_heroes);

// flat( depth- means upto how many lines you want your array to be printed.) function combines all the subarray into one and return it to a new array. 
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(1)
console.log(real_another_array);

