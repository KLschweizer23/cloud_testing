import containerClient from "../../_database/azure_container_client_config";
import pool from "../../_database/db_config";

const deleteFileModel = async (req_body: any) => {

    const { id } = req_body;

    const params: string[] = [id];

    const query = `SELECT * FROM test_files WHERE id = $1;`;
    
    const query2 = `DELETE FROM test_files WHERE id = $1;`;

    try {
        const response = await pool.query(query, params);

        if (response && response.rowCount && response.rowCount > 0) {
            const data = response.rows[0];
            const blobName = `${data.unique_string}_${data.file_name}`;

            const blobClient = containerClient.getBlobClient(blobName);
            const response2 = blobClient.deleteIfExists().then(async blobResponse => {
                return await pool.query(query2, params);
            });
            return response2;
        } else {
            return 'no data';
        }
    } catch (error: any) {
        console.log('delete file model error says:', error.message);
    }

}

export default deleteFileModel;