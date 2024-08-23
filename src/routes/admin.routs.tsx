
import AcademicFaculty from "../pages/Admin/academicManagement/AcademicFaculty";
import AcademicSemester from "../pages/Admin/academicManagement/AcademicSemester";
import CreatAcademicFaculty from "../pages/Admin/academicManagement/CreatAcademicFaculty";
import CreatAcademicSemister from "../pages/Admin/academicManagement/CreatAcademicSemister";
import CreatAccademicDepertment from "../pages/Admin/academicManagement/CreatAccademicDepertment";
import StudentData from "../pages/Admin/academicManagement/StudentData";
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
          name: 'Create A. Semester',
          path: 'create-academic-semester',
          element: <CreatAcademicSemister />,
        },
        {
          name: 'Academic Semesters',
          path: 'academic-semester',
          element: <AcademicSemester />,
        },
        {
          name: 'Create A. Faculty',
          path: 'create-academic-Faculty',
          element: <CreatAcademicFaculty />,
        },
        {
          name: 'Academic Faculty',
          path: 'academic-Faculty',
          element: <AcademicFaculty />,
        },
        {
          name: 'Create A. Deperment',
          path: 'creat-academic-Deperment',
          element: <CreatAccademicDepertment />,
        },
        {
          name: 'Academic Deperment',
          path: 'academic-Deperment',
          element: <CreatAccademicDepertment />,
        },
      ],
    },
    {
      name: 'User Management',
      children: [
        {
          name: 'Create Student',
          path: 'create-student',
          element: <CreatStudent />,
        },
        {
          name: 'Students',
          path: 'Student-data',
          element: <StudentData />,
        },
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
        
      ],
    },
  ];