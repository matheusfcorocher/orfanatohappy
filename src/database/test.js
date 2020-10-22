const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage');

Database.then(async(db) => {
    //inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-22.7323931",
        lng: "-47.6468506",
        name: "Lar dos 3s",
        about: "Presta assistência a crainças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsaap: "1923242312421312",
        images: [
            "https://images.unsplash.com/photo-1597385573259-d2d9f0b7135d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1572248364230-7f412885f2da?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 18h até 8h",
        open_on_weekends: "1",

    }, );
    //consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages;");
    console.log(selectedOrphanages);

    //consultar somente 1 orfanato, pelo id
    /*const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"');
    console.log(orphanage);*/

    // deletar dado da tabela

    //await db.run(`DELETE FROM tabela WHERE id = '4'`)
});