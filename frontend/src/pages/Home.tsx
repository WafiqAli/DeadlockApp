import Searchbar from "../components/Searchbar";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-main-background">
      <h1 className="text-6xl font-bold uppercase font-display">
        <span className="block text-primary-dark">Find a Deadlock</span>
        <span className="block text-gold-accent text-center">Player</span>
      </h1>
      <p className="text-center m-6 font-sans text-common-text">
        Track performance, explore hero builds, and review match <br /> history
        for any player.
      </p>
      <Searchbar placeholder="Search by player name or account ID" size="lg" />
    </div>
  );
};

export default Home;
