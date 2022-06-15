# Projeto realizado em grupo durante curso na Trybe - Módulo de Back-end
## Projeto Delivey App

## Desenvolvimento

 Nessa aplicação, o grupo foi responsável por criar e integrar tanto o back-end quanto o front-end, criando uma plataforma de delivery de cerveja.
 <br>
 Características do aplicativo:
<br>
  - Ter acesso via login: tanto clientes como pessoas vendedoras, devem ter acesso ao aplicativo via login, porém para funções diferentes: (1) A pessoa cliente, que compra da lista de produtos; (2) A pessoa vendedora, que aprova, prepara e entrega; (3) A pessoa administradora, que gerencia quem usa o aplicativo;
  - Fazer a comunicação entre clientes e pessoas vendedoras: a pessoa cliente faz o pedido via "carrinho de compras" e a pessoa vendedora aprova, prepara e envia esse pedido. Quando o produto é recebido por quem comprou, essa pessoa marca o pedido como "recebido". Ambos devem possuir detalhes sobre seus pedidos;
  - Se a pessoa cliente faz o pedido, o mesmo deve aparecer para a pessoa vendedora em seu dash de pedidos após a atualização da página. A pessoa cliente, por sua vez, deve ter as informações sobre seu pedido quando sua página for atualizada, ou seja, ter informações se o pedido está sendo preparado ou se já saiu pra entrega;

 Para auxiliar no desenvolvimento da aplicação, foi utilizado o Figma atráves desse [protótipo](https://www.figma.com/file/cNKu41RhnPIgNqrbMTzmUI/Delivery-App-new-trybeer?node-id=0%3A1) e com base no Diagrama de ER:

  ![Diagrama de ER](./assets/readme/eer.png)


## Tecnologias:

  - `Javascript, NodeJS, React, MySQL, Sequelize, Express,JWT, Figma, Metodologias Ágeis`

## Clone o repositório
 
  - `git clone git@github.com:michel-oliveira8/project-delivery-app.git`.
  
### Entre na pasta do repositório que você acabou de clonar:
 
 - `cd project-delivery-app.git`
    
### Instale as dependências

  - `npm install`

### Rodar a aplicação, :

#### Para instalar o serviço MySQL na maquina:
- `Linux: sudo apt install mysql-server`
`macOS: brew install mysql`

#### Para verificar status do serviço MySQL na máquina:
- `Linux: sudo systemctl status mysql`
`macOS: brew services list`

#### Para ativar o serviço MySQL:
- `Linux: systemctl start mysql`
`macOS: brew services run mysql`

#### Comandos para fazer na raiz do projeto:

  - `npm start`
  - `npm stop`

### Front-end:

   - `cd app/frontend && npm start`

### Back-end:

   - `cd app/backend && npm run dev`
   
## Para rodar os testes:

  - na raiz da aplicação `npm test(testes implementados pela Trybe)` *
 







