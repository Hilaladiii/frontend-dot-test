import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const signUpSchema = z
  .object({
    email: z.string().min(1, "Email required").email(),
    password: z.string().min(1, "Password required"),
    confirmPassword: z.string().min(1, "Confirmation password required"),
  })
  .refine((data) => data.password == data.confirmPassword, {
    message: "Password and confirm password must be the same!",
    path: ["confirmPassword"],
  });
type TSignUp = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TSignUp>({
    resolver: zodResolver(signUpSchema),
  });
  const onSubmit: SubmitHandler<TSignUp> = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full max-w-md">
      <Card className="shadow-sm bg-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">
            Join the quiz community
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <Input
              type="email"
              register={register}
              name="email"
              placeholder="Enter your email"
              label="Email"
              errors={errors.email}
            />
            <Input
              type="password"
              register={register}
              name="password"
              placeholder="Enter your password"
              label="Password"
              errors={errors.password}
            />
            <Input
              type="password"
              register={register}
              name="confirmPassword"
              placeholder="Enter your confirmation password"
              label="Confirm password"
              errors={errors.confirmPassword}
            />
            <Button className="mt-5 py-5">
              Sign Up <ArrowRight />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
