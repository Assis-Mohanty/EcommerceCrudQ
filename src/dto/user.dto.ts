export type UserDTO ={
    name:string
    email:string,
    password:string,
    // passwordHash:string,
    isAdmin:boolean
}

export type CreateUserRepoDTO = {
  name: string;
  email: string;
  passwordHash: string; 
  isAdmin: boolean;
};

export type UpdateUserDTO ={
    name:string
    email:string,
    password:string,
    // passwordHash:string,
    isAdmin:boolean
}


export type UpdatedUserDTO = {
  name: string;
  email: string;
  passwordHash: string; 
  isAdmin: boolean;
};