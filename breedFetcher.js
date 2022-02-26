const request = require('request');

// const breedFetcher = function() {
//   const breed = process.argv.slice(2).join();
//   request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
//     if (error) {
//       console.log(error);
//     } else {
//       let data = JSON.parse(body);
//       if (data.length === 0) {
//         console.log(`${breed} not found.`);
//       } else {
//         console.log(data[0].description);
//       }
//     }
//   });
// };

const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {  
    if (error) {
      callback(error, null)
    } else {
        if (body === '[]') {
          callback(`${breedName} not found`, null)
        } else {
          const data = JSON.parse(body)
          callback(null, data[0].description)
        }   
    }
  });
};


module.exports = { fetchBreedDescription }