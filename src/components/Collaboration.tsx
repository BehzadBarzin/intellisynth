import { check, intellisynthSymbol } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        {/* Left Side */}
        <div className="max-w-[25rem]">
          {/* Heading */}
          <h2 className="h2 mb-4 md:mb-8">
            AI application for seamless collaboration.
          </h2>
          {/* Collaboration List */}
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  {/* Check */}
                  <img src={check} width={24} height={24} alt="check" />
                  {/* Title */}
                  <h6 className="ml-5 body-2">{item.title}</h6>
                </div>
                {/* Text */}
                {item.text && (
                  <p className="mt-3 body-2 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          {/* Button */}
          <Button className="mt-4">Try it out</Button>
        </div>

        {/* Right Side */}
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          {/* Text */}
          <p className="body-2 mb-4 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>
          {/* Applications Circle */}
          {/* Circle 1 */}
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            {/* Circle 2 */}
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              {/* Inner Circle */}
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                {/* Logo in center */}
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={intellisynthSymbol}
                    width={48}
                    height={48}
                    alt="intellisynth"
                  />
                </div>
              </div>
            </div>

            {/* Application Icons around */}
            <ul>
              {collabApps.map((app, idx) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    idx * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      idx * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      src={app.icon}
                      alt={app.title}
                      width={app.width}
                      height={app.height}
                    />
                  </div>
                </li>
              ))}
            </ul>

            {/* Background Curve Graphics (lines) */}
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
