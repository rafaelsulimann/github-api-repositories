import GitHubLogo from "../../assets/github-logo.svg";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const githubUserSchema = z.object({
  user: z.string().min(1, "Campo Obrigatório"),
});

type GithubUserSchema = z.infer<typeof githubUserSchema>;

export default function HomeClient() {
  const { handleSubmit, register } = useForm<GithubUserSchema>({
    resolver: zodResolver(githubUserSchema),
  });

  function handleGithubUser(data: GithubUserSchema) {
    console.log(data);
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4">
      <div className="space-y-2">
        <img src={GitHubLogo} alt="GitHub Logo" className="w-32" />
        <h1 className="text-2xl font-bold">API GitHub</h1>
      </div>
      <form onSubmit={handleSubmit(handleGithubUser)} className="flex gap-1">
        <Input
          className="w-60"
          type="text"
          id="user"
          {...register("user")}
          placeholder="Usuário"
        />
        <Button
          type="submit"
          variant="default"
          className="border border-zinc-50"
        >
          <Search />
        </Button>
      </form>
    </div>
  );
}
