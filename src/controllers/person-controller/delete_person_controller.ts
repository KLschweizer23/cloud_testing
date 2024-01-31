import deletePersonModel from '../../models/person-model/delete_person_model';
import { Request, Response } from 'express';

const deletePersonController = async (req: Request, res: Response) => {

    const modelResponse: any = await deletePersonModel(req.body);

    try {
        return res.status(200).send(modelResponse);
    } catch (error: any) {
        console.log('delete person controller error says:', error.message);
    }

}

export default deletePersonController;