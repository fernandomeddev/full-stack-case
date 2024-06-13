import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt";

export async function auth(request: Request, response: Response, next: NextFunction ) {
    try {
        const token = request.header('Authorization')?.split(' ')[1];
        if (!token) {
            return response.status(401).json({ message: 'Access Denied' });
        }
        const verified = verifyToken(token);
        if (!verified) {
            return response.status(401).json({ message: 'Access Denied' });
        }
        request.user = verified
        next();
    } catch (error) {
        response.status(500).json({ message: 'auth: internal server error try again later ' }); 
    }
}