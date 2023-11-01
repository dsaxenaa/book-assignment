import "react-toastify/dist/ReactToastify.css";

import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState();

  const getBooks = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/books/getBooks"
      );
      console.log(data);
      setBooks(data.books);
      toast.success("Books fetched!");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  const handleDelete = async(id)=>{
    try{
        await axios.delete(`http://localhost:8080/api/v1/books/deleteBook/${id}`);
        toast.success("Book Deleted!")
        window.location.reload();
    }
    catch(err){
        console.log(err);
    }
  }


  return (
    <div>
      <ToastContainer autoClose={4000} theme="colored" newestOnTop={true} />
      <div
        className="mx-auto h-[5.5rem] text-white  mt-4 cursor-pointer hover:scale-110 py-5 px-32 bg-gradient-to-br from-cyan-600 to-blue-800
     shadow-xl shadow-gray-400"
      >
        Book Management
      </div>
      <button className="btn btn-success mt-[2rem]"><a href="/add" className="card-link">Add Books</a></button>
      <div className="mt-[5rem] ml-[3rem] mr-[3rem] flex flex-row justify-center ">
        {books?.map((book,i) => {
          return (
            <div className="card mx-[2rem]" style={{ width: "18rem" }} key={i}>
                <img src={`http://localhost:8080/api/v1/books/product-photo/${book._id}`} className="card-img-top" alt="book cover"></img>
              <div className="card-body">
                <h5 className="card-title">{book.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Author: {book.author}
                </h6>
                <p className="card-text">
                  Description:{book.description}
                </p>
                <p className="card-text">
                    
                  Price: {book.price}
                </p>
                <div className=" flex flex-row justify-center mt-[1.5rem]">
                <button className="btn btn-danger mx-[1rem]" onClick={()=>handleDelete(book._id)}>Delete</button>
                <button className="btn btn-success">
                <a href={`/update/${book._id}`} className="card-link">
                  Update
                </a>
                </button>
                 </div>   
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Books;
