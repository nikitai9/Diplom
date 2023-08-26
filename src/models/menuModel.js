import sql from 'mssql';

const menuSchema = new sql.Table({
    name: 'Menu',
    columns: [
        { name: 'ID', type: sql.Int, identity: true, primaryKey: true },
        { name: 'Name', type: sql.NVarChar(50), nullable: false },
        { name: 'Description', type: sql.NVarChar(150), nullable: false },
        { name: 'Price', type: sql.Int, nullable: false },
        { name: 'Picture', type: sql.Image, nullable: false }
    ]
});

export default menuSchema;
