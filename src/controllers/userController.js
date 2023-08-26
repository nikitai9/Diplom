import sql from 'mssql';
import { dbConfig } from 'src/dbConfig/dbConfig.js';

export const createUser = async (id, login, password, gmail, address, number) => {
    try {
        const pool = await sql.connect(dbConfig);

        const request = pool.request();
        request.input('ID', sql.Int, id);
        request.input('Login', sql.NVarChar(50), login);
        request.input('Password', sql.NVarChar(50), password);
        request.input('Gmail', sql.NVarChar(50), gmail);
        request.input('Address', sql.NVarChar(50), address);
        request.input('Number', sql.Int, number);

        const result = await request.query(`INSERT INTO User (ID, Login, Password, Gmail, Address, Number) VALUES (@ID, @Login, @Password, @Gmail, @Address, @Number)`);

        return result.recordset;
    } catch (error) {
        throw error;
    }
};
