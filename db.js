const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(function() {

    // Criar a tabela 
    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT, 
            description TEXT, 
            link TEXT
        );
    
    `)

    // Inserir dado na tabela 
//     const query = `
//     INSERT INTO ideas(
//         image, 
//         title, 
//         category,
//         description,
//         link
//     ) VALUES (?,?,?,?,?);
// `
//     const values = [
//         "https://image.flaticon.com/icons/svg/2729/2729007.svg",
//         "Cursos de Programação",
//         "Estudo",
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores architecto tenetur sit tempore adipisci incidunt nostrum eaque recusandae ullam, voluptate aut voluptatibus, veritatis beatae dicta explicabo hic, sed deserunt. Hic!",
//         "https://github.com/yuriandreisilva/casa-criativa-workshop-semana-omniStack-11.0.git"
//     ]
//     db.run(query, values, function(err){
//        if (err) return console.log(err)
       
//        console.log(this)
//     }) 
    
    //Consultar dados na tabela

    // db.all(`SELECT * FROM ideas`, function(err, rows) {
    // if (err) return console.log(err)

    //     console.log(rows)
    // })  

    //Deletar um dado da tabela 

    // db.run(`DELETE FROM ideas WHERE id = ?`,[8], function(err){
    //     if (err) return console.log(err)

    //     console.log("DELETEI", this)

    // })
    

})

module.exports = db