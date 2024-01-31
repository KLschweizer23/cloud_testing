import containerClient from "../../_database/azure_container_client_config";
import pool from "../../_database/db_config";

const getFileSingleModel = async (req_body: any) => {

    const { id } = req_body;

    const params: string[] = [id];

    const query = `SELECT * FROM test_files WHERE id = $1;`;

    try {
        const response = await pool.query(query, params);
        if (response && response.rowCount && response.rowCount > 0) {
            const data = response.rows[0];
            const blobName = `${data.unique_string}_${data.file_name}`;

            const blobClient = containerClient.getBlobClient(blobName);
            const downloadBlockBlobResponse = await blobClient.download();
            const readableStream = downloadBlockBlobResponse.readableStreamBody;

            return { readableStream, file_name: data.file_name };
        } else {
            return null;
        }

    } catch (error: any) {
        console.log('get file single model error says:', error.message);
    }

}

export default getFileSingleModel;