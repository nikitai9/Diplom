import sql from 'mssql';

const orderSchema = new sql.Table({
    name: 'Order',
    columns: [
        { name: 'ID', type: sql.Int, nullable: false, primary: true },
        { name: 'UserID', type: sql.Int, nullable: false },
        { name: 'ProductID', type: sql.Int, nullable: false },
        { name: 'Quantity', type: sql.Int, nullable: false },
        { name: 'TotalPrice', type: sql.Int, nullable: false }
    ]
});

export default orderSchema;
