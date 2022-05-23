const mongoose=require("mongoose");
const items=require("./model/itemModel");

mongoose.connect("mongodb+srv://manidb:manidb@cluster0.f0sct.mongodb.net/ECommerce?retryWrites=true&w=majority");

let Data=[{
    name:"fallon1",
    image:"https://images.unsplash.com/photo-1508296695146-257a814070b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VuJTIwZ2xhc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    des:"The range of lifestyle products will be launched under a new sub-brand Qubo Go. The launch of the sub-brand comes at a time when the need for smart lifestyle devices is emerging, particularly to bring convenience while matching the fast-paced on-the-go lifestyle.",
    quantity:0,
    price:1200
},{
    name:"fallon2",
    image:"https://images.unsplash.com/photo-1515613813261-5cd015bcd184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuJTIwZ2xhc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    des:"The range of lifestyle products will be launched under a new sub-brand Qubo Go. The launch of the sub-brand comes at a time when the need for smart lifestyle devices is emerging, particularly to bring convenience while matching the fast-paced on-the-go lifestyle.",
    quantity:0,
    price:900
},{
    name:"fallon3",
    image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VuZ2xhc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    des:"The range of lifestyle products will be launched under a new sub-brand Qubo Go. The launch of the sub-brand comes at a time when the need for smart lifestyle devices is emerging, particularly to bring convenience while matching the fast-paced on-the-go lifestyle.",
    quantity:0,
    price:200
},{
    name:"cat1",
    image:"https://images.unsplash.com/photo-1502767089025-6572583495f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    des:"The range of lifestyle products will be launched under a new sub-brand Qubo Go. The launch of the sub-brand comes at a time when the need for smart lifestyle devices is emerging, particularly to bring convenience while matching the fast-paced on-the-go lifestyle.",
    quantity:0,
    price:600
},{
    name:"cat2",
    image:"https://images.unsplash.com/photo-1625591340248-6d289000f96a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VuZ2xhc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    des:"The range of lifestyle products will be launched under a new sub-brand Qubo Go. The launch of the sub-brand comes at a time when the need for smart lifestyle devices is emerging, particularly to bring convenience while matching the fast-paced on-the-go lifestyle.",
    quantity:0,
    price:1400
},{
    name:"cat3",
    image:"https://images.unsplash.com/photo-1625591339971-4c9a87a66871?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHN1bmdsYXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    des:"The range of lifestyle products will be launched under a new sub-brand Qubo Go. The launch of the sub-brand comes at a time when the need for smart lifestyle devices is emerging, particularly to bring convenience while matching the fast-paced on-the-go lifestyle.",
    quantity:0,
    price:1800
},{
    name:"transparent1",
    image:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3VuZ2xhc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    des:"The range of lifestyle products will be launched under a new sub-brand Qubo Go. The launch of the sub-brand comes at a time when the need for smart lifestyle devices is emerging, particularly to bring convenience while matching the fast-paced on-the-go lifestyle.",
    quantity:0,
    price:1600
},{
    name:"transparent2",
    image:"https://images.unsplash.com/photo-1567473810954-507d59716c25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3VuZ2xhc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    des:"The range of lifestyle products will be launched under a new sub-brand Qubo Go. The launch of the sub-brand comes at a time when the need for smart lifestyle devices is emerging, particularly to bring convenience while matching the fast-paced on-the-go lifestyle.",
    quantity:0,
    price:1900
},{
    name:"transparent3",
    image:"https://images.unsplash.com/photo-1625591342274-013866180475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3VuZ2xhc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    des:"The range of lifestyle products will be launched under a new sub-brand Qubo Go. The launch of the sub-brand comes at a time when the need for smart lifestyle devices is emerging, particularly to bring convenience while matching the fast-paced on-the-go lifestyle.",
    quantity:0,
    price:1850
}]

async function sampleData(){
    await items.deleteMany();
    await items.insertMany(Data);
    console.log("done");
}

sampleData();