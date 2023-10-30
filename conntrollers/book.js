import Book from "../model/book.js"

// import fs from "fs";

export const CreateBook = async (req, res) => {
    try {
      console.log(req.body);
    //   console.log(req.files);
  
      const { name, price, author, description } = req.body;
    //   const { photo } = req.files;
  
      if (!name || !price || !author || !description) {
        return res.status(400).json({ message: "A field is missing" });
      }
  
    //   if (!photo || photo.size > 1000000) { 
    //     return res.status(400).json({ message: "Cover picture is required and size should be less than 1 MB" });
    //   }
  
      const book = new Book({
        name,
        author,
        description,
        price,
      });
  
    //   if (photo) {
    //     book.photo.data = fs.readFileSync(photo.path);
    //     book.photo.contentType = photo.type;
    //   }
  
      await book.save();
      return res.status(200).json({ message: "Book Created!", book, success: true });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
  

export const UpdateBook = async(req,res)=>{
    console.log(req.body)
    try {
        const {name, description, author, price} = req.body;
        const {id} = req.params;
        console.log(id)
        const book = await Book.findByIdAndUpdate(id,{
            name, description, author, price
        },{
            new:true
        });
        return res.json({message:"Updated!",book,success:true})
        
    } catch (error) {
        console.log(error)
    }
}

export const DeleteBook = async(req,res) =>{
    // console.log(req.body)
    try {
        const {id} = req.params;
        await Book.findByIdAndDelete(id);
        return res.json({message:"Book Deleted!"})
        
    } catch (error) {
        console.log(error)
    }
    
}

export const GetBooks = async(req,res)=>{
    try {
        const books = await Book.find({})
        return res.json({message:"All the books:", books})
    } catch (error) {
        console.log(error)
    }
    
}

export const getSingleBook = async(req,res)=>{
    try {
        const {id} = req.params;
        const book = await Book.findById(id);
        return res.json({message:"Book is", book})
    } catch (error) {
        console.log(Error)
    }
}

// export const PhotoController = async(req,res)=>{
//     try {
//         const {id} = req.params;
//       const product = await Book.findById(id).select("photo")
//       if(product.photo.data){
//         res.set('Content-type',product.photo.contentType)
//         res.status(200).send(product.photo.data)
//       }
      
//     } catch (error) {
//       res.status(500).send({
//         success:false,
//         message:"Something went wromg!",
//         error
//       })
      
//     }
//   }