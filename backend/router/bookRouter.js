import express from 'express'
import { Book } from "../models/book_model.js";

const router = express.Router();

// New books post
router.post('/', async(req,res)=>{
    try{
        if(
            !req.body.tittle ||
            !req.body.author ||
            !req.body.PuplishYear
        ){
            return res.status(400).send({
                message: "Sent all required failed: tittle, author, publishyear"
            })
        };
        const newBook = {
            tittle: req.body.tittle,
            author: req.body.author,
            PuplishYear:req.body.PuplishYear
        }
        const book = await Book.create(newBook);

        return  res.status(201).send(book);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
});

//Post the all book in get method
router.get('/',async(req,res)=>{
    try{
        const books = await Book.find({});

        return res.status(200).json({
            count : books.length,
            data:books
        });
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({error:error.message})

    }
})

//Router for get one book from data based by id

router.get('/:id', async(req,res)=>{
    
    try{
        const {id} = req.params;
    const book = await Book.findById(id)

    return res.status(200).json(book)
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({error:error.message})
    }
})

//Router update the book in use put method

router.put('/:id', async(req,res)=>{
    try{
        if(
            !req.body.tittle ||
            !req.body.author ||
            !req.body.PuplishYear
        )
        {
            return res.status(400).send({
                message: "Sent all required failed: tittle, author, publishyear"
            });
        }
        const { id } = req.params;

        const result = await Book.findByIdAndUpdate(id, req.body)

        if(!result){
            return res.status(400).send({message:"Book not found"})
        }
            return res.status(200).send({message: "Book is update successfully"})
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({error:error.message})
    }
})

//Router Book Delete 

router.delete('/:id', async(req,res)=>{
    try{
        const { id } = req.params;

        const result = await Book.findByIdAndDelete(id)

        if(!result){
            return res.status(400).send({message:"Book is not found"});

        }
            return res.status(200).send({message:"Book delete successfully"});

    }
    catch(error){
        console.log(error.message);
        res.status(500).send({error:error.message})
    }
})

export default router;
