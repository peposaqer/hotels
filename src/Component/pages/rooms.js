import React, {useState} from "react";
import {Link} from "react-router-dom";
import { slice, concat } from "lodash";
import Room from "../Data/rooms";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const LIMIT = 12;

function Rooms() {
  const [showMore, setShowMore] = useState(true);
  const [list, setList] = useState(slice(Room, 0, LIMIT));
  const [index, setIndex] = useState(LIMIT);

  const loadMore = () => {
    const newIndex = index + 2;
    const newShowMore = newIndex <= Room.length - 1;
    const newList = concat(list, slice(Room, index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  };
  return (
    <div className="rooms">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center"><h1>Rooms</h1></div>
            {list.map((x, index) => (
                <div className="col-md-6 col-lg-2" key={x.id}>
                  <Link to={`/BookRoom/${x.id}`}  className="card">
                    <div className=" overflow-hidden ">
                      {/* <img src={x.src} className="card-img-top" alt="..." /> */}
                      <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                      >
                        <SwiperSlide><img  src={x.src} /></SwiperSlide>
                        <SwiperSlide><img  src={x.src_1} /></SwiperSlide>
                        <SwiperSlide><img  src={x.src_2} /></SwiperSlide>
                        <SwiperSlide><img  src={x.src_3} /></SwiperSlide>
                        <SwiperSlide><img  src={x.src_4} /></SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="card-body">
                        <div className="book-top">
                            <div className="d-flex justify-content-between w-100 align-items-center mb-3">
                                <h5 className="card-title">{x.title}</h5>
                                <div className="rating">
                                    {(() => {
                                    const arr = [];
                                    for (let i = 0; i < x.stars; i++) {
                                        arr.push(
                                            <>
                                              <i class="fa-solid fa-star" key={i}></i>
                                            </>
                                        );
                                    }
                                    return arr;
                                })()}
                                  <span>{x.numRate}</span>
                                </div>
                            </div>
                        </div>
                      <h3>{x.include}</h3>
                      <p className="card-text">{x.description}</p>
                    </div>
                  </Link>
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