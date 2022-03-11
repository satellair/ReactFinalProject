import Image from "next/image";

interface Props {
  img: any;
  theme: string;
  year: string;
  name: string;
}

const EduCard = ({ img, theme, year, name }: Props) => {
  return (
    <div
      className={`${
        theme === "light" ? "border-black" : "border-white "
      } max-w-md mx-auto overflow-hidden md:max-w-2xl bg-transparent rounded-xl border-2`}
    >
      <div className="flex md:w-max">
        <div
          className="justify-center h-48 w-48"
          style={{ maxHeight: "300px" }}
        >
          <Image
            className="object-fixed scale-75"
            src={img}
            layout="responsive"
          />
        </div>
        <div className="md:w-1/2 w-full p-8">
          <div className="uppercase tracking-wide text-lg font-semibold">
            {year}
          </div>
          <h3 className="block mt-3 text-3xl leading-tight font-bold hover:underline">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default EduCard;
