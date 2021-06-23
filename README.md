
# nlwValoriza V0.0.2

System
Ubuntu: Ubuntu 20.04.2 LTS
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
 yarn dev
 yarn typeorm -help
 yarn typeorm migration:creat -n CreateUsers


 run db
  
 yarn typeorm migration:run
 yarn typeorm entity:create -n User
  
 
 install types uuid
  yarn add uuid
  yarn add @types/uuid -D
  
  Run server
   yarn dev
