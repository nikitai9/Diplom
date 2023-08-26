import sql from 'mssql';
import menuSchema from '../models/menuModel.js';
import { dbConfig } from 'src/dbConfig/dbConfig.js';

export const createMenuItem = async (name, description, price, picture) => {
    try {
        const pool = await sql.connect(dbConfig);

        const request = pool.request();
        request.input('Name', sql.NVarChar(50), name);
        request.input('Description', sql.NVarChar(150), description);
        request.input('Price', sql.Int, price);
        request.input('Picture', sql.Image, picture);

        const result = await request.query(`INSERT INTO Menu (Name, Description, Price, Picture) VALUES (@Name, @Description, @Price, @Picture)`);

        return result.recordset;
    } catch (error) {
        throw error;
    }
};
