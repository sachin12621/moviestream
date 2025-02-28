import SEO from "../components/SEO";
import MovieList from "../components/MovieList";
// import AdComponent from "../components/AdComponent";

const Home = () => (
  <div>
    <SEO title="MovieStream - Watch Free Movies" description="Watch the best movies online for free!" />
    <h1>Welcome to MovieStream</h1>
    {/* <AdComponent /> */}
    <MovieList />
  </div>
);

export default Home;
