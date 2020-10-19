const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
    // inserir dados na tabela
    // await saveOrphanage(db,{
    //     lat: "25.7825453",
    //     lng: "-80.22394984",
    //     name: "Children's dasdsa Society",
    //     about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    //     whatsapp: "98989898898898",
    //     images: [

    //         "https://images.unsplash.com/photo-1595009552535-be753447727e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

    //         "https://images.unsplash.com/photo-1595009545055-d5ec0bb8d732?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    //     ].toString(),
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    //     opening_hours: "Horário de visitas Das 18h até 8h",
    //     open_on_weekends: "0"
    // } )

    // consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar somente 1 orfanato, pelo id
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')

    // deletar dado da tabela\
    //await db.run("DELETE FROM orphanages WHERE id = '4'")
    //await db.run("DELETE FROM orphanages WHERE id = '5'")
})