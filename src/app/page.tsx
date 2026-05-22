import illustration from "@/assets/images/illustration-dashboard.png";
import { LogoIcon } from "@/components/icons";
import SubscribeForm from "@/components/subscribe-form";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <header className="mx-auto mt-20 w-full max-w-160 px-7 text-center md:px-0">
        <LogoIcon className="mx-auto block h-auto w-14 md:w-22" />
      </header>
      <main className="mx-auto flex w-full max-w-160 flex-1 flex-col items-center px-7 text-center md:px-0">
        <h1 className="text-gray mt-8 text-2xl leading-snug md:mt-12 md:text-5xl">
          We are launching{" "}
          <span className="text-very-dark-blue font-bold">soon!</span>
        </h1>
        <p className="mt-3.5 text-xs md:mt-4 md:text-xl">
          Subscribe and get notified
        </p>
        <SubscribeForm />
        <Image
          src={illustration}
          alt="The Ping product dashboard previewing analytics charts"
          sizes="(min-width: 1024px) 640px, 90vw"
          priority
          className="mt-18 h-auto w-full md:mt-23.5"
        />
      </main>
    </>
  );
}
