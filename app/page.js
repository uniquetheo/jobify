import SignUpForm from "../components/SignUpForm";
import HeroSection from "../components/HeroSection";
import Steps from "../components/Steps";

export default function Home() {
  return (
    <main className="">
      <section>
        <HeroSection />
      </section>
      <div className="grid grid-cols-1 xl:grid-cols-[882px_1fr]">

      <section className="px-4 sm:px-6 md:px-8 lg:px-12">
        <Steps />
      </section>
      <section className="p-4 sm:p-6 md:p-8 lg:p-12 mx-auto">
        <SignUpForm />
      </section>
      </div>
    </main>
  );
}
