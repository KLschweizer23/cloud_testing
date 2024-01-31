import getPersonModel from '../../models/person-model/get_person_model';
import { Request, Response } from 'express';

const getPersonController = async (req: Request, res: Response) => {

    const modelResponse: any = await getPersonModel();

    try {
        return res.status(200).send(modelResponse);
    } catch (error: any) {
        console.log('get person controller error says:', error.message);
    }

}

export default getPersonController;