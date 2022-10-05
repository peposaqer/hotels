import React, {useState} from "react";
import {Link} from "react-router-dom";
import { slice, concat } from "lodash";
import Room from "../Data/rooms";

const LIMIT = 6;

function Rooms() {
  const [showMore, setShowMore] = useState(true);
  const [list, setList] = useState(slice(Room, 0, LIMIT));
  const [index, setIndex] = useState(LIMIT);

  const loadMore = () => {
    const newIndex = index + 3;
    const newShowMore = newIndex <= Room.length - 1;
    const newList = concat(list, slice(Room, index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  };
  return (
    <div className="rooms">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center"><h1>Rooms</h1></div>
            {list.map((x, index) => (
                <div className="col-md-6 col-lg-4" key={x.id}>
                  <div className="card">
                    <div className=" overflow-hidden ">
                      <img src={x.src} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <div className="book-top">
                            <div>
                                <h5 className="card-title">{x.title}</h5>
                                <div className="rating">
                                    {(() => {
                                    const arr = [];
                                    for (let i = 0; i < x.stars; i++) {
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
                                <span className={x.class}>{x.numRate}</span>
                                {x.rate}
                                </h2>
                            </div>
                        </div>
                      <h3>{x.include}</h3>
                      <p className="card-text">{x.description}</p>
                      <div className="text-center">
                        <Link to={`/BookRoom/${x.id}`} className="card-button">Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-lg-12 text-center">
                {showMore && (
                  <button className="more" onClick={loadMore}> Load More </button>
                )}
              </div>
        </div>
      </div>
    </div>
);
}

export default Rooms;