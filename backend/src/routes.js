const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate');

const SessionController = require('./controllers/SessionCtrl');
const OngController = require('./controllers/OngCtrl');
const ProfileController = require('./controllers/ProfileCtrl');
const IncidentController = require('./controllers/IncidentCtrl');

const routes = express.Router();

routes.post('/sessions', celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required(),
  }),
}), SessionController.store);

routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11).regex(/\d/),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  }),
}), OngController.store);

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), ProfileController.index);

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  }),
}), IncidentController.index);

routes.post('/incidents', celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required().max(255),
    value: Joi.number().required(),
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), IncidentController.store);

routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  }),
}), IncidentController.delete);

module.exports = routes;