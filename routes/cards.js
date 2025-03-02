const cards = require('express').Router();
const { getCards, getCard, likeCard, createCard, deleteCard, dislikeCard } = require('../controllers/cards');

cards.get('/cards', getCards);
cards.get('/cards/:id', getCard);
cards.put('/cards/:id/likes', likeCard);
cards.post('/cards', createCard);
cards.delete('/cards/:id', deleteCard);
cards.delete('/cards/:id/likes', dislikeCard);

module.exports = cards;