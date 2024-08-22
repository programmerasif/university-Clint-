/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";


type TFormConfig = {
    defaultValues?: Record<string, any>;
    resolver?:any
  };
  
  type TFormProps = {
    onSubmit: SubmitHandler<FieldValues>;
    children: ReactNode;
  } & TFormConfig;
  
const PHForm = ({ onSubmit, children, defaultValues,resolver }: TFormProps) => {
  const formConfig: TFormConfig = {};

  if (defaultValues) {
    formConfig['defaultValues'] = defaultValues;
  }
  if (resolver) {
    formConfig['resolver'] = resolver;
  }

  const methods = useForm(formConfig);

  return (
    <div style={{ marginBottom: '20px' }}>
    <FormProvider {...methods}>
      <Form layout="vertical"  size="large" onFinish={methods.handleSubmit(onSubmit)}>{children}</Form>
    </FormProvider>
    </div>
  );
};

export default PHForm;
