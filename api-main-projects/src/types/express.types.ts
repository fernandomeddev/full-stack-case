declare namespace Express {
    interface Request {
      user: {
        [key: string]: any;
      }
    }
  }