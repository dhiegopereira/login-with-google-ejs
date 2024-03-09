import { Request, Response } from 'express';


export const profile = (req: Request, res: Response) => {
   res.render('profile/index', { code: req.query.code });
};