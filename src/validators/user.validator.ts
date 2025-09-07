import { z } from "zod";

export const userSchema=z.object({
    name:z.string().max(16),
    email:z.string(),
    password:z.string().max(16),
    isAdmin:z.boolean()

})