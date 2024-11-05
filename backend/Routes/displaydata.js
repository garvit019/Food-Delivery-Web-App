const express = require('express');
const router = express.Router();

router.post('/fooddata',(req,res)=>{
    try {
        res.send([global.fooddata, global.foodcategory]);
    } catch (error) {
        console.error(error.message);
        res.send("server error");
    }
})
// router.get('/getFoodItems', (req, res) => {
//     try {
//         const foodItems = await FoodItemModel.find({});
//         res.json(foodItems);
//     } catch (error) {
//         res.status(500).send('Server Error');
//     }
// });

module.exports = router;