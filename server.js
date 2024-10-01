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
    'https://camara.acsp.com.br/',
    'http://encontrodeempresarios.com.br'
];

async function checkSite(url) {
    try {
        const response = await axios.get(url);
        return { url, status: 'no ar', httpStatus: response.status };
    } catch (error) {
        if (error.response) {
            return { url, status: 'fora do ar', httpStatus: error.response.status };
        } else {
            return { url, status: 'erro', message: error.message };
        }
    }
}

async function checkSites() {
    const promises = urls.map(checkSite); // Cria um array de promessas
    return Promise.all(promises); // Executa todas as promessas em paralelo
}

// Endpoint para verificar status
app.get('/api/status', async (req, res) => {
    try {
        const status = await checkSites();
        res.json(status);
    } catch (error) {
        console.error("Erro ao verificar status dos sites:", error);
        res.status(500).json({ error: 'Erro ao verificar status dos sites' });
    }
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
