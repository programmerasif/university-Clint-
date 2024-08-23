import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../form/PHForm";
import PHSelect from "../../../form/PHSelect";
import { useAddAcademicDepertmentMutation, useGetAllFacultysQuery } from "../../../redux/features/Admin/AcademicManagement.api";
import PHInput from "../../../form/PHInput";

const CreatAccademicDepertment = () => {
    const {data} = useGetAllFacultysQuery(undefined)
   const [addDepertment] =useAddAcademicDepertmentMutation()
   

   const facultyOption = data?.data?.map((item) => ( {value:item?._id, label:item?.name}))
  
    const onSubmit: SubmitHandler<FieldValues> =async (data) => {
      
      const depertmentData = {
          name: data?.Depertment,
          academicFaculty: data?.faculty
      }
      try {
       const res = await addDepertment(depertmentData);
       console.log(res);
       
      } catch (error) {
        console.log(error);
        
      }
      
    };
       return (
      <Flex justify="center" align="center">
        <Col span={6}>
          <PHForm onSubmit={onSubmit} >
  
            <PHSelect label="Select Faculty" name="faculty" options={facultyOption}/>
            <PHInput
            type={"text"}
            name={"Depertment"}
            label={"Type your Depertment Name"}
          />
            <Button htmlType="submit">Submit</Button>
          </PHForm>
        </Col>
      </Flex>
    );
  };
   

export default CreatAccademicDepertment;