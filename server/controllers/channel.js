import mongoose from 'mongoose';
import users from '../models/auth.js'


export const updatechannelData= async(req,res)=>{
    const{id:_id}=req.params;
    const{name,desc}=req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("Channel Unavailable...")
    }
    try{
        const updateData =await users.findbyIdAndUpadate(_id,{
            $set: {
                name: name,
                desc: desc,
            },
        },
            {new: true}
        );
        res.status(200).json(updateData);
    }catch (error){
        res.status(405).json({ message: error.message });

    }
};