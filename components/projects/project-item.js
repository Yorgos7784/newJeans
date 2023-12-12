import Image from "next/image";

export default function ProjectItem({ data }) {
  const projectTitle = data.properties.Name.title[0].plain_text;
  const youtubeLink = data.properties.Youtube.url;
  const descriotion = data.properties.Description.rich_text[0].plain_text;
  const imageSrc = data.cover.external.url;
  const tags = data.properties.Tag.multi_select;
  const releaseDate = data.properties.WorkPeriod.date.start.split("-");
  console.log(tags);
  return (
    <div className="project-card">
      <a href={youtubeLink}>
        <Image
          className="rounded-t-xl"
          src={imageSrc}
          alt="cover image"
          width={100}
          height={60}
          layout="responsive"
          quality={100}
        ></Image>
      </a>
      <div className="p-4 flex flex-col">
        <h className="text-2xl font-bold">{projectTitle}</h>
        <h3 className="mt-4 text-xl">{descriotion}</h3>
        <p className="text-sm">
          공개일 : {releaseDate[0]}년 {releaseDate[1]}월 {releaseDate[2]}일{" "}
        </p>
        <a href={youtubeLink}>뮤비 바로가기</a>
        <div className="flex items-start mt-2">
          {tags.map((tag) => {
            return (
              <h1
                className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
                key={tag.id}
              >
                {tag.name}
              </h1>
            );
          })}
        </div>
      </div>
    </div>
  );
}
