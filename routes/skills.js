var express = require('express');
var router = express.Router();
const Skill = require('../models/skills'); // Adjust the path based on your project structure


// GET USERS LISTINGS

router.get('/', async function(req,res) { 

    const skills = await Skill.find()
    res.status(200).json(skills)
    // res.status(200).json([
    //     {skill:"JS", level:"5"},
    //     {skill:"nodeJS", level:"3"},
    //     {skill:"MongoDB", level:"2"},
    // ])
})


// router.post('/', function(req,res){

//     Skill.create(req.body, function(err,skill){
//         if (err) {
//             console.error("Error creating skill:", err);
//             // Send an appropriate error response
//             return res.status(500).json({ error: "Internal Server Error" });
//         }
//         res.status(200).json(skill)
//     })
// })
// router.post()
router.post('/', async function(req, res) {
    try {
        console.log(req.body,"reqraq")
        const skill = await Skill.create(req.body);
        // console.log(skill, "skillskill")
        res.status(200).json(skill);
    } catch (err) {
        console.error("Error creating skill:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;