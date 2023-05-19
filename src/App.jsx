import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from './components/App.module.css'

import './global.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Walter Jaworski"
            content="exemplo de post"
          />
          <Post
            author="Alice Jaworski"
            content="outro exemplo de post"
          />
        </main>
      </div>
    </>
  )
}
