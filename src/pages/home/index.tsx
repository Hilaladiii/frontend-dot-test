import { useSignOut } from "@/hooks/useSignOut";

const Home = () => {
  const { mutate: signOut } = useSignOut();
  return (
    <div>
      <button onClick={() => signOut()}>sign out bang</button>
    </div>
  );
};

export default Home;
