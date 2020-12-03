// vamos fazer um hack nas tipagens do express
declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}
