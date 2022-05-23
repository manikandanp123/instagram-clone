const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const posts = require('../model/postModel');

router.use(bodyParser());

router.post("/addposts", async (req, res) => {
    console.log(req.body);

    let day = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();

    let new_date = day + "/" + month + "/" + year;
    console.log(new_date);

    let data = await posts.create({
        name: req.body.name,
        place: req.body.place,
        image: req.body.image,
        date: new_date,
        des: req.body.des,
        user: req.user
    })
    console.log(data);
    res.json({ success: true, message: "Data added successfully", data });
})

router.get("/myposts", async (req, res) => {
    let data = await posts.find({ user: req.user });
    console.log(data);
    res.json(data);
})

router.get("/allposts", async (req, res) => {
    let datas = await posts.find();
    console.log(datas);
    res.json({ data: datas, currUser: req.user });
})

router.delete("/delete/:Id", async (req, res) => {
    let data = await posts.deleteOne({ _id: req.params.Id });
    console.log(data);
    if (data.deletedCount > 0) {
        res.json(data);
    }
})

router.put("/likes", async (req, res) => {
    console.log(req.body);
    let finding = await posts.find({ $and: [{ _id: req.body.Id }, { likes: { $in: [req.user] } }] });
    console.log(finding);
    // res.json(finding);
    if (finding.length > 0) {
        res.json("likes already added my this user")
    } else {
        let data = await posts.updateOne({ _id: req.body.Id }, { $push: { likes: req.user } });
        console.log(data);
        console.log("added");
        if (data.modifiedCount > 0) {
            return res.json("likes added");
        }
    }
})

router.put("/unlikes", async (req, res) => {
    let data = await posts.updateOne({ _id: req.body.Id }, { $pull: { likes: req.user } });
    console.log(data);
    console.log("removed");
    if (data.modifiedCount > 0) {
        return res.json("likes removed");
    }
})

router.post("/comments", async (req, res) => {
    console.log(req.body);
    let data = await posts.updateOne({ _id: req.body.Id }, { $push: { comment: { name: req.body.Name, posts: req.body.post } } });
    console.log(data);

    if(data.modifiedCount>0){
        res.json("Post added successfully");
    }else{
        res.json("Post not added");

    }
})


module.exports = router;
