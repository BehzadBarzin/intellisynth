import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        {/* Graphics */}
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          {/* Sphere */}
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          {/* Stars Around the Sphere */}
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        {/* Heading */}
        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />

        {/* Main Content (Below the sphere) */}
        <div className="relative">
          {/* Pricing */}
          <PricingList />

          {/* Left/Right Line Graphics (to the sides of the pricing) */}
          <LeftLine />
          <RightLine />
        </div>

        {/* Bottom Link */}
        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
