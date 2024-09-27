const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const urls = [
    'https://dcomercio.com.br/',
    'https://portaldomei.com.br/',
    'https://protheus.acsp.com.br/rest',
    'https://acsp.com.br/',
    'https://fluig.acsp.com.br/portal/home',
    'https://legal.acsp.com.br/',
    'https://camara.acsp.com.br/'
];

async function checkSites() {
    const results = [];

    for (const url of urls) {
        try {
            const response = await axios.get(url);
            results.push({ url, status: 'no ar', httpStatus: response.status });
        } catch (error) {
            if (error.response) {
                results.push({ url, status: 'fora do ar', httpStatus: error.response.status });
            } else {
                results.push({ url, status: 'erro', message: error.message });
            }
        }
    }
    return results;
}

// Endpoint para verificar status
app.get('/api/status', async (req, res) => {
    const status = await checkSites();
    res.json(status);
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
