import { Helmet } from "react-helmet";

const SEO = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content="movies, online streaming, free movies" />
    <meta name="robots" content="index, follow" />
  </Helmet>
);

export default SEO;
