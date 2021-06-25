import Link from "next/link";
import React from "react";
import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <div className="bar">
        <Link href="/">Sick Fits</Link>
      </div>
      <div className="sub-bar">Search</div>
      <Nav />
    </header>
  );
}
