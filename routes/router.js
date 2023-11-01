import { CreateBook, DeleteBook, GetBooks, PhotoController, UpdateBook, getSingleBook } from "../conntrollers/book.js";

import express from "express";

const router = express.Router()


router.post('/addBook', CreateBook)
router.put('/updateBook/:id', UpdateBook)
router.delete('/deleteBook/:id',DeleteBook)
router.get('/getBooks', GetBooks)
router.get('/getBook/:id',getSingleBook)
router.get('/product-photo/:id', PhotoController)

export default router;