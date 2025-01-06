import { assets } from "@/assets/assets";
import Image from "next/image";


export default function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
       <div>
        <Image src={assets.profile_img} alt="" className="rounded-full w-32"/>
       </div>
       <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">Hi I am Tony Anderson <Image src={assets.hand_icon} alt="" className=" w-6"/> </h3>
       <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">Frontend web developer base in Korea</h1>
       <p className="mx-w-2xl mx-auto font-Ovo">I am a frontend developer from Korea, Busan with 10 years of experience in multiple companies like Microsoft, Testa and Apple. </p>

       <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
         <a href="#contact" className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-cenmter gap-2">Contact Me <Image src={assets.right_arrow_white} alt="" className="w-4"/></a>

         <a href="/sample-resume-pdf" download className="px-10 py-3 rounded-full border gray-500 flex items-center gap-2">CV <Image src={assets.download_icon} alt="" className="w-4"/></a>
       </div>
    </div>

  )
}
