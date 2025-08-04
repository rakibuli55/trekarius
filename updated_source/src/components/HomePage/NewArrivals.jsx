import Container from "../container/Container";
import ProductCard from "./ProductCard";

function NewArrivals() {
  const products = [
    {
      id: 1,
      imgFront: "https://i.ibb.co.com/qnhvDVT/6-C389338-ED3-B-455-B-BC9-F-B8-CE208-E60-DE.jpg",
      imgBack: "https://i.ibb.co.com/Tr7m6m4/file-28-1.png",
      title: "Moda 20L Backpack - Travl bag",
      prevPrice: "57.50",
      currentPrice: "115",
    },
    {
      id: 2,
      imgFront: "https://i.ibb.co.com/BgKn0zX/CAEDC530-F0-B6-4963-94-B1-C80-D2-D4-EAF39.jpg",
      imgBack: "https://i.ibb.co.com/Tr7m6m4/file-28-1.png",
      title: "Moda 20L Backpack - Travl bag",
      prevPrice: "57.50",
      currentPrice: "115",
    },
    {
      id: 3,
      imgFront: "https://i.ibb.co.com/njZLwLK/E9-D75622-D5-E7-47-C4-98-DF-92-C23-F33-EF7-F.jpg",
      imgBack: "https://i.ibb.co.com/Tr7m6m4/file-28-1.png",
      title: "Moda 20L Backpack - Travl bag",
      prevPrice: "57.50",
      currentPrice: "115",
    },
    {
      id: 4,
      imgFront: "https://i.ibb.co.com/qnhvDVT/6-C389338-ED3-B-455-B-BC9-F-B8-CE208-E60-DE.jpg",
      imgBack: "https://i.ibb.co.com/Tr7m6m4/file-28-1.png",
      title: "Moda 20L Backpack - Travl bag",
      prevPrice: "57.50",
      currentPrice: "115",
    },
    {
      id: 5,
      imgFront: "https://i.ibb.co.com/R6WQXnk/BCBF2-E43-D941-44-CE-9-B13-111-CFE6-F9-B9-E.jpg",
      imgBack: "https://i.ibb.co.com/Tr7m6m4/file-28-1.png",
      title: "Moda 20L Backpack - Travl bag",
      prevPrice: "57.50",
      currentPrice: "115",
    },
    {
      id: 6,
      imgFront: "https://i.ibb.co.com/Jkn8zj6/B56-EDC68-BC3-F-4-D83-895-F-3-B6-E97-C02407.jpg",
      imgBack: "https://i.ibb.co.com/Tr7m6m4/file-28-1.png",
      title: "Moda 20L Backpack - Travl bag",
      prevPrice: "57.50",
      currentPrice: "115",
    },
    {
      id: 7,
      imgFront: "https://i.ibb.co.com/qnhvDVT/6-C389338-ED3-B-455-B-BC9-F-B8-CE208-E60-DE.jpg",
      imgBack: "https://i.ibb.co.com/Tr7m6m4/file-28-1.png",
      title: "Moda 20L Backpack - Travl bag",
      prevPrice: "57.50",
      currentPrice: "115",
    },
    {
      id: 8,
      imgFront: "https://i.ibb.co.com/9WYTjf0/6-CB24-B08-0-D61-4-D73-A43-B-802-C28757-B44.jpg",
      imgBack: "https://i.ibb.co.com/Tr7m6m4/file-28-1.png",
      title: "Moda 20L Backpack - Travl bag",
      prevPrice: "57.50",
      currentPrice: "215",
    },
  ];
  return (
    <section className="pt-[160px] custom-xl:pt-[110px] max-md:py-[80px] custom-xs:!py-[60px] pb-[120px] px-10 max-md:px-0">
      <Container>
        {/* section title  */}
        <div className="mb-10 custom-xs:mb-6">
          <h3 className="text--xl">New Arrivals</h3>
        </div>
        <div className="grid grid-cols-4 custom-2xl:grid-cols-3 custom-xl:grid-cols-3 max-xl:grid-cols-2 custom-sm:!grid-cols-1 custom-xs:!grid-cols-1 gap-5">
          {products.map((item, index) => (
            <div key={item.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default NewArrivals;
