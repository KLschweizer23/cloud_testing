import { Pool, PoolConfig } from 'pg';

// Database access configuration
// Enter here your postgres local database access credentials

// interface LocalDatabaseConfig extends PoolConfig {
//     user: string;
//     password: string;
//     database: string;
//     host: string;
//     port: number;
// }

const localDatabase: PoolConfig  = {
    user: 'base',
    password: 'base',
    database: process.env.database || "",
    host: process.env.host || "",
    port: parseInt(process.env.port || "5432")
}

const pool = new Pool(localDatabase);

module.exports = pool;
export default pool;