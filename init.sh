#!/bin/bash
npm init --yes && npm pkg set scripts.start="nodemon server.js"
npm i --save-dev nodemon prisma typescript ts-node @types/node
npm i --save cors express dotenv express-validator
npm install mongodb prisma
npx prisma init
npm install @prisma/client
npm install -D tslib @types/node
npm install -D ts-node
node --loader ts-node/esm --inspect ./index.ts
