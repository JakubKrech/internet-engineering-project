// Tu definiujemy testy endpointu

/*import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Ingredient } from '.'

const app = () => express(apiRoot, routes)

let ingredient

beforeEach(async () => {
    ingredient = await Ingredient.create({})
})

test('POST /ingredients 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ manufacturer: 'test', model: 'test', year: 'test', doors: 'test', dimensions: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.manufacturer).toEqual('test')
  expect(body.model).toEqual('test')
  expect(body.year).toEqual('test')
  expect(body.doors).toEqual('test')
  expect(body.dimensions).toEqual('test')
})

test('GET /ingredients 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /ingredients/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${ingredient.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(ingredient.id)
})

test('GET /ingredients/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /ingredients/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${ingredient.id}`)
    .send({ manufacturer: 'test', model: 'test', year: 'test', doors: 'test', dimensions: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(ingredient.id)
  expect(body.manufacturer).toEqual('test')
  expect(body.model).toEqual('test')
  expect(body.year).toEqual('test')
  expect(body.doors).toEqual('test')
  expect(body.dimensions).toEqual('test')
})

test('PUT /ingredients/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ manufacturer: 'test', model: 'test', year: 'test', doors: 'test', dimensions: 'test' })
  expect(status).toBe(404)
})

test('DELETE /ingredients/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${ingredient.id}`)
  expect(status).toBe(204)
})

test('DELETE /ingredients/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})*/