import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  console.log(styles.wrapper);
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Valter" content="teste 1" />
          <Post author="Luma" content="teste 2" />
        </main>
      </div>
    </div>
  );
}
