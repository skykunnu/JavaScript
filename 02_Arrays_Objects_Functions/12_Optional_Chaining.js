//Optional_Chaining
const user = {
  firstName: "Shikhar",
  // address: { houseNumber: "1234" },
};
// console.log(user.address.houseNumber); // this is giving error, because we have not defined it.

console.log(user?.address?.houseNumber); // Read this statement like this, does user contains address or not. if true then proceed to next question or else return undefined. --> this is giving undefined although we have not defined address.
