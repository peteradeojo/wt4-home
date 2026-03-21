import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Whatthefour.com" },
    { name: "description", content: "Whatthefour.com" },
  ];
}

export default function Home() {
  return <Welcome />;
}
