import express from 'express';
import { getFiles, uploadFile, deleteFile, updateFile, viewFile } from '../controllers/FileControllers.ts';
import uploadMiddleware from '../middleware/UploadMiddleware.ts';

const router = express.Router();

router.get('/files', getFiles);
router.post('/files', uploadMiddleware.array('file',10), uploadFile);
router.delete('/files/:id', deleteFile);
router.put('/files/:id', updateFile);

router.get('/files/:id', viewFile);

export default router;
