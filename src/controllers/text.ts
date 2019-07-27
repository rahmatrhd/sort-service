import { Request, Response } from 'express';

export const textSort = (req: Request, res: Response): void => {
  const order: string = req.query.order || 'asc';
  const text: string = req.body;

  let strings = text.split('\n').sort();
  if (order.toLowerCase() === 'desc') {
    strings = strings.reverse();
  }

  res.send(strings.join('\n'));
};
