import { WorkDetails as WorkDetailsType } from "@/lib/types";

type WorksDetailsProps = WorkDetailsType & {
  layoutType: "default" | "reverse";
};

const Works = ({ name, previewImage }: WorksDetailsProps) => {
  return (
    <>
      <figure className="project-card custom-cursor-on-hover duration-400 w-400 transform transition ease-out">
        <figcaption className="text-trunc">{name}</figcaption>
        <picture className="h-[608px]">
          <img src={previewImage} alt={name} />
        </picture>
        <div className="media-counter">
          <span className="image">1</span>
        </div>
      </figure>
    </>
  );
};

export default Works;
