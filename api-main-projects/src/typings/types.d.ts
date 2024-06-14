import { Request } from 'express';

interface User {
  id: string;
}

interface CustomRequest extends Request {
  user: User;
}
