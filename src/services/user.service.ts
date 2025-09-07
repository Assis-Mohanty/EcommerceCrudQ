import { UpdateUserDTO, UserDTO } from "../dto/user.dto";
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../repository/user.repository";
import bcrypt from 'bcryptjs'
export async function createUserService(userData:UserDTO) {
    const passwordHash = await bcrypt.hash(userData.password, 10);

    return await createUser({ 
    name: userData.name,
    email: userData.email,
    passwordHash,
    isAdmin: userData.isAdmin
});
    
}

export async function getUserService(id:number) {
    const user=await getUser(id);
    return user;
}

export async function getAllUsersService(){
    const users =await getAllUsers();
    return users;
}

export async function deleteUserSevice(id:number){
    return await deleteUser(id);
}

export async function updateUserService(id:number,userData:UpdateUserDTO) {
    const passwordHash= await bcrypt.hash(userData.password,10);
    return await updateUser(id,{ 
    name: userData.name,
    email: userData.email,
    passwordHash,
    isAdmin: userData.isAdmin
});
}


