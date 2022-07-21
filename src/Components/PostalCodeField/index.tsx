import cb from "classnames";
import "./index.css";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const PostalCodeField = ({ onChange, value = "", ...props }: Props) => {
  const handleOnChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.target.value !== "" &&
      !/^\d{1,5}-{0,1}(\d{1,4})?$/.test(event.target.value)
    ) {
      return;
    }
    onChange && onChange(event);
  };
  return (
    <input
      {...props}
      onChange={handleOnChange}
      value={value}
      className={cb("postal-code-field", {
        "postal-code-field__correct": /^\d{5}-{0,1}(\d{4})?$/.test(
          value.toString()
        ),
      })}
    />
  );
};

export default PostalCodeField;
