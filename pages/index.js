import { Toolbar } from "../components/toolbar";
import homeStyles from "../css/Home.module.css";

export default function IndexPage() {
  return (
    <div className={homeStyles.pageContainer}>
      <Toolbar />
      <div className={homeStyles.main}>
        <h1>Next.js News App</h1>
        <h2>You're one stop shop for the latest new articles</h2>
      </div>
    </div>
  );
}
