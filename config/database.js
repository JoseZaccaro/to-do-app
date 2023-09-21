import { connect } from "mongoose";

connect(process.env.MONDONGO)
    .then(()=> console.log('Base de datos conectada'))
    .catch(()=> console.log('Error al conectar con la base de datos'))