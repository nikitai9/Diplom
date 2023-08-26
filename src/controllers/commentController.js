import sql from 'mssql';
import commentSchema from '../models/commentModel.js';
import { dbConfig } from 'src/dbConfig/dbConfig.js';

export const createComment = async (login, commentText) => {
    try {
        const pool = await sql.connect(dbConfig);

        const request = pool.request();
        request.input('Login', sql.NVarChar(50), login);
        request.input('Comment', sql.NVarChar(50), commentText);

        const result = await request.query(`INSERT INTO Comment (Login, Comment) VALUES (@Login, @Comment)`);

        return result.recordset;
    } catch (error) {
        throw error;
    }
};
