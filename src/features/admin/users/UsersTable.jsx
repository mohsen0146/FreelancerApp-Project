import Empty from "../../../ui/Empty";
import Loading from "../../../ui/Loading";
import Table from "../../../ui/Table";
import useUsers from "../useUsers";
import UsersRow from "./UsersRow";

function UsersTable() {
  const { isLoading, users } = useUsers();

  if (isLoading) return <Loading />;
  if (!users.length) return <Empty resourceName="کاربری" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>نام کاربر</th>
        <th>ایمیل</th>
        <th>شماره موبایل</th>
        <th>نقش</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.TableBody>
        {users.map((user, index) => (
          <UsersRow key={user._id} user={user} index={index} />
        ))}
      </Table.TableBody>
    </Table>
  );
}

export default UsersTable;
