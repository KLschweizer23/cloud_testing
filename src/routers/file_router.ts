import express from 'express';
import multer from 'multer';

const fileRouters = express.Router();
const upload = multer({ dest: 'uploads/' });

import addFileController from '../controllers/file-controller/add_file_controller';
import getFileListsController from '../controllers/file-controller/get_file_lists_controller';
import getFileSingleController from '../controllers/file-controller/get_file_single_controller';
import deleteFileController from '../controllers/file-controller/delete_file_controller';

fileRouters.post('/add-file', upload.single('file'), addFileController);
fileRouters.put('/get-file-lists', getFileListsController);
fileRouters.put('/get-file-single', getFileSingleController);
fileRouters.delete('/delete-file', deleteFileController);

//localhost:5000/files/add-file {person_id, file}

export default fileRouters;