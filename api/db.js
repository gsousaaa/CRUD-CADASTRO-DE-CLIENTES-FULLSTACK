import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "glaucosousa",
    password:"projetocrud123",
    database: "crud"
})

export default db
