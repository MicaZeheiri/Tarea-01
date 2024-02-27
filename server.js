const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 9000;

app.get('/', (req, res) => {
    res.send(`<h1 style="color: pink; text-align: center; font-size: 75; margin-top: 60px">
                    Bienvenidos a mi app de Backend</h1>`);
})

app.get('/form', (req, res) => {
    res.send(`
    <form style="background-color: pink; padding: 15px">
            <p style="font-size: 20">
                Ingresa tu nombre: 
                <input style="border-radius: 4px; border-color: white; height: 25px; width: 200px" type="text" name="nombre"></input>
            </p>
            <p style="font-size: 20">
                Ingresa tu apellido: 
                <input style="border-radius: 4px; border-color: white; height: 25px; width: 200px" type="text" name="apellido"></input>
            </p>
            <input style="font-size: 15; background-color: hotpink; height: 35px; width: 110px; border-radius: 6px; border-color: white" type="submit" value="Enviar info"></input>
            <input style="font-size: 15; background-color: hotpink; height: 35px; width: 110px; border-radius: 6px; border-color: white" type="reset" value="Borrar info"></input>
        
    </form>
    `);
});

app.get('/redirect', (req, res) => {
    res.redirect('/');
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server listening on http://localhost:${PORT}`);
});