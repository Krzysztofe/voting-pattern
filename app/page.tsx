import FormToVote from "@/components/forms/formToVote/formToVote";
import HeaderFormPage from "@/components/headers/headerFormPage";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <HeaderFormPage />
      <FormToVote />
    </main>
  );
}
