import { Accordion } from '@/components/ui/accordion';
import Container from '../container/Container';
import SingleAccordion from './SingleAccordion';


function FaqSection({ data }) {
  return (
    <section className="faq-area py-[120px] custom-md:py-[80px] custom-sm:py-[60px] custom-xs:py-[60px] w-[1490px] max-md:w-full custom-xl:w-full custom-2xl:w-full custom-lg:w-full mx-auto">
      <Container>
        <div>
          <h3
            className="text--xl custom-md:text-[34px] custom-sm:text-[30px] custom-xs:text-[26px] text-headingColor mb-[30px] custom-xs:mb-3"
            data-aos="fade-up"
          >
            Treakrius Awards FAQ
          </h3>
        </div>
        <div>
          <Accordion type="single" collapsible>
            {data?.map((faq, index) => (
              <div key={faq.id} data-aos="fade-up" data-aos-delay={index * 80}>
                <SingleAccordion item={faq} />
              </div>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}

export default FaqSection;
