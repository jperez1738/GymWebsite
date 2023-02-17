import Logo from "@/assets/Logo.png";
function Footer() {
  return (
    <div className="w-full bg-primary-100 py-20">
      {/* wrapper here */}
      <div className="mx-auto w-5/6 flex-wrap gap-8 md:flex">
        {/* Column 1 */}
        <div className="mt-16 flex-grow basis-1/4 md:mt-0">
          <img src={Logo} className="mb-5" />
          <p className="mb-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            sequi consequuntur deserunt odio cupiditate est iste ducimus!
            Aliquid, voluptatibus, quod repudiandae placeat omnis explicabo
            sequi sint illo veniam perspiciatis autem.
          </p>
          <p>© Evogym All Rights Reserved</p>
        </div>

        {/* Column 2 */}
        <div className="mt-16  basis-1/4 md:mt-0">
          <h1 className="mb-5 font-bold">Links</h1>

          <p className="mb-5">Lorem, ipsum dol</p>
          <p className="mb-5">Text 3</p>
        </div>

        {/* Column 3 */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h1 className="mb-5 font-bold">Contact Us</h1>

          <p className="mb-5">Lorem, ipsum dolor sit am</p>
          <p className="mb-5">Text 3</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
