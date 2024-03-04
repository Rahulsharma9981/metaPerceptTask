import { useEffect, useState } from "react";
import MainLayout from "../../layout/mainLayout";
import Data from "../../Data.json";
import { Link, useParams } from "react-router-dom";
const CardDetails = () => {
  const param = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const data = Data.find((value, index) => value.ID == param.id);
    setData(data);
  }, []);
  return (
    <div>
      <MainLayout>
        <div className="card mb-3 container mt-5">
          <img
            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{data.ID}</h5>
            <p className="card-text">{data.ShortDesc}</p>
            <p className="card-text">
              <button className=" btn btn-primary"><Link to={"/"} className="text-light">Back</Link></button>
            </p>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default CardDetails;
