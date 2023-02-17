import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { SectionText } from "@/components";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

function ContactUs({ setSelectedPage }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
      return;
    }

    alert("passed");
  };

  const inputStyle =
    "mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 text-white placeholder-white";
  return (
    <section id={SelectedPage.ContactUs}>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div className="mx-auto w-5/6 basis-3/5 py-20">
          {/* Header here */}
          <SectionText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </SectionText>

          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
            eveniet eius enim quos perspiciatis iure, error accusamus nisi. Sit,
            nesciunt?
          </p>

          <div className="mt-10 justify-between gap-8  md:flex">
            <motion.div className=" basis-3/5 ">
              <form
                target="_blank"
                onSubmit={onSubmit}
                method="POST"
                action="https://formsubmit.co/0220b70c77fc5558b790ce2b606efa71"
              >
                <input className={inputStyle} placeholder="NAME" required />
                <input className={inputStyle} placeholder="EMAIL" required />

                <textarea
                  className={inputStyle}
                  placeholder="MESSAGE"
                  rows={5}
                />

                <button
                  type="submit"
                  className="rounded-lg bg-secondary-500 px-10 py-2"
                >
                  <p className="font-montserrat text-sm">Submit</p>
                </button>
              </form>
            </motion.div>

            <div className="mt-16 basis-2/5 md:mt-0 ">
              <img src={ContactUsPageGraphic} className="w-full" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ContactUs;
