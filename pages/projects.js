import Layout from "@/components/layout";
import ProjectItem from "@/components/projects/project-item";
import { TOKEN, DATABASE_ID } from "../config";

export default function Projects({ projects }) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-5 mb-10">
        <h1 className="text-4xl font-bold sm:text-6xl">
          총 프로젝트 :
          <span className="pl-4 text-blue-500">{projects.results.length}</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8">
          {projects.results.map((project) => {
            return <ProjectItem key={project.id} data={project}></ProjectItem>;
          })}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "WorkPeriod",
          direction: "ascending",
        },
      ],
    }),
  };

  const projects = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  )
    .then((response) => response.json())
    .then()
    .catch((err) => consolg.error(err));

  console.log(projects);
  // const projects = response.results;
  // console.log(res);
  // console.log(res.results);

  // const projectNames = res.results.map((aProject) => {
  //   console.log(JSON.parse());

  //   return aProject.properties.Name.title[0].plain_text;
  // });

  // console.log(`projectIds = ${projectNames}`);

  return {
    props: {
      projects,
    },
  };
}
