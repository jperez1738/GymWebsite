import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { ActionButton } from "@/components/";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbs from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const flexBetween = "flex items-center justify-between";

  return (
    <section
      id={SelectedPage.Home}
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0 "
    >
      {/* Image and Main Header */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6 "
      >
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="Home Page Text" />
              </div>
            </div>
            <p className="my-8 text-sm md:text-start">
              Unrivaled Gym, Unparalled Training Fitness Classess. World Class
              Studious to get the Body Shapes that you Dream of. Get your Dream
              Body Now!
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className=" flex items-center"
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              <p className="text-sm">Join Now</p>
            </ActionButton>
            <AnchorLink className="px-10 text-primary-500 underline">
              <p>Learn more</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* Image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img
            src={HomePageGraphic}
            alt="Home Page Graphic"
            className="self-center "
          />
        </div>
      </motion.div>

      {/* Sponsors Section */}

      {isAboveMediumScreens && (
        <div className="h-[150px] w-full justify-center bg-primary-100 py-10">
          <div className="mx-auto  w-5/6 ">
            <div className="flex w-3/5 items-center justify-between">
              <img alt="redbull" src={SponsorRedBull} />
              <img alt="forbs" src={SponsorForbs} />
              <img alt="fortune" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
