import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { BiSolidCameraMovie } from "react-icons/bi";
import { MdLocalMovies } from "react-icons/md";
import { LiaLanguageSolid } from "react-icons/lia";
import { LuFileType } from "react-icons/lu";
import { TbFileDescription } from "react-icons/tb";

function CardSummary() {
  const data = useSelector((store) => store.showData);
  let dataId = useParams();
  localStorage.setItem("id", dataId.data);
  const Id = localStorage.getItem("id");
  let dataObj = {};

  for (const key in data) {
    if (data[key].show.id == Id) {
      dataObj = data[key].show;
    }
  }

  const genArr = dataObj.genres;
  const imgsrc = dataObj.image;
  // console.log(data);

  const handleMovieName = () => {
    localStorage.setItem("movie-name", dataObj.name);
  };

  return (
    <div className="row gx-5 px-4 py-1 m-5 shadow-lg bg-body-tertiary rounded">
      <h1 className="display-5 fw-bold">
        <BiSolidMoviePlay /> Movie Details :
      </h1>
      <div className="col-lg-6 my-2">
        {imgsrc && imgsrc.original ? (
          <img
            className="bd-placeholder-img card-img-top"
            style={{ width: "90%", height: "450px" }}
            src={imgsrc.original}
            alt=""
          />
        ) : (
          <img
            className="bd-placeholder-img card-img-top"
            style={{ width: "100%", height: "350px" }}
            src="alternative-image-url"
            alt="No image Present (Null Value)"
          />
        )}
      </div>
      <div className="col-lg-6 bg-light-subtle">
        <p className="lead">
          <b>
            <MdLocalMovies /> Name :{" "}
          </b>
          {dataObj.name}
        </p>
        <p className="lead">
          <b>
            <BiSolidCameraMovie /> Genre :{" "}
          </b>
          {genArr &&
            genArr.map((val, ind) => (
              <span key={ind} className="badge text-bg-dark mx-1">
                {val}
              </span>
            ))}
        </p>
        <p className="lead">
          <b>
            <FaStar style={{ color: "gold" }} /> Premiered :{" "}
          </b>
          {dataObj.premiered}
        </p>
        <p className="lead">
          <b>
            <LiaLanguageSolid /> Language :{" "}
          </b>
          {dataObj.language}
        </p>
        <p className="lead">
          <b>
            <LuFileType /> Type :{" "}
          </b>
          {dataObj.type}
        </p>
        <p className="lead">
          <b>
            <TbFileDescription /> Summary :{" "}
          </b>
          <span dangerouslySetInnerHTML={{ __html: dataObj.summary }} />
        </p>
        <Link to="/bookticket">
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 gap-3"
            onClick={handleMovieName}
          >
            Book Now !
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CardSummary;
