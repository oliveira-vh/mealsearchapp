# MealSearch

App Fullstack para busca de receitas


## Demonstração

[Frontend](https://mealsearchfront.netlify.app/)

[Backend](https://mealsearchapi.herokuapp.com/search)


## Backend

O Backend da aplicação é uma API Rest feita com Express e NodeJS. Os testes são feitos com Jest e as requisições com Axios. A demonstração do Backend está hospedada no Heroku.

### Rotas

As rotas da API são:

```
/search/
```
A rota /search/ retorna com todos os resultados possíveis.

```
/search/{query}
```
Para buscar uma receita através de palavra-chaves.

### Instruções

Para rodar o servidor execute

```
npm run start
```

E para rodar os testes

```
npm run test
```
## Frontend

O Frontend da aplicação foi feito com React, Tailwind e paginação com a biblioteca React-Paginate. A demonstração do Frontend está hospedada no Netlify.

### Instruções

Para rodar o frontend execute

```
npm run start
```
Para executar os testes do frontend execute
```
npm run test
```

E para preparar o build 
```
npm run build
```


