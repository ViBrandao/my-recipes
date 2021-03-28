import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

createServer({
  models: {
    recipe: Model,
  },
  seeds(server) {
    server.db.loadData({
      recipes: [
        {
          id: 1,
          title: 'Strogonoff',
          category: 'Salgado',
          ingredients: [
            {
              name: 'Batatas',
              amount: 400,
              measure: 'Gramas',
            },
            {
              name: 'Paprica picante',
              amount: 2,
              measure: 'Colheres de sopa',
            },
            {
              name: 'Azeite',
              amount: 1,
              measure: 'Colheres de sopa',
            },
            {
              name: 'Sal',
              amount: 0,
              measure: '',
            },
          ],
          directions: [
            {
              step: 1,
              description: 'Passo 1...',
            },
            {
              step: 2,
              description: 'Passo 2...',
            },
          ],
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Strogonoff',
          category: 'Salgado',
          ingredients: [
            {
              name: 'Batatas',
              amount: 400,
              measure: 'Gramas',
            },
            {
              name: 'Paprica picante',
              amount: 2,
              measure: 'Colheres de sopa',
            },
            {
              name: 'Azeite',
              amount: 1,
              measure: 'Colheres de sopa',
            },
            {
              name: 'Sal',
              amount: 0,
              measure: '',
            },
          ],
          directions: [
            {
              step: 1,
              description: 'Passo 1...',
            },
            {
              step: 2,
              description: 'Passo 2...',
            },
          ],
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 3,
          title: 'Strogonoff',
          category: 'Salgado',
          ingredients: [
            {
              name: 'Batatas',
              amount: 400,
              measure: 'Gramas',
            },
            {
              name: 'Paprica picante',
              amount: 2,
              measure: 'Colheres de sopa',
            },
            {
              name: 'Azeite',
              amount: 1,
              measure: 'Colheres de sopa',
            },
            {
              name: 'Sal',
              amount: 0,
              measure: '',
            },
          ],
          directions: [
            {
              step: 1,
              description: 'Passo 1...',
            },
            {
              step: 2,
              description: 'Passo 2...',
            },
          ],
          createdAt: new Date('2021-02-12 09:00:00'),
        },
      ],
    });
  },
  routes() {
    this.namespace = 'api';

    this.get('/recipes', () => {
      return this.schema.all('recipe');
    });

    this.post('/recipes', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('recipe', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
