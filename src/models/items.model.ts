import {Model,InferAttributes,InferCreationAttributes,CreationOptional, DataTypes} from 'sequelize'
import sequelize from './sequelize';

class Item extends Model<InferAttributes<Item>,InferCreationAttributes<Item>>{
    declare id:CreationOptional<number>;
    declare title:string;
    declare description:string;
    declare price:number;
    declare category:string;
    declare image:string;
    declare createdAt:string;
    declare updatedAt:string;
}
Item.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:true
    },
    price:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    category:{
        type:DataTypes.STRING,
        allowNull:false
    },
    image:{
        type:DataTypes.STRING,
        allowNull:true
    },
    createdAt:DataTypes.DATE,
    updatedAt:DataTypes.DATE
},{
    sequelize:sequelize,
    tableName:'items',
    indexes:[
        {fields:['price']},
        {fields:['category']}
    ],
    underscored:true,
    paranoid:true,
})

export default Item;