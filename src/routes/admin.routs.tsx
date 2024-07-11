
import AcademicSemester from "../pages/Admin/academicManagement/AcademicSemester";
import AdminDashBoard from "../pages/Admin/AdminDashBoard";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreatStudent from "../pages/Admin/CreateStudent";




export const adminPaths = [
    {
      name: 'Dashboard',
      path: 'dashboard',
      element: <AdminDashBoard/>,
    },
    {
      name:'Academic Semester',
      children: [
        {
          name: 'Academic Semester',
          path: 'academic-semester',
          element: <AcademicSemester />,
        }
      ],
    },
    {
      name: 'User Management',
      children: [
        {
          name: 'Create Admin',
          path: 'create-admin',
          element: <CreateAdmin />,
        },
        {
          name: 'Create Faculty',
          path: 'create-faculty',
          element: <CreateFaculty />,
        },
        {
          name: 'Create Student',
          path: 'create-student',
          element: <CreatStudent />,
        }
      ],
    },
  ];