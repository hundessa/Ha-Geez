import { useState } from "react";
import {
  Category_Card,
  Category_name,
} from "./styled-components/Category_Card";
import development from "../../../assets/images/Category/development.jpg";
import business from "../../../assets/images/Category/business1.jpg";
import marketing from "../../../assets/images/Category/marketing.jpg";
import design from "../../../assets/images/Category/design.jpg";
import finance from "../../../assets/images/Category/finance.jpg";
import photography from "../../../assets/images/Category/photography.jpg";

const Category = () => {
  const [blurredCard, setBlurredCard] = useState(null);

  const handleMouseEnter = (cardId) => {
    setBlurredCard(cardId);
  };

  const handleMouseLeave = () => {
    setBlurredCard(null);
  };

  return (
    <>
      <div className="">
        <div className="flex">
          <h1 className="flex mx-auto font-bold text-3xl mb-10">
            Course Category
          </h1>
        </div>
        <div className="flex mx-auto w-[900px]">
          <p className="flex mb-14">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            eos nostrum beatae nemo non adipisci aperiam exercitationem quam
            recusandae cum amet earum porro harum ad, maiores dolore veritatis
            placeat corporis.
          </p>
        </div>
        <div className="flex mx-auto flex-wrap justify-center gap-14">
          <Category_Card
            backgroundImage={development}
            isBlurred={blurredCard === "1"}
          >
            <Category_name
              backgroundColor="transparent"
              hoverBackgroundColor="white"
              hoverColor="black"
              onMouseEnter={() => handleMouseEnter("1")}
              onMouseLeave={handleMouseLeave}
            >
              Development
            </Category_name>
          </Category_Card>
          <Category_Card
            backgroundImage={business}
            isBlurred={blurredCard === "2"}
          >
            <Category_name
              color="dark"
              backgroundColor="transparent"
              hoverBackgroundColor="white"
              hoverColor="black"
              onMouseEnter={() => handleMouseEnter("2")}
              onMouseLeave={handleMouseLeave}
            >
              Business
            </Category_name>
          </Category_Card>
          <Category_Card backgroundImage={marketing}isBlurred={blurredCard === "3"}
          >
            <Category_name
              color="dark"
              backgroundColor="transparent"
              hoverBackgroundColor="white"
              hoverColor="black"
              onMouseEnter={() => handleMouseEnter("3")}
              onMouseLeave={handleMouseLeave}
            >
              Marketing
            </Category_name></Category_Card>
          <Category_Card backgroundImage={design}isBlurred={blurredCard === "4"}
          >
            <Category_name
              color="dark"
              backgroundColor="transparent"
              hoverBackgroundColor="white"
              hoverColor="black"
              onMouseEnter={() => handleMouseEnter("4")}
              onMouseLeave={handleMouseLeave}
            >
              Design
            </Category_name></Category_Card>
          <Category_Card backgroundImage={finance}isBlurred={blurredCard === "5"}
          >
            <Category_name
              color="dark"
              backgroundColor="transparent"
              hoverBackgroundColor="white"
              hoverColor="black"
              onMouseEnter={() => handleMouseEnter("5")}
              onMouseLeave={handleMouseLeave}
            >
              Finance
            </Category_name></Category_Card>
          <Category_Card backgroundImage={photography}isBlurred={blurredCard === "6"}
          >
            <Category_name
              color="dark"
              backgroundColor="transparent"
              hoverBackgroundColor="white"
              hoverColor="black"
              onMouseEnter={() => handleMouseEnter("6")}
              onMouseLeave={handleMouseLeave}
            >
              Photography & Video
            </Category_name></Category_Card>
        </div>
      </div>
    </>
  );
};

export default Category;
