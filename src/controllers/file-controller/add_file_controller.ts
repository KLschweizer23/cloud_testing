import addFileModel from "../../models/file-model/add_file_model";
import { Request, Response } from 'express';

const addFileController = async (req: Request, res: Response) => {

    const modelResponse: any = await addFileModel(req.file, req.body);

    try {
        res.status(200).send(modelResponse);
    } catch (error: any) {
        console.log('add file controller error says:', error.message);
    }

}

export default addFileController;