import Card from "./Card";
import { useSelector } from "react-redux";

function CardsSection() {
  const data = useSelector((store) => store.showData);
  return (
    <div className="album py-3 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {data.map((val) => (
            <Card key={val.show.id} val={val} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardsSection;
