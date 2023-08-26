import sql from 'mssql';

const commentSchema = new sql.Table({
    name: 'Comment',
    columns: [
        { name: 'ID', type: sql.Int, nullable: false, primary: true },
        { name: 'Login', type: sql.NVarChar(50), nullable: false },
        { name: 'Comment', type: sql.NVarChar(50), nullable: false }
    ]
});

export default commentSchema;
