const Mongoose=require('mongoose');
require('dotenv').config();
const URL=process.env.URL
Mongoose.connect(URL,
    {
    dbName: 'fish_data'
    }
).then(()=>{
    console.log('CONNECTED TO DATABASE..');
}).catch((err)=>{
        console.log(err);
    })
  module.exports=Mongoose;
