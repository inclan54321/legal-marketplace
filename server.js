const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Esto le dice al servidor que busque los archivos HTML en la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Redirige la raíz a los términos
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'terminos.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});