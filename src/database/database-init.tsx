import { DatabaseConnection } from './database-connection'


export default function DatabaseInit() {

    const db = DatabaseConnection.getConnection()
    db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
        console.log('Foreign keys turned on'))

        var sql = [
            `create table if not exists products (
            id integer primary key autoincrement,
            nome text,
            marca text,
            quantidade int,
            valor real
                
            );`,

            `insert into products(nome, marca, quantidade, valor) values('produto', 'marca', 2, 10.89);`,
        ];

        db.transaction(
            (tx) => {
                for (var i = 0; i < sql.length; i++) {
                    console.log("execute sql : " + sql[i]);
                    tx.executeSql(sql[i]);
                }
            }, (error) => {
                console.log("error call back : " + JSON.stringify(error));
                console.log(error);
            }, () => {
                console.log("transaction complete call back ");
            }
        );


}