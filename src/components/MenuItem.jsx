import Link from "next/link";
import React from "react";

export const MenuItem = ({ mn }) => {
  return <Link href={mn.url}>{mn.name}</Link>;
};
