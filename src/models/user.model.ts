import {Model, InferAttributes,InferCreationAttributes,CreationOptional} from "sequelize"
import sequelize from "./sequelize";

class User extends Model<InferAttributes<User>,InferCreationAttributes<User>>{
    declare id: CreationOptional<number>;
    declare name?:string;
    declare email?:string;
    declare passwordHash:string;
    declare isAdmin:Boolean;
    declare createdAt:CreationOptional<Date>;
    declare updatedAt:CreationOptional<Date>;
}

User.init({
    id:{
        type:"INTEGER",
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:"STRING",
        allowNull:false
    },
    email:{
        type:"STRING",
        allowNull:false
    },
    isAdmin:{
        type:"BOOLEAN",
        allowNull:false,
        defaultValue:false
    },
    passwordHash:{
        type:"STRING",
        allowNull:false
    },
    createdAt:{
        type:"DATE",
        allowNull:false,
    },
    updatedAt:{
        type:"DATE",
        allowNull:false,
    },
    
},{
    sequelize:sequelize,
    tableName:'users',
    underscored:true,
    paranoid:true,
})

export default User;