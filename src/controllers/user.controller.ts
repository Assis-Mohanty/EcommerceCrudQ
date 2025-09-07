import { NextFunction, Request, Response } from "express";
import { createUserService, deleteUserSevice, getAllUsersService, getUserService, updateUserService } from "../services/user.service";
import { authRequired } from "../middlewares/auth"; 

export async function createUserHandler(req:Request,res:Response,next:NextFunction){

    const userResponse=await createUserService({ 
    name: req.body.name,
    email: req.body.email,
    password:req.body.password,
    isAdmin: req.body.isAdmin
    });
    res.status(201).json({
    success:true,
    data:userResponse,
    message:'User Created Succesfully'
    })
    next(); 
}


export async function getUserHandler(req:Request,res:Response,next:NextFunction) {
    const response=await getUserService(Number(req.params.id));
    res.status(201).json({
    success:true,
    data:response,
    message:'User fetched Succesfully'
    })
    next();
}

export async function getAllUsersHandler(req:Request,res:Response,next:NextFunction) {
    const response=await getAllUsersService();
    res.status(201).json({
    success:true,
    data:response,
    message:'Users fetched Succesfully'
    })
    next();

}

export async function deleteUserHandler(req:Request,res:Response,next:NextFunction){
    const response =await deleteUserSevice(Number(req.params.id))
    res.status(201).json({
    success:true,
    data:response,
    message:'User Created Succesfully'
    })
    next();


}

export async function updateUserHandler(req:Request,res:Response,next:NextFunction) {
    const response = await updateUserService(Number(req.params.id),req.body)
    res.status(201).json({
    success:true,
    data:response,
    message:'User Updated Succesfully'
    })
    next();
}