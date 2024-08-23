import { Button, Col, Flex } from "antd";
import PHForm from "../../../form/PHForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHInput from "../../../form/PHInput";
import { useAddAcademicFacultyMutation } from "../../../redux/features/Admin/AcademicManagement.api";




const CreatAcademicFaculty = () => {
  const [creatfaculty] = useAddAcademicFacultyMutation()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const facultyName = {
      name: data?.faculty,
    };
    
    try {
        const res = await creatfaculty(facultyName)
    console.log(res);
    } catch (error) {
        console.log(error);
        
    }
    
   
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHInput
            type={"text"}
            name={"faculty"}
            label={"Type your Faculty Name"}
          />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreatAcademicFaculty;
