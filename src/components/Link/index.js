import React from "react";
import Link from "next/link";

const NavLink = ({ to: { href, as }, name, prefetch, ...props }) => {
  return (
    <Link href={href} as={as} passHref prefetch={prefetch || false}>
      <a {...props}>{name}</a>
    </Link>
  );
};

export default NavLink;
