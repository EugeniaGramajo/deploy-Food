/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
  title: 'Milanea a la napolitana',
  summary:"No me pusieron descripcion pero seguro soy alta comida",
  healthScore:0,
  steps:"muchos",
  dishTypes:"cena",
  readyInMinutes:45,
  ingredients:["re"],
  servings:4,
  image:"no tengo",
  Diet_type:[2,3],
};

describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipe.sync({ force: true })
    .then(() => Recipe.create(recipe)));
  describe('GET /recipes', () => {
    it('should get 200', () =>
      agent.get('/recipes').expect(404)
    );
  });
});
