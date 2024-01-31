import pool from "../../_database/db_config";

const getPersonModel = async () => {

    const query = `SELECT * FROM test_persons`;

    try {
        const response = await pool.query(query);
        return response;
    } catch (error: any) {
        console.log('get person model error says: ', error.message);
    }

}

export default getPersonModel;