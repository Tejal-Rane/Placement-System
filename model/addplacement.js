const mongoose=require('mongoose')

const placementSchema=new mongoose.Schema(
    {
        companyName:String,
        driveInfo:{
            type:String,
            required:true
        },
        driveDate:String,
        pdf:String
    }
 )
 module.exports=mongoose.model('Addplacement',placementSchema)