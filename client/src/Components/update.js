import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import axios from "axios";
import { toast } from "react-toastify";

const Update = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    async function fetchBookDetails() {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/books/getBook/${bookId}`
        );
        const book = response.data;
        console.log(book);
        setName(book.name);
        setPrice(book.price);
        setDescription(book.description);
        setAuthor(book.author);
        console.log(name)
      } catch (err) {
        console.error(err);
      }
    }

    fetchBookDetails();
  }, [bookId]);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      // const data = {
      //   name: name,
      //   price: price,
      //   description: description,
      //   author: author,
      // };

      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("author",author);
      const response = await axios.put(
        `http://localhost:8080/api/v1/books/updateBook/${bookId}`,
        productData
      );

      if (response.data.success) {
        toast.success("Book Updated!");
      }

      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1 className="mt-[2rem]">Update BOOK</h1>
      <form className="m-[5rem]">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="title"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary text-black"
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
