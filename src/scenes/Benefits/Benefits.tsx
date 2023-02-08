import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { SectionText, Benefit } from "@/components";
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
      </motion.div>
    </section>
  );
};

export default Benefits;
