import sql from 'mssql';

const productSchema = new sql.Table({
    name: 'Product',
    columns: [
        { name: 'ID', type: sql.Int, nullable: false, primary: true },
        { name: 'Name', type: sql.NVarChar(50), nullable: false },
        { name: 'Type', type: sql.NVarChar(50), nullable: false },
        { name: 'Description', type: sql.NVarChar(150), nullable: false },
        { name: 'Price', type: sql.Int, nullable: false },
        { name: 'Picture', type: sql.Image, nullable: false }
    ]
});

export default productSchema;
