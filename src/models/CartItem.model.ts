
import {Model,InferAttributes,InferCreationAttributes,CreationOptional, DataTypes} from 'sequelize'
import sequelize from './sequelize';

class CartItem extends Model<InferAttributes<CartItem>,InferCreationAttributes<CartItem>>{
    declare id: CreationOptional<number>
    declare cart: number
    declare items: number
    declare qty:number;
}

CartItem.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    cart:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'carts',
            key:'id'
        },
        onDelete:'CASCADE'
    },
    items:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'items',
            key:'id',
        },
        onDelete:'CASCADE'
    },
    qty:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:1
    }
    
},{
    sequelize:sequelize,
    tableName:'cartitems',
    timestamps:false,
});

export default CartItem;
