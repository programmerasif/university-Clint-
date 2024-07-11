import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
    type: string;
    name: string;
    label?: string;
  };
  
const PHInput = ({name,type,label}:TInputProps) => {
 
    return <>
    {label ? label:null}
    <Controller name={name}
    render={({field}) =><Input {...field} type={type} id={name}  />}
    />
    
    </> 
};

export default PHInput;