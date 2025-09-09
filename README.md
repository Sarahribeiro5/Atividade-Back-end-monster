## Tuturial de como acessar o back-end desta atividade


## 1. Acessar o repositório

Acesse o repositório do projeto (https://github.com/Sarahribeiro5/Atividade-Back-end-monster)

## 2. Clonar o repositório

Clonar o repositório para sua máquina local

## 3. Criar o arquivo .env com as seguintes variáveis de ambiente:

PORT= 5000
DATABASE_URL= "file:./dev.db"
JWT_SECRET=  "Jessica best friend forever"

## 4. Após clonar o repositório, acesse o terminal e de o seguinte comando:

npm install

## 5. Após  dar o comando npm install, execute o seguinte comando:

npx prisma migrate dev

## 6. Após executar o comando npx prisma migrate dev, execute o seguinte comando:

npm run dev

## 7. Acesse o thunder client ou o postman e acesse a seguinte url no GET: 

- http://localhost:5000/personagens

## 8. Acesse o thunder client ou o postman e acesse a seguinte url no POST:

- http://localhost:5000/personagens

Body:

{
  "nome": "Draculaura",
  "idade": 1600,
  "características": "Vampira"
}

## 9. Acesse o thunder client ou o postman e acesse a seguinte url no PUT:

- http://localhost:5000/personagens/4

Body:

{
  "nome": "Draculaura",
  "idade": 1600,
  "características": "Vampira"
}

## 10. Acesse o thunder client ou o postman e acesse a seguinte url no DELETE:

- http://localhost:5000/personagens/3

Body:

{
  "nome": "Draculaura",
  "idade": 1600,
  "características": "Vampira"
}
