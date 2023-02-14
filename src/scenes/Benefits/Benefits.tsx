import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { SectionText, Benefit } from "@/components";
import AbstractWaves from "@/assets/AbstractWaves.png";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import { ActionButton } from "@/components/";

type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const BenefitsData: BenefitType[] = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "lorem: ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "lorem: ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Este es un texto de prueba para ver como se ve en la pagina.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "World Class Trainers",
    description:
      "lorem: ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lom ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem 100 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "lorem: ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Este es un texto de prueba para ver como se ve en la pagina.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "World Class Trainers",
    description:
      "lorem: ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lom ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem 100 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
      id={SelectedPage.Benefits}
      className="mx-auto min-h-full w-5/6  py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Section Title */}
        <div className="md:my-5 md:w-3/5">
          <SectionText>MORE THAN JUST A GYM</SectionText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers, and classes to
            get you to your utilmate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </div>

        {/* panel container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mt-5 items-center gap-8  md:flex md:flex-wrap md:justify-between"
        >
          {BenefitsData.map((benefit: BenefitType, index) => {
            return (
              <Benefit
                key={index.toString()}
                {...benefit}
                setSelectedPage={() => setSelectedPage(SelectedPage.ContactUs)}
              />
            );
          })}
        </motion.div>

        <div className="my-24 items-center md:flex md:justify-between">
          <img
            src={BenefitsPageGraphic}
            alt="Benefits Page Graphic"
            className="mx-auto"
          />
          <div className="md:w-2/5 ">
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:content-abstractwaves">
                <SectionText>
                  MILLIONS OF HAPPY MEMBERS GETTING{" "}
                  <span className="text-primary-300">FIT</span>.
                </SectionText>
              </div>
            </div>

            <p className="mt-6">
              Aliquid, reiciendis tenetur! Possimus, saepe magni libero rem
              quaerat non! Perferendis vitae rem beatae minus nihil debitis
              magni quaerat suscipit enim. Sint beatae recusandae totam
              perspiciatis, dolore sequi vel error, odio fugit atque
              reprehenderit ex laboriosam!
            </p>

            <p className="mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              cupiditate voluptatum corrupti temporibus esse, ratione qui
              asperiores, soluta totam pariatur quidem odio corporis blanditiis!
              Similique quas nesciunt suscipit vel nobis! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Enim quasi delectus doloremque!
              Sapiente, maxime?
            </p>

            <div className="relative mt-16">
              <div className="z-10 flex  items-center">
                <div className="before:absolute before:right-48 before:-top-5 before:-z-10 before:content-sparkles">
                  <ActionButton setSelectedPage={setSelectedPage}>
                    <p className="text-sm">Join Now</p>
                  </ActionButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
