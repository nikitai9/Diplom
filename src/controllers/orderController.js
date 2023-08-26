import sql from 'mssql';
import { dbConfig } from 'src/dbConfig/dbConfig.js';

export const createOrder = async (id, userId, productId, quantity, totalPrice) => {
    try {
        const pool = await sql.connect(dbConfig);

        const request = pool.request();
        request.input('ID', sql.Int, id);
        request.input('UserID', sql.Int, userId);
        request.input('ProductID', sql.Int, productId);
        request.input('Quantity', sql.Int, quantity);
        request.input('TotalPrice', sql.Int, totalPrice);

        const result = await request.query(`INSERT INTO [Order] (ID, UserID, ProductID, Quantity, TotalPrice) VALUES (@ID, @UserID, @ProductID, @Quantity, @TotalPrice)`);

        return result.recordset;
    } catch (error) {
        throw error;
    }
};
