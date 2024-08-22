import { Button, Col, Flex } from "antd";
import PHForm from "../../../form/PHForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHInput from "../../../form/PHInput";
// import { toast } from "sonner";


const CreatAcademicFaculty = () => {
    
    // const toastId = toast.loading('Creating...');
    const onSubmit: SubmitHandler<FieldValues> =async (data) => {
      
      console.log(data);
      
     
    };
    
 
  
  
    return (
      <Flex justify="center" align="center">
        <Col span={6}>
          <PHForm onSubmit={onSubmit} >
  
          <PHInput type={"text"} name={"faculty"} label={"Type your Faculty Name"} />
            <Button htmlType="submit">Submit</Button>
          </PHForm>
        </Col>
      </Flex>
    );
  };

export default CreatAcademicFaculty;