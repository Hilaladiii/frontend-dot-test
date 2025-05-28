import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useSignIn } from "@/hooks/useSignIn";

const signInSchema = z.object({
  email: z.string().min(1, "Email required").email(),
  password: z.string().min(1, "Password required"),
});
type TSignIn = z.infer<typeof signInSchema>;

const SignIn = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TSignIn>({
    resolver: zodResolver(signInSchema),
  });
  const { mutate: signIn, isPending } = useSignIn();
  const onSubmit: SubmitHandler<TSignIn> = (data) => {
    signIn(data);
  };
  return (
    <div className="w-full max-w-md">
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">
            Continue your journey
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
            <Button className="mt-5 py-5" isLoading={isPending}>
              Sign In <ArrowRight />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
