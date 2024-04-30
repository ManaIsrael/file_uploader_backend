import { Request, Response } from 'express';
import File from '../models/File.ts';
import fs from 'fs';

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
    // Check if req.files exists before accessing its properties
    if (!req.files || Object.values(req.files).length === 0) {
      return res.status(400).json({ message: 'No files uploaded' });
    }

    const fileUrls = Object.values(req.files).map((file: Express.Multer.File) => file.path);

    // Concatenate file paths into a single string separated by commas
    const fileUrlsString = fileUrls.join(',');

    // Create a new File record with the concatenated file URLs
    const createdFile = await File.create({ description, fileUrl: fileUrlsString });

    res.status(201).json(createdFile);
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

export const viewFile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const file = await File.findByPk(id);

    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }
    res.json(file);
    const fileStream = fs.createReadStream(file.fileUrl);
    fileStream.pipe(res);
  } catch (error) {
    console.error('Error viewing file:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};