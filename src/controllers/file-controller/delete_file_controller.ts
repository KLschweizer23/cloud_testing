import deleteFileModel from "../../models/file-model/delete_file_model";
import { Request, Response } from 'express';

const deleteFileController = async (req: Request, res: Response) => {

    const modelResponse: any = await deleteFileModel(req.body);

    try {
        res.status(200).send(modelResponse);
    } catch (error: any) {
        console.log('delete file controller error says:', error.message);
    }

}

export default deleteFileController;