const express = require('express')
const router = express.Router()
const {Users} = require('../models')
const bcrypt = require('bcrypt')

// router.get('/:postId' , async(req ,res)=>{
//     const postId = req.params.postId;
//     const comments = await Comments.findAll({
//         where : {
//             postId: postId
//         }
//     })
//     res.json(comments)
// })
router.post('/' ,async (req , res)=>{
   const {userName , password} = req.body
    bcrypt.hash(password, 10).then((hash)=>{
       Users.create({
        userName : userName, 
        password : hash
       })
       res.json("SUCCESS")
    })
})
module.exports = router;