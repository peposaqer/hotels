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
        <div className="container">
            <div className="book">
                <div className="row">
                    <div className="col-md-12"><h1>{book.title}</h1></div>
                    <div className="col-md-6">
                        <img src={book.src} className="img-book" />
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={book.src_1} className="img-book img-book-wide mt-0" />
                            </div>
                            <div className="col-md-6">
                                <img src={book.src_2} className="img-book img-book-wide mt-0" />
                            </div>
                            <div className="col-md-6">
                                <img src={book.src_3} className="img-book img-book-wide" />
                            </div>
                            <div className="col-md-6">
                                <img src={book.src_4} className="img-book img-book-wide" />
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="row mt-5">
                        <div className="col-md-8">
                            <div className="details">
                                <div>
                                    <p>{book.description}</p>
                                    <span>{book.details}</span>
                                </div>
                                <img src={book.src} />
                            </div>
                            <div className="work">
                                <div className="icon">
                                    <i class="fa-solid fa-money-check"></i>
                                    <div>
                                        <h2>{book.requirement_1}</h2>
                                        <span>{book.requirement_1_1}</span>
                                    </div>
                                </div>
                                <div className="icon">
                                    <i class="fa fa-door-closed"></i>
                                    <div>
                                        <h2>{book.requirement_2}</h2>
                                        <span>{book.requirement_2_1}</span>
                                    </div>
                                </div>
                                <div className="icon">
                                    <i class="fa-solid fa-money-check"></i>
                                    <div>
                                        <h2>{book.requirement_3}</h2>
                                        <span>{book.requirement_3_1}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="price">
                                <div className="rate">
                                    <span>{book.price}$</span>
                                    <div className="rating">
                                    {(() => {
                                        const arr = [];
                                        for (let i = 0; i < book.stars; i++) {
                                            arr.push(
                                                <>
                                                <i class="fa-solid fa-star" key={i}></i>
                                                </>
                                            );
                                        }
                                        return arr;
                                    })()}
                                    <span>{book.numRate}</span>
                                </div>
                                </div>
                                <BookForm />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default BookRoom;