import getFileSingleModel from "../../models/file-model/get_file_single_model";
import { Request, Response } from 'express';

const getFileSingleController = async (req: Request, res: Response) => {

    const { readableStream, file_name } :any = await getFileSingleModel(req.body);

    try {
        res.setHeader('Content-Type', 'application/octet-stream');
        res.setHeader('Content-Disposition', `attachment; filename="${file_name}"`);
        readableStream.pipe(res);

    } catch (error: any) {
        console.log('get file single controller error says:', error.message);
    }

}

export default getFileSingleController;