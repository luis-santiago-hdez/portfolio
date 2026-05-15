import NextLink from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function Link({ href, children, className = "" }: Props) {
  return (
    <NextLink href={href} className={className}>
      {children}
    </NextLink>
  );
}
