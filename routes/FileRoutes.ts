import express from 'express';
import { getFiles, uploadFile, deleteFile, updateFile } from '../controllers/FileControllers.ts';
import uploadMiddleware from '../middleware/UploadMiddleware.ts';

const router = express.Router();

router.get('/files', getFiles);
router.post('/files', uploadMiddleware.single('file'), uploadFile);
router.delete('/files/:id', deleteFile);
router.put('/files/:id', updateFile);

export default router;
