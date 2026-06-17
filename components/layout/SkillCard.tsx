import Image from "next/image";
import { GrCertificate } from "react-icons/gr";

type SkillCardProps = {
  name: string;
  level?: string;
  icon: string;
  iconCertificate?: string;
};

export default function SkillCard({
  name,
  level,
  icon,
  iconCertificate,
}: SkillCardProps) {
  return (
    <div className="flex flex-col items-center gap-3 p-4 rounded-2xl border border-zinc-800 backdrop-blur-sm hover:border-zinc-600 hover:scale-105 transition-all duration-300 ">
      <div className="relative w-14 h-14 md:w-24 md:h-24 lg:w-34 lg:h-34">
        <Image src={icon} alt={name} fill className="object-contain"></Image>
      </div>
      <p className="text-base font-medium text-black">{name}</p>
      <p className="text-sm font-medium text-blue-400">{level}</p>
      <div>
        {iconCertificate}
        <a href=""></a>
      </div>
    </div>
  );
}
