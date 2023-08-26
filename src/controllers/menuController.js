import sql from 'mssql';
import { dbConfig } from 'src/dbConfig/dbConfig.js';

export const createProduct = async (id, name, type, description, price, picture) => {
    try {
        const pool = await sql.connect(dbConfig);

        const request = pool.request();
        request.input('ID', sql.Int, id);
        request.input('Name', sql.NVarChar(50), name);
        request.input('Type', sql.NVarChar(50), type);
        request.input('Description', sql.NVarChar(150), description);
        request.input('Price', sql.Int, price);
        request.input('Picture', sql.Image, picture);

        const result = await request.query(`INSERT INTO Product (ID, Name, Type, Description, Price, Picture) VALUES (@ID, @Name, @Type, @Description, @Price, @Picture)`);

        return result.recordset;
    } catch (error) {
        throw error;
    }
};
