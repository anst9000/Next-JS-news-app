import { useRouter } from "next/router";
import tbStyles from "../css/Toolbar.module.css";

export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className={tbStyles.main}>
      <div onClick={() => router.push("/")}>Home</div>
      <div onClick={() => router.push("/feed/1")}>Feed</div>
      <div onClick={() => router.push("/eom")}>EOM</div>
      <div
        onClick={() => (window.location.href = "https://twitter.com/portexe")}
      >
        Twitter
      </div>
    </div>
  );
};
