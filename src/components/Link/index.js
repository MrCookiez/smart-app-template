import React from "react";
import Link from "next/link";

function NavLink({ to, name }) {
  const { href, as } = to;
  return (
    <Link href={href} as={as || false} passHref>
      <a>{name}</a>
    </Link>
  );
}

export default NavLink;
