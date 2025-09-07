import logger from "../config/logger.config";
import { CreateUserRepoDTO, UpdatedUserDTO, UserDTO } from "../dto/user.dto";
import User from "../models/user.model";
import { BadRequestError, NotFoundError } from "../utils/errors/app.error";


export async function createUser(userData:CreateUserRepoDTO){
    const user =await User.create(userData)
    if(!user){
        new BadRequestError('Connot create user');
    }
    logger.info(`Created User with :${user.id}`)
    return user;
}

export async function getUser(id:number) {
    const user=await User.findByPk(id);
    if(!user) {
        new NotFoundError('User Does not exist')
    }
    logger.info(`User with id :${id} fetched`)
    return user;
}

export async function getAllUsers() {
    const users=await User.findAll();
    if(!users){
        new NotFoundError('Cannot fetch users')
    }
    logger.info(`Number of users fetched : ${users.length}`)
    return users
}

export async function deleteUser(id:number) {
    const user= await User.destroy({
        where:{
            id:id
        }
    })
    if(!user ){
        new NotFoundError('Could not found user')
    }
    logger.info('User deleted succesfully')
    return;
}

export async function updateUser(id:number ,data:UpdatedUserDTO) {
    const user=await User.update(data,
        {
            where:{
                id:id
            },
            returning:true,
        }
    )
    if(!user ){
        new NotFoundError('Could not found user')
    }
    logger.info('User updated succesfully')
    return user;
}


