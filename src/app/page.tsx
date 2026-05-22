import illustration from "@/assets/images/illustration-dashboard.png";
import { LogoIcon } from "@/components/icons";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <header className="mx-auto w-full max-w-160 px-7 pt-20 text-center">
        <LogoIcon className="mx-auto block h-auto w-14" />
      </header>
      <main className="mx-auto flex w-full max-w-160 flex-1 flex-col items-center px-7 text-center">
        <h1 className="text-gray mt-32 text-2xl leading-snug">
          We are launching{" "}
          <span className="text-very-dark-blue font-bold">soon!</span>
        </h1>
        <p className="mt-3.5 text-xs">Subscribe and get notified</p>
        {/* SubscribeForm is added in step 5 */}
        <Image
          src={illustration}
          alt="The Ping product dashboard previewing analytics charts"
          sizes="(min-width: 1024px) 640px, 90vw"
          priority
          className="mt-20 h-auto w-full"
        />
      </main>
    </>
  );
}
