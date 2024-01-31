import getFileListsModel from "../../models/file-model/get_file_lists_model";
import { Request, Response } from 'express';

const getFileListsController = async (req: Request, res: Response) => {

    const modelResponse: any = await getFileListsModel(req.body);

    try {
        res.status(200).send(modelResponse);
    } catch (error: any) {
        console.log('get file lists controller error says:', error.message);
    }

}

export default getFileListsController;