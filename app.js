const express=require('express');
const app= express();
const connectDB=require('./config/connectionDB');
const fishRoute=require('./routes/fishRouter');
const regionRoute=require('./routes/regionRouter');
app.use(express.json());


app.use('/api/fish',fishRoute);
app.use('/api/region',regionRoute);

app.listen(3000,()=>{
    console.log('the app is runing on prot 3000...');
});