"use client";

import React from "react";

import { metaData, socialLinks } from "app/config";
import { SocialLinks } from "./SocialLinks";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <div className="drop"></div>
      <div className="wave"></div>
      {/* <time>© {YEAR}</time>{" "} */}
      <a
        className="no-underline"
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        {metaData.title}
      </a>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      <SocialLinks />
    </small>
  );
}
