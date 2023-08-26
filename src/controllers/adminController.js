import sql from 'mssql';
import { dbConfig } from 'src/dbConfig/dbConfig.js';

export const createAdmin = async (login, password, address, number) => {
    try {
        const pool = await sql.connect(dbConfig);
        const request = pool.request();
        request.input('Login', sql.NVarChar(50), login);
        request.input('Password', sql.NVarChar(50), password);
        request.input('Address', sql.NVarChar(50), address);
        request.input('Number', sql.Int, number);

        const result = await request.query(`INSERT INTO Admin (Login, Password, Address, Number) VALUES (@Login, @Password, @Address, @Number)`);

        return result.recordset;
    } catch (error) {
        throw error;
    }
};
