import { Header } from "./components/Header";
import { Post } from "./Post";
import "./styles.css";

export function App() {
  return (
    <div>
      <Header />
      <Post author="Valter" content="teste 1" />
      <Post author="Luma" content="teste 2" />
    </div>
  );
}
