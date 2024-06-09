import { Request, Response } from 'express';
import { MovieModel } from '../models/movies';

export const getMovies = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('route called')
    const movies = await MovieModel.find().sort({id:1});
    console.log(movies)
    res.json(movies);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};  

export const searchMovies = async (req: Request, res: Response): Promise<void> => {
  try {
    const title = req.query.title as string;
    const regex = new RegExp(`^${title}`, 'i');
    const movies = await MovieModel.find({ title: regex });
    res.json(movies);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  } 
};

