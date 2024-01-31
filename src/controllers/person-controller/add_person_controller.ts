import addPersonModel from "../../models/person-model/add_person_model";
import { Request, Response } from 'express';

const addPersonController = async (req: Request, res: Response) => {

    const modelResponse: any = await addPersonModel(req.body);

    try {
        if (modelResponse.rowCount === 0) {
            res.status(200).send('conflict');
        } else if (modelResponse.rowCount === 1) {
            res.status(200).send('success');
        }
    } catch (error: any) {
        console.log('add person controller error says:', error.message);
    }

}

export default addPersonController;