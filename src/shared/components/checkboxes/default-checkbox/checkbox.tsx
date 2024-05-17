import { useId, ChangeEvent } from "react";
import s from "./checkbox.module.scss";
import svgMaker from "@/shared/svg-maker/svg-maker";

interface ICheckBoxProps {
  children?: React.ReactNode;
  checked: boolean;
  icon?: string;
  style?: "default" | "bordered";
  // eslint-disable-next-line no-unused-vars
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  className?: string;
  iconClassName?: string;
}

function CheckBox({
  checked,
  children,
  className,
  icon,
  iconClassName,
  onChange,
  style = "default",
}: ICheckBoxProps) {
  const id = useId();

  const checkStyle = {
    default: s.default,
    bordered: s.bordered,
  };
  return (
    <label
      className={`gap-rem-[8px] flex items-center ${className} ${checkStyle[style]}`}
    >
      <input
        checked={checked}
        className={s.checkbox}
        id={id}
        onChange={onChange}
        type="checkbox"
      />
      <label htmlFor={id}>
        <span className={s.checkbox_icon} />
        {icon && svgMaker(icon, iconClassName)}
      </label>
      <span className="text-rem-[14px] leading-rem-[100%] font-400 text-black">
        {children}
      </span>
    </label>
  );
}

export default CheckBox;
