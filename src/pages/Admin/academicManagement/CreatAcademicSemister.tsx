import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../form/PHSelect";
import { semisterOption } from "../../../constant/semester";
import { monthOptions } from "../../../constant/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemisterSchema } from "../../../Schema/AcademicManagmentSchema";
import { useAddAcademicSemesterMutation } from "../../../redux/features/Admin/AcademicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";





const CreatAcademicSemister = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation()
  const toastId = toast.loading('Creating...');
  const onSubmit: SubmitHandler<FieldValues> =async (data) => {
    const name = semisterOption[Number(data.name - 1)].label
    const semesterData = {
        name,
        code : data?.name,
        year:data.year,
        startMonth:data?.startMonth,
        endMonth:data?.endMonth
    }
    try {
      const res = (await addAcademicSemester(semesterData)) as TResponse;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success('Semester created', { id: toastId });
      }
    } catch (err) {
      toast.error('Something went wrong', { id: toastId });
    }
  };
  const currentYear = new Date().getFullYear();
  const yearOption = [0,1,2,3,4].map((number) => ({
    value:String(currentYear + number),
    label: String(currentYear + number)
  }))
  
console.log(monthOptions);


  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit} resolver={zodResolver(academicSemisterSchema)}>

          <PHSelect label="Name" name="name" options={semisterOption}/>
          <PHSelect label="Year" name="year" options={yearOption}/>
          <PHSelect label="Start Month" name="startMonth" options={monthOptions}/>
          <PHSelect label="End Month" name="endMonth" options={monthOptions}/>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreatAcademicSemister;
