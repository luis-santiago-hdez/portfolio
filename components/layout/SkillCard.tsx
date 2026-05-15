import Image from "next/image";

type SkillCardProps = {
  name: string;
  icon: string;
};

export default function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl border border-zinc-800 backdrop-blur-sm hover:border-zinc-600 hover:scale-105 transition-all duration-300 ">
      <div className="relative w-14 h-14">
        <Image src={icon} alt={name} fill className="object-contain"></Image>
      </div>
      <p className="text-sm font-medium text-black">{name}</p>
    </div>
  );
}
