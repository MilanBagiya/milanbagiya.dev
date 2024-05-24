import type { StaticImageData } from "next/image";

export type TechDetailsClass = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  label: string;
  url: string;
  color?: string;
};

export type ExperienceDetails = {
  logo: string | StaticImageData | null;
  text?: string;
  typoColor?: string;
  logoAlt: string;
  position: string;
  currentlyWorkHere?: boolean;
  startDate: Date;
  endDate?: Date;
  summary: string[];
};

export type ProjectDetails = {
  name: string;
  description: string;
  url: string;
  previewImage: string | StaticImageData;
  technologies: string[];
};

export type WorkDetails = {
  name: string;
  previewImage: string | any;
};

export type TestimonialDetails = {
  personName: string;
  personAvatar?: string | StaticImageData;
  testimonial: string;
  title: string;
};
