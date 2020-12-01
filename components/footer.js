import React from "react";
import Router from "next/router";
import Link from "next/link";

export default function Footer() {
  const linkStyle = {
    fontSize: "1rem",
    fontFamily: "DM Sans Medium",
    textDecoration: "underline",
  };

  return (
    <footer
      style={{
        width: "100vw",
        height: "50px",
        backgroundColor: "white",
        position: "fixed",
        left: "0",
        bottom: "0",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", height: "100%" }}>
        <div style={linkStyle}>
          <Link href="/">
            <a>home</a>
          </Link>
        </div>
        <div style={linkStyle}>
          <Link href="/blog">
            <a>blog</a>
          </Link>
        </div>
        <div style={linkStyle}>
          <Link href="/projects">
            <a>projects</a>
          </Link>
        </div>
        <div style={linkStyle}>
          <Link href="/about">
            <a>about</a>
          </Link>
        </div>
        <div style={linkStyle}>
          <Link href="/links">
            <a>links</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
