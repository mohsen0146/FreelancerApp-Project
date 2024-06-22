import Loading from "../../ui/Loading";
import useOwnerProjects from "./useOwnerProjects";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProjectRow from "./ProjectRow";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading />;
  if (!projects.length) return <Empty resourceName="پروژه" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>دسته‌بندی</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>تگ‌ها</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.TableBody>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.TableBody>
    </Table>
  );
}

export default ProjectTable;
