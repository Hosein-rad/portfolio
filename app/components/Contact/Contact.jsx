import Image from "next/image";

const Contact = () => {
  return (
    <div
      id="contact"
      className="h-150 md:h-fit w-full pb-5 pt-15 md:pt-25 flex flex-col items-center justify-center text-black dark:text-white bg-linear-to-b from-sky-200 to-stone-300 dark:from-sky-950 dark:to-black"
    >
      <h1 className="w-fit px-10 md:px-20 py-2 text-black dark:text-white text-center text-3xl md:text-5xl border-white dark:border-black border-b-4 mask-x-from-85%">
        Let&apos;s Get in Touch
      </h1>

      <div className="my-5 flex items-center justify-center">
        {/* phone number */}
        <div className="my-4 flex flex-col md:flex-row items-center">
          <Image
            src="/svgs/call.svg"
            alt="phone svg"
            width={30}
            height={30}
            className="mb-3 md:mb-0 md:mx-2"
          />
          {/* <p className="mx-2">phone number:</p> */}
          <p className="mx-2 pt-1">+98 936 742 8246</p>
          <p className="mx-2 pt-1">+98 990 895 1481</p>
        </div>
      </div>

      {/* Socials */}
      <div className="flex flex-row gap-6 mb-10">
        {/* Eita Link */}
        <a href="https://www.eitaa.ir/HR_Dev" target="_blank">
          <Image
            src="/svgs/eitaa_logo.svg"
            alt="Eita icon SVG"
            width={20}
            height={20}
            className="size-8 md:size-10 mb-2 hover:mask-radial-from-black hover:scale-110 duration-300 rounded-3xl"
          />
        </a>
        {/* rubika Link */}
        <a href="https://rubika.ir/hoseini_rad" target="_blank">
          <Image
            src="/images/rubika.png"
            alt="rubika logo"
            width={200}
            height={200}
            className="size-8 md:size-10 mb-2 hover:mask-radial-from-purple-700 hover:scale-110 duration-300 rounded-3xl"
          />
        </a>

        {/* Bale Link */}
        <a href="https://ble.ir/hosein_dev" target="_blank">
          <Image
            src="/svgs/bale.svg"
            alt="Bale Icon SVG"
            width={30}
            height={30}
            className="size-8 md:size-10 mb-2 hover:mask-radial-from-purple-700 hover:scale-110 duration-300"
          />
        </a>

        {/* Whatsapp */}
        <a href="https://wa.me/+989367428246" target="_blank">
          <Image
            src="/images/whatsapp.png"
            alt="rubika logo"
            width={200}
            height={200}
            className="size-8 md:size-10 mb-2 hover:mask-radial-from-purple-700 hover:scale-110 duration-300 rounded-3xl"
          />
        </a>
        {/* Telegram Link */}
        <a href="https://t.me/hosein_devv" target="_blank">
          <Image
            src="/svgs/telegram.svg"
            alt="telegram icon SVG"
            width={20}
            height={20}
            className="p-2 size-8 md:size-10 mb-2 hover:mask-radial-from-black hover:scale-110 rounded-2xl bg-blue-600 duration-300"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
