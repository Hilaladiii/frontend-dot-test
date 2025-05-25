import { type InputHTMLAttributes } from "react";
import type {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { cn } from "../../utils/cn";

interface InputProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<T>;
  name: Path<T>;
  errors?: FieldError;
  label: string;
  className?: string;
}

export const Input = <T extends FieldValues>({
  register,
  errors,
  name,
  label,
  className,
  ...props
}: InputProps<T>) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-semibold text-base">
        {label}
      </label>
      <input
        id={name}
        type="text"
        {...props}
        {...register(name)}
        className={cn(
          "border-2 border-blue-200 py-2.5 px-4 w-full max-w-[25rem] rounded-lg placeholder:text-tertiary focus:outline-none focus:ring-1 focus:ring-blue-600 placeholder:text-gray-500",
          className
        )}
      />
      {errors && <p className="text-red-500 text-sm">{errors.message}</p>}
    </div>
  );
};
