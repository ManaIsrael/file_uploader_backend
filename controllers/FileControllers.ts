import { Request, Response } from 'express';
import File from '../models/File.ts';

export const getFiles = async (req: Request, res: Response) => {
  try {
    const files = await File.findAll();
    res.json(files);
  } catch (error) {
    console.error('Error fetching files:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const uploadFile = async (req: Request, res: Response) => {
  try {
    const { description } = req.body;
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    const fileUrl = req.file.path;

    const file = await File.create({ description, fileUrl });
    res.status(201).json(file);
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteFile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await File.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    console.error('Error deleting file:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateFile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const file = await File.findByPk(id);

    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    file.description = description;
    await file.save();

    res.json(file);
  } catch (error) {
    console.error('Error updating file:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};