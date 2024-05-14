"use client";

import { TechDetailsClass } from "@/lib/types";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import ImageWrapper from "@/components/data-display/image-wrapper";

const TechDetails = ({
  url,
  logo,
  darkModeLogo,
  label,
  color,
}: TechDetailsClass) => {
  return (
    <div className="flex cursor-pointer flex-col items-center gap-2 rounded-xl p-6 shadow-lg transition duration-300 hover:shadow-xl">
      <Link noCustomization href={url} externalLink>
        <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={label}
          className="h-12 w-12 transition-transform duration-300 ease-in-out md:hover:scale-110"
        />
      </Link>
      <Typography variant="body1" className={`hover:text-`}>
        {label}
      </Typography>
    </div>
  );
};

export default TechDetails;
