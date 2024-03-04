import { useEffect, useState } from "react";
import Data from "../../Data.json";
import Card from "../../component/card";
import { toast } from "react-toastify";
import MainLayout from "../../layout/mainLayout";
import Title from "../Title";
const Home = () => {
  const [data, setData] = useState(Data);
  useEffect(() => {
    toast.info("this is home page");
  });
  return (
    <MainLayout>
      <div className="">
        <div className="text-center">
        <Title />
          <div className="mt-5 p-3 ">
          <h1>Classes</h1>
          <p>this the best test I have ever seen these are the cards</p>
          </div>
          
        </div>
        <div className="container d-flex justify-content-evenly flex-wrap">
          {data.map((value, index) => {
            return (
              <div className="m-3">
                <Card value={value} />
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
