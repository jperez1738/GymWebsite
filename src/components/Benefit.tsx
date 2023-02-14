import { BenefitType } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
type Props = BenefitType & { setSelectedPage: (page: string) => void };

const childVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

var hello;

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 border-2 border-gray-100 px-5 py-16  text-center md:w-[25vw]"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-5">
          {icon}
        </div>
      </div>

      <h4 className="font-montserrat font-bold">{title}</h4>
      <p className="my-3 h-[300px] max-h-20 overflow-hidden text-ellipsis text-sm">
        {description}
      </p>

      <AnchorLink className="px-10 text-primary-500 underline">
        <p>Learn more</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
