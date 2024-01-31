import containerClient from "../../_database/azure_container_client_config";
import pool from "../../_database/db_config";
import fs from 'fs';

const addFileModel = async (req_file: any, req_body: any) => {
        
    const { person_id } = req_body;

    const query = 'INSERT INTO test_files(file_name, unique_string, person_id) VALUES ($1, $2, $3);';
    try {
        if (req_file) {
            const blobName = req_file.originalname;

            const params: string[] = [blobName, req_file.filename, person_id];
            
            const fileName = `${req_file.filename}_${blobName}`;

            const blockBlobClient = containerClient.getBlockBlobClient('sampleFiles/' + fileName);
            const azureResponse = await blockBlobClient.uploadFile(req_file.path).then(async response => {
                await pool.query(query, params);
                return 'success';
            }).catch(error => {
                return 'fail';
            });

            fs.unlink(req_file.path, (err) => {
                if (err) {
                    console.error('Error deleting file');
                }
            });
            
            return azureResponse;
        } else {
            console.log('No file uploaded');
            return 'empty';
        }
        
    } catch (error: any) {
        console.log('add file model error says:', error.message);
        return 'fail';
    }

}

export default addFileModel;