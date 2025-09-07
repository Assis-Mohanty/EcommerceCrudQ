import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export function authRequired(req: Request, res: Response, next: NextFunction): void {
    const auth = req.headers.authorization || '';
    const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;

    if (!token) {
        res.status(401).json({ error: 'No token' });
        return; // ✅ return nothing
    }

    if (!process.env.JWT_SECRET) {
        res.status(500).json({ error: 'JWT secret not configured' });
        return;
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // @ts-ignore
        req.user = decoded;
        next(); // ✅ pass control
    } catch (e) {
        res.status(401).json({ error: 'Invalid token' });
        return;
    }
}
