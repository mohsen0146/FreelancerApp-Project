import {
  HiCollection,
  HiOutlineViewGrid,
  HiUsers,
} from "react-icons/hi";
import Stat from "../../ui/Stat";

function Stats({ proposals, users, projects }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      <Stat
        color="yellow"
        title="کاربران"
        value={users}
        icon={<HiUsers className="w-20 h-20" />}
      />
      <Stat
        color="primary"
        title="درخواست‌ها"
        value={proposals}
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />
      <Stat
        color="green"
        title="پروژه‌ها"
        value={projects}
        icon={<HiCollection className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;
