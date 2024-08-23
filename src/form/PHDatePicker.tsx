import { DatePicker, Form,} from "antd";
import { Controller } from "react-hook-form";

type TDatePickerprops = {
  name: string;
  label?: string;
};

const PHDatePicker = ({ name,label }: TDatePickerprops) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <DatePicker {...field} size="large" style={{width:'100%'}}/>
          </Form.Item>
        )}
      />
    </>
  );
};

export default PHDatePicker;
