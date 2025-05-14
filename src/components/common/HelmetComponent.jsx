import { Helmet } from "react-helmet";

const HelmetComponent = ({ item }) => {
  return (
    <Helmet>
      <title>{item?.meta_title}</title>
      <meta name="description" content={item?.meta_description} />
      <meta name="keywords" content={item?.meta_keywords} />
      <meta name="author" content={item?.meta_author} />
    </Helmet>
  );
};

export default HelmetComponent;
