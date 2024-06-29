import { HiCollection, HiHome, HiUsers } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";
import { HiSquare3Stack3D } from "react-icons/hi2";

function AdminLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to="dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomNavLink>
        <CustomNavLink to="users">
          <HiUsers />
          <span>کاربران</span>
        </CustomNavLink>

        <CustomNavLink to="projects">
          <HiCollection />
          <span>پروژه‌ها</span>
        </CustomNavLink>
        <CustomNavLink to="proposals">
          <HiSquare3Stack3D />
          <span>درخواست‌ها</span>
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
}

export default AdminLayout;
