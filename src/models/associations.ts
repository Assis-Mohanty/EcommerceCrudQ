import User from "./user.model";
import Cart from "./cart.model";
import Item from "./items.model";
import CartItem from "./CartItem.model";

User.hasOne(Cart,{foreignKey:'id'})
Cart.belongsTo(User,{foreignKey:'user'})

Cart.belongsToMany(Item,{through:CartItem,foreignKey:'carts',otherKey:'items'});
Item.belongsToMany(Cart,{through:CartItem,foreignKey:'items',otherKey:'carts'});


export {User,Cart,Item,CartItem}
