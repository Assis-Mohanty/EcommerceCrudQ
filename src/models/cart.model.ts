// Cart: {
// _id: ObjectId,
// user: ObjectId (unique, indexed),
// items: [ { item: ObjectId ref Item, qty: Number } ],
// updatedAt
// }

import {Model,InferAttributes,InferCreationAttributes,CreationOptional, DataTypes} from 'sequelize'
import sequelize from './sequelize';

class Cart extends Model<InferAttributes<Cart>,InferCreationAttributes<Cart>>{
    declare id: CreationOptional<number>
    declare user: number
    declare items: number;
    declare updatedAt:CreationOptional<Date>;
}

Cart.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    user:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    items:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    updatedAt:{
        type:DataTypes.DATE,
        allowNull:false,
    }
},{
    sequelize:sequelize,
    tableName:'carts',
    indexes:[{fields:['user']}],
    underscored:true
})

export default Cart;
