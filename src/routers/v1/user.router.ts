import express from 'express';
import {  validateRequestBody } from '../../validators';
import { userSchema } from '../../validators/user.validator';
import { createUserHandler, deleteUserHandler, getAllUsersHandler, getUserHandler, updateUserHandler } from '../../controllers/user.controller';
import { authRequired } from '../../middlewares/auth';

const userRouter = express.Router();
userRouter.use(authRequired); 
userRouter.post('/auth/signup', validateRequestBody(userSchema), createUserHandler); 
userRouter.get('/:id', validateRequestBody(userSchema), getUserHandler); 
userRouter.get('/', validateRequestBody(userSchema), getAllUsersHandler);
userRouter.delete('/:id', validateRequestBody(userSchema), deleteUserHandler);
userRouter.patch('/:id',validateRequestBody(userSchema),updateUserHandler)



userRouter.get('/health', (req, res) => {
    res.status(200).send('OK');
});

export default userRouter;