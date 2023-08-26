import sql from 'mssql';

const adminSchema = new sql.Table({
    name: 'Admin',
    columns: [
        { name: 'Login', type: sql.NVarChar(50), nullable: false },
        { name: 'Password', type: sql.NVarChar(50), nullable: false },
        { name: 'Address', type: sql.NVarChar(50), nullable: false },
        { name: 'Number', type: sql.Int, nullable: false }
    ]
});

export default adminSchema;
