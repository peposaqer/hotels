import React, {useState} from "react";
import { useParams } from "react-router";
import {Link} from "react-router-dom";
import Room from "../Data/rooms";
import { Formik, Form, Field, RadioButtonGroup } from 'formik';
import * as Yup from 'yup';
import BookForm from "../Forms/book-form";

function BookRoom() {

    const params = useParams();
    const book = Room.filter((d) => d.id === parseInt(params.id))[0];

    return (
        <div className="book">
            <div className="card">
                <img src={book.src} className="book-img"/>
                <div className="container">
                    <div>
                        <div className="book-top  mt-5">
                            <div>
                                <h5 className="card-title">{book.title}</h5>
                                <div className="rating">
                                    {(() => {
                                        const arr = [];
                                        for (let i = 0; i < book.stars; i++) {
                                            arr.push(
                                                <i class="fa-solid fa-star" key={i}></i>
                                            );
                                        }
                                        return arr;
                                    })()}
                                </div>
                            </div>
                            <div>
                                <h2>
                                <span className={book.class}>{book.numRate}</span>
                                {book.rate}
                                </h2>
                            </div>
                        </div>
                        <h3>{book.include}</h3>
                        <p className="card-text">{book.description}</p>
                        <h1 className="Price"><span>Price: </span> {book.price} $</h1>
                    </div>
                    <BookForm />
                </div>
            </div>
        </div>
    );
}

export default BookRoom;