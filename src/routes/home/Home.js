import Directory from "../../components/directory/Directory";
import { categories } from "../../categories";

export default function Home() {
  return (
    <div>
      <Directory categories={categories} />
    </div>
  );
}
