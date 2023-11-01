import React, { useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleClick = (e) => {
    e.preventDefault()
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("author",author);
      productData.append("photo", photo);
        // const dataa = {
        //     name: name,
        //     price: price,
        //     description: description,
        //     author: author,
        //   };
    
     

      const { data } = axios.post("http://localhost:8080/api/v1/books/addBook",productData);
      // const { data } = axios.post("http://localhost:8080/api/v1/books/addBook",{name,price,description,author});
      toast.success("Book Added!");
      navigate("/");
    } catch (error) {
      toast.error(error)
    }
  };

  return (
    <div>
      <h1 className="mt-[2rem]">ADD BOOK</h1>
      <form className="m-[5rem]">
        <div className="mb-3">
          <label className="btn btn-outline-secondary col-md-12">
            {photo ? photo.name : "Upload Photo"}
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              hidden
            />
          </label>
        </div>
        <div className="mb-3">
          {photo && (
            <div className="text-center">
              <img
                src={URL.createObjectURL(photo)}
                alt="product_photo"
                style={{ width: "200px", height: "300px" }}
                className="img img-responsive"
              />
            </div>
          )}
        </div>
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
          onClick={(e)=>handleClick(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add;
