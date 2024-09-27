# Monitor de Sites

Um simples aplicativo web em Node.js que monitora o status de sites e exibe os resultados em uma tabela. O aplicativo verifica automaticamente a cada 5 minutos se os sites estão no ar e exibe o status e o código HTTP correspondente.

## Funcionalidades

- Monitora múltiplos sites.
- Atualização automática a cada 5 minutos.
- Exibição do status de cada site em uma tabela.
- Contador regressivo até a próxima verificação.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript.
- [Express](https://expressjs.com/) - Framework para construir aplicações web.
- [Axios](https://axios-http.com/) - Cliente HTTP para fazer requisições.
- HTML/CSS - Para a interface do usuário.

## Pré-requisitos

Antes de começar, certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/monitoramento.git
   cd monitoramento

2.  Instale as dependências :
    ```bash
    npm install

3. Execute o servidor:
   ```bash
   node server.js

4. Abra o seu navegador e acesse
    ```bash
    http://localhost:3000 ou na porta que você colocar no server.js

5. Adicione o site ou sistema que você quer monitorar no arquivo server.js
    ```bash
    const urls = [
       'https://globo.com'
    ]
    
