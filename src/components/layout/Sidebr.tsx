import { Layout, Menu } from "antd";
import { sideBrGenrator } from "../../utils/sideBrGenarator";
import { adminPaths } from "../../routes/admin.routs";
import { facultyPaths } from "../../routes/Faculty.routse";
import { studentPaths } from "../../routes/Student.routes";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSice";

const { Sider } = Layout;

const Sidebr = () => {
  const user = useAppSelector(selectCurrentUser)
  
  
  let sideBrItem;

  const userRole = {
    ADMIN: "admin",
    STUDENT: "student",
    FACULTY: "faculty",
  };

  switch (user?.role) {
    case userRole.ADMIN:
      sideBrItem = sideBrGenrator(adminPaths, "admin");
      break;
    case userRole.FACULTY:
      sideBrItem = sideBrGenrator(facultyPaths, "faculty");
      break;
    case userRole.STUDENT:
      sideBrItem = sideBrGenrator(studentPaths, "student");
      break;
    default:
      break;
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        style={{
          color: "white",

          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>PH Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sideBrItem}
      />
    </Sider>
  );
};

export default Sidebr;
