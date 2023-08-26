import sql from 'mssql';

const userSchema = new sql.Table({
    name: 'User',
    columns: [
        { name: 'ID', type: sql.Int, nullable: false, primary: true },
        { name: 'Login', type: sql.NVarChar(50), nullable: false },
        { name: 'Password', type: sql.NVarChar(50), nullable: false },
        { name: 'Gmail', type: sql.NVarChar(50), nullable: false },
        { name: 'Address', type: sql.NVarChar(50), nullable: false },
        { name: 'Number', type: sql.Int, nullable: false }
    ]
});

export default userSchema;
