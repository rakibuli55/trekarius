import Container from "../container/Container";
import TripCard from "./TripCard";

const results = [
    {
        id:1,
        imgUrl:"https://i.ibb.co.com/gyqwpB9/image.png",
        title:"Club Quarters Hotel Embarcadero, San Francisco",
        address:"770 North Point San Francisco, CA 94109",
        phone:"(415) 771-2050"
    },
    {
        id:2,
        imgUrl:"https://i.ibb.co.com/PGLmsN0/image-1.png",
        title:"Patagonia San Francisco",
        address:"770 North Point San Francisco, CA 94109",
        phone:"(415) 771-2050"
    },
    {
        id:3,
        imgUrl:"https://i.ibb.co.com/HP5QtY9/image-2.png",
        title:"Patagonia San Francisco",
        address:"770 North Point San Francisco, CA 94109",
        phone:"(415) 771-2050"
    },
    {
        id:4,
        imgUrl:"https://i.ibb.co.com/N6xHxGc/image-4.png",
        title:"Patagonia San Francisco",
        address:"770 North Point San Francisco, CA 94109",
        phone:"(415) 771-2050"
    },
    {
        id:5,
        imgUrl:"https://i.ibb.co.com/HP5QtY9/image-2.png",
        title:"Patagonia San Francisco",
        address:"770 North Point San Francisco, CA 94109",
        phone:"(415) 771-2050"
    },
    {
        id:6,
        imgUrl:"https://i.ibb.co.com/N6xHxGc/image-4.png",
        title:"Patagonia San Francisco",
        address:"770 North Point San Francisco, CA 94109",
        phone:"(415) 771-2050"
    },
    {
        id:7,
        imgUrl:"https://i.ibb.co.com/PGLmsN0/image-1.png",
        title:"Patagonia San Francisco",
        address:"770 North Point San Francisco, CA 94109",
        phone:"(415) 771-2050"
    },
    {
        id:8,
        imgUrl:"https://i.ibb.co.com/gyqwpB9/image.png",
        title:"Patagonia San Francisco",
        address:"770 North Point San Francisco, CA 94109",
        phone:"(415) 771-2050"
    },
]

function ResultList() {
  return (
    <section className="px-10 max-md:px-0 pb-20">
        <Container>
            <div className="grid grid-cols-4 custom-xl:grid-cols-3 custom-lg:grid-cols-2 custom-md:grid-cols-2 custom-sm:grid-cols-1 custom-xs:grid-cols-1 gap-6">
                {
                    results.map((item, index) => (
                        <div key={item.id} data-aos="fade-up" data-aos-delay={index * 100}>
                            <TripCard item={item} />
                        </div>
                    ))
                }
            </div>
        </Container>
    </section>
  )
}

export default ResultList;
