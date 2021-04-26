# FrontEndTesteDocato

Projeto desenvolvido utilizando [Angular CLI](https://github.com/angular/angular-cli) version 11.2.9.

### Vamos Começar
- Com a API do projeto ja em execução

- execute `npm install` para instalar as bibliotecas utilizadas no projeto

- Execute `ng serve` para iniciar o servidor do projeto. 

- Navegue até `http://localhost:4200/`. 

- O servidor irá carregar automaticamente todas as alterações feitas no código.

### Vamos Começar

- Execute: npm i

- Tome um cafézinho

- Execute: npm start

- Agora a api está rodando 

### dump de registros.

- Primeiro verifique se você tem o MongoDB instalado em sua máquina

- Os registros solicitados estão todos na pasta ./dump

- Popule seu banco com o arquivo databaseInicial.json

- A partir de agora seu login será primeiro@gmail.com e a senha de acesso é primeiro

- Guarde essas informações! 

- Se api não estiver rodando localmente, altere o arquivo app.js, substitua o conteúdo da constate "urlServer", pelo IP que a api irá rodar

- Faça o mesmo processo com a constante "banco", coloque o nome do banco criado no mongo

- Na pasta models, no arquivo user.js, atualize o nome da coleção criada, na constante "colecao".

- Caso queira mais alguns usuários, popule seu banco com o arquivo databaseTeste.json

## Rotas da API

- Após ter feito o dump do na ÂPI, você poderá efetuar login com o usuário e senha lá descritos.

### Autenticação

- Login com email e senha
    POST
        /login

### Usuários

- O botão `Lista de Usuários` irá retornar os usuários cadastrados no banco

- Ira apresentar 10 usuários por página


- Digitanto parte do nome ou email de algum usuário e acionando o botão `Pesquisar`, será retornado os usuários com os campos correspondentes.

- Ao lado de cada usuário na tabela, terá dois botões, um para editar o usuário, e um para excluir o mesmo.

  
- O botão `Cadastro de Usuários` vai redirecionar para o formulário de cadastro


### Produtos Docato
- O botão `Lista de Produtos Docato` vai acionar o Crawler, e retornará os produtos listados no site `www.docato.com.br`, com o botão contratar caso queira contratar algum serviço.