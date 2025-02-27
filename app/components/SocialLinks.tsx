import React from "react"; // Import React
import { FaGithub, FaLinkedinIn, FaRss } from "react-icons/fa6"; // Import your icons
import { TbMailFilled } from "react-icons/tb";
import { socialLinks } from "../config"; // Adjust the path as necessary

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className="text-accentL  hover:text-textL" />
    </a>
  );
}

export function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} />
      <a
        href="/rss.xml"
        target="_self"
        className="text-accentL hover:text-textL"
      >
        <FaRss />
      </a>
    </div>
  );
}
