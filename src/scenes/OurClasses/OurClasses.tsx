import { SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import { Class, SectionText } from "@/components";
import { ClassType } from "@/shared/types";
type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const classes: ClassType[] = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: image2,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: image3,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: image4,
  },
  {
    name: "Yoga Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: image5,
  },
  {
    name: "Yoga Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: image6,
  },
];

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section className="w-full bg-primary-100 py-40" id="ourclasses">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <div className="mx-auto w-5/6">
          <SectionText>Our Classes</SectionText>
          <p className="py-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At dolore
            magni iusto corrupti esse quas blanditiis ipsum eaque a, totam
            quidem nulla suscipit soluta. Nostrum eius odio exercitationem
            voluptatem dolores, ratione, molestiae sed possimus tempore
            voluptates vero ut officiis laboriosam optio obcaecati aperiam
            deleniti harum, laborum placeat odit atque! Officiis?
          </p>
        </div>
      </motion.div>
      <div className="over mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden">
        <ul className="w-[2800px] whitespace-nowrap ">
          {classes.map((item, index) => {
            return <Class {...item} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default OurClasses;
