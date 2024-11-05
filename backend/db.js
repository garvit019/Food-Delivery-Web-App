const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gangwal1:nq3vW8aJlkwlk1Zd@cluster0.gymgnmo.mongodb.net/gofoodmern?retryWrites=true&w=majority';

// const mongodb = async () => {
//   try {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log('Connected to MongoDB');

//     // Access the collection
//     const fetched_data = await mongoose.connection.db.collection("fooddata");
 
//     // Fetch the data
//     fetched_data.find({}).toArray(function(err, data) {
//       if (err) {
//         console.log("--- Error fetching data:", err);
//       } else {
//         console.log("Fetched Data:", data);
//       }
//     });
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// };
const mongodb = async () => {
    try {
      await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected to MongoDB');
  
      // Access the collection
      const fetched_data = mongoose.connection.db.collection("fooddata");
      
      // Fetch the data
      const data = await fetched_data.find({}).toArray();
      global.fooddata = data;
      const foodcategory = mongoose.connection.db.collection("foodcategory");
      const catdata = await foodcategory.find({}).toArray();
      global.foodcategory = catdata;
     
    } catch (error) {
      console.error('Error connecting to MongoDB or fetching data:', error);
    }
  };
  

module.exports = mongodb;
