import pool from "../../_database/db_config";

const getFileListsModel = async (req_body: any) => {

    const { person_id } = req_body;

    const params: string[] = [person_id];
    
    const query = 'SELECT * FROM test_files WHERE person_id = $1;'

    try {
        const response = await pool.query(query, params);
        return response;
    } catch (error: any) {
        console.log('get file lists model error says:', error.message);
    }

}

export default getFileListsModel;