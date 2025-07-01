import Button from "./Button";

const HeroSection = () => {
  return (
    <section className="h-[80vh] text-center flex justify-center items-center flex-col space-y-6 ">

        <p className="font-semibold text-gray-600">EMAIL MARKETING & AUTOMATION PLATFORM</p>
        <h1 className="text-6xl font-bold">Email marketing that grows with you</h1>
        <p className="w-[35%]">
            Get the email tools you need today, with automation and AI that scale 
            with you — all in one affordable subscription
        </p>

        <div className="flex flex-col space-y-4 items-center">
          <Button body="Start 30-day FREE trail"/> 
            <span>Try us free  |  No credit card required  |  Cancel anytime</span>
        </div>
    </section>
  );
};

export default HeroSection;