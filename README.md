- Cadastro de usuario

[ x ]  -Nao e permitido cadastrar mais de um usuario com o mesmo e-mail.  
[ x ]  -Nao e permitido cadastrar usuario sem email.
  class = CreateUserService
},

- Cadastro  de TAG

[ x  ] Nao  e permitido cadastrar mais de uma tag com o mesmo nome.

[  x ] Nao e permitido cadastrar tag sem nome.

[  x ] Nao e permitido o cadastro por usuario que nao sejam admnistrador.

- Cadastro de elogios
[ x ] Nao e permitido um usuario cadastar um elogio pra si.

[ x ] Nao e permitido um usuario cadastrar elogios para usuarios invalidos .

[x  ] O usuario precisa estar autenticado na aplicacao .


System
Ubuntu 20.04.2 LTS
Nodejs: v14.16.0
yarn: 1.22.10


    "@types/express": "^4.17.12",
    "@types/uuid": "^8.3.0",
    "ts-node-dev": "^1.1.6",
    "typescript": "^4.3.4"

history
Install Dependence

*Folder
mkdir nlwValoriza
cd nlwValoriza/

Intall yarn,express and typescript 
yarn init -y

yarn add typescript -D

yarn tsc --ini

yarn add express 

yarn add @types/express -D

yarn tsc

node src/server.js 

yarn add ts-node-dev -D

sqlite

yarn add typeorm reflect-metadata sqlite3
 
 run server:

yarn dev

yarn typeorm -help

CreateUsers Migrations:

yarn typeorm migration:create -n CreateUsers


 run db
  
 yarn typeorm migration:run

yarn typeorm entity:create -n User
  
 
 install types uuid

yarn add uuid

yarn add @types/uuid -D
  
