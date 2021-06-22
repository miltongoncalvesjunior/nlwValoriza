# nlwValoriza
System
Ubuntu: Ubuntu 20.04.2 LTS
Nodejs: v14.16.0
yarn: 1.22.10


    "@types/express": "^4.17.12",
    "@types/uuid": "^8.3.0",
    "ts-node-dev": "^1.1.6",
    "typescript": "^4.3.4"

history
[] Install Dependence

*Folder
mkdir nlwValoriza
cd nlwValoriza/

[] Intall yarn,express and typescript 
yarn init -y
yarn add typescript -D
 yarn tsc --ini
 yarn add express 
 yarn add @types/express -D
 yarn tsc
 node src/server.js 
 yarn add ts-node-dev -D







[]sqlite

yarn add typeorm reflect-metadata sqlite3
  333  yarn dev
  334  yarn typeorm -help
  335  yarn typeorm migration:creat -n CreateUsers


[] run db
  
  338  yarn typeorm migration:run
  339  yarn typeorm entity:create -n User
  
 
 [] install types uuid
 
  340  yarnd add uuid
  341  yarn add u
  342  yarnd add @types/uuid -D
  343  yarn add @types/uuid -D
  344  yarn dev
