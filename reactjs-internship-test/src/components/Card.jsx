import { Link} from "react-router-dom";
import { BsFillInfoCircleFill } from "react-icons/bs";

function Card({ val }) {
  let imgsrc = val.show.image;
  let genArr = val.show.genres;
  const id = val.show.id;

  return (
    <div className="col">
      <div className="card shadow-lg">
        {imgsrc && imgsrc.original ? (
          <img
            className="bd-placeholder-img card-img-top"
            style={{ width: "100%", height: "350px" }}
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
        <div
          className="card-body d-flex flex-column fs-5 justify-content-center"
          style={{ height: "200px" }}
        >
          <span className="m-1">
            <b>Movie Name</b> : {val.show.name} <br />
          </span>
          <span className="m-1">
            <b>Genre</b> :{" "}
            {genArr.map((gen, ind, arr) => {
              if (ind !== arr.length - 1) return <span key={ind}>{gen},</span>;
              else return <span key={ind}>{gen}</span>;
            })}
          </span>
          <span className="m-1">
            <b>Rating</b> :{" "}
            {val.show.rating.average === null ? 0 : val.show.rating.average} ⭐
          </span>
          <Link to={`/viewmore/${id}`}>
            <button type="button" className="btn btn-primary mt-1">
              View More <BsFillInfoCircleFill className="fs-5 mx-1" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
