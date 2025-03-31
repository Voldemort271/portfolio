export type navLinkDetails = {
  name: string;
  href: string;
};

const navLinks: navLinkDetails[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "My work",
    href: "/work",
  },
  {
    name: "About me",
    href: "/about",
  },
  {
    name: "Contact me",
    href: "/contact",
  },
];

export default navLinks;
