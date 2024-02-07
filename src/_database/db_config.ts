import { Pool, PoolConfig } from 'pg';
import fs from 'fs';

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
    user: 'admin_base',
    password: 'Kenbase123',
    database: process.env.database || "postgres",
    host: process.env.host || "ken-cloud-test-psql.postgres.database.azure.com",
    port: parseInt(process.env.port || "5432"),
    ssl: {
        ca: fs.readFileSync("../../DigiCertGlobalRootCA.crt.pem")
    }
}

const pool = new Pool(localDatabase);

module.exports = pool;
export default pool;