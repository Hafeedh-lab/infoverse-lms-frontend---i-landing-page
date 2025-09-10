import { EyeIcon, HelpCircleIcon } from "lucide-react";
import React from "react";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";

export const IiiLoginPage = (): JSX.Element => {
  return (
    <main className="bg-white grid justify-items-center [align-items:start] w-screen">
      <div className="bg-white w-[1440px] h-[1024px]">
        <div className="relative w-[1375px] h-[961px] top-[31px] left-[33px] bg-[#33a1cd] rounded-[30px]">
          <section className="absolute w-[665px] h-[961px] top-0 left-[710px] bg-[#f9f9f9] rounded-[30px]">
            <div className="absolute w-[519px] h-16 top-[247px] left-[69px]">
              <div className="w-[521px] h-16">
                <Input
                  className="w-[519px] h-16 bg-[#bdd0d2] rounded-[15px] border-0 text-xl text-[#7a7a7a] [font-family:'Inter',Helvetica] font-normal placeholder:text-[#7a7a7a]"
                  placeholder="Email"
                  type="email"
                />
              </div>
            </div>

            <Button className="absolute w-[519px] h-16 top-[519px] left-[69px] bg-[#dd7c5e] rounded-[15px] text-white text-xl [font-family:'Inter',Helvetica] font-normal hover:bg-[#dd7c5e]/90 h-auto">
              Log In
            </Button>

            <h1 className="absolute w-[358px] top-[117px] left-[153px] [font-family:'Inter',Helvetica] font-normal text-black text-5xl tracking-[0] leading-[normal]">
              Welcome Back!
            </h1>

            <button className="absolute w-[179px] top-[423px] left-[417px] [font-family:'Inter',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap bg-transparent border-0 cursor-pointer">
              Forgot Password?
            </button>

            <button className="absolute w-[267px] top-[614px] left-[199px] [font-family:'Inter',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap bg-transparent border-0 cursor-pointer">
              Not a member yet? Sign Up
            </button>

            <p className="absolute w-[332px] top-[175px] left-[166px] [font-family:'Inter',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Continue your journey to success!
            </p>

            <div className="absolute w-[221px] h-7 top-[478px] left-[69px] flex items-center gap-2">
              <Checkbox className="w-[27px] h-7 bg-[#ebe8e8] rounded-[5px] shadow-[inset_0px_4px_4px_#00000040] border-0" />
              <label className="[font-family:'Inter',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap cursor-pointer">
                Keep me signed In
              </label>
            </div>

            <div className="absolute w-[519px] h-16 top-[343px] left-[69px]">
              <div className="relative h-16">
                <Input
                  className="w-[519px] h-16 bg-[#bdd0d2] rounded-[15px] border-0 text-xl text-[#7a7a7a] [font-family:'Inter',Helvetica] font-normal placeholder:text-[#7a7a7a] pr-12"
                  placeholder="Password"
                  type="password"
                />
                <EyeIcon className="absolute w-6 h-6 top-[21px] right-4 text-[#7a7a7a] cursor-pointer" />
              </div>
            </div>

            <div className="absolute w-[521px] h-[23px] top-[676px] left-[69px] flex items-center">
              <Separator className="flex-1 bg-[#7a7a7a]" />
              <span className="px-4 [font-family:'Inter',Helvetica] font-normal text-[#7a7a7a] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                OR
              </span>
              <Separator className="flex-1 bg-[#7a7a7a]" />
            </div>

            <button className="absolute w-[74px] h-6 top-[928px] left-[583px] flex items-center gap-1 bg-transparent border-0 cursor-pointer">
              <HelpCircleIcon className="w-[21px] h-[22px] text-black" />
              <span className="[font-family:'Inter',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Help
              </span>
            </button>

            <Button className="absolute w-[519px] h-16 top-[736px] left-[69px] bg-[#bdd0d2] rounded-[15px] text-black text-xl [font-family:'Inter',Helvetica] font-normal hover:bg-[#bdd0d2]/90 h-auto flex items-center justify-center gap-3">
              <img
                className="w-6 h-[22px] object-cover"
                alt="Google"
                src="https://c.animaapp.com/mfdtd9diDt6snj/img/2702602-1.png"
              />
              Continue with Google
            </Button>
          </section>

          <div className="absolute w-[77px] top-[477px] left-[298px] [font-family:'Inter',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
            Image
          </div>

          <img
            className="absolute w-[115px] h-[115px] top-[7px] left-[7px] rounded-[56px] object-cover"
            alt="With BG"
            src="https://c.animaapp.com/mfdtd9diDt6snj/img/with-bg-1.png"
          />
        </div>
      </div>
    </main>
  );
};
