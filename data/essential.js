import {
  BanIcon,
  Banknote,
  BookTemplate,
  DollarSign,
  GalleryHorizontal,
  Images,
  PlayIcon,
  Settings,
  User,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaStar,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa";

export const primaryMenu = [
  { name: "Dashboard", link: "/dashboard", icon: <GalleryHorizontal /> },
  { name: "My Profile", link: "/dashboard/profile", icon: <User /> },
  {
    name: "Template Gallery",
    link: "/dashboard/template-gallery",
    icon: <Images />,
  },
  { name: "My Plan", link: "/dashboard/plan", icon: <Banknote /> },
  { name: "Settings", link: "/dashboard/settings", icon: <Settings /> },
];

// export const secondaryMenu = [
//   { name: "About Us", link: "/about-us", slug: "about-us" },
//   { name: "FAQ", link: "/faq", slug: "faq" },
//   { name: "Privacy Policy", link: "/privacy-policy", slug: "privacy-policy" },
// ];

export const footerMenu1 = [
  { name: "About Us", link: "/about-us" },
  { name: "Pricing", link: "/pricing" },
  { name: "FAQ", link: "/faq" },
];

export const footerMenu2 = [
  { name: "Terms and Conditions", link: "/terms-and-conditions" },
  { name: "Privacy Policy", link: "/privacy-policy" },
  { name: "Customer Support", link: "/customer-support" },
];

export const footerMenu3 = [
  { name: "Features", link: "/features" },
  { name: "Create Account", link: "/sign-up" },
  { name: "Customer Support", link: "/customer-support" },
];

export const socials = [
  { name: "Youtube", link: "https://youtube.com/jobify", icon: <FaYoutube /> },
  {
    name: "Facebook",
    link: "https://facebook.com/jobify",
    icon: <FaFacebookF />,
  },
  {
    name: "Instagram",
    link: "https://instagram.com/jobify",
    icon: <FaInstagram />,
  },
  { name: "Tiktok", link: "https://tiktok.com/jobify", icon: <FaTiktok /> },
];

export const steps = [
  {
    title: "Build your Profile",
    description:
      "Create an account with Jobify and get access to our professional CV and cover letter builder.",
    image: "/working-woman.jpg",
    count: "01",
  },
  {
    title: "Choose a Template",
    description:
      "Select a template from our gallery that best suits your style and profession.",
    image: "/workspace.jpg",
    count: "02",
  },
  {
    title: "Customize",
    description:
      "Customize your CV and cover letter to match your personal brand.",
    image: "/man-working.jpg",
    count: "03",
  },
  {
    title: "Download",
    description:
      "Download your CV and cover letter and start applying for jobs.",
    image: "/typing-mobile.jpg",
    count: "04",
  },
];
