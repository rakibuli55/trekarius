import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function SingleAccordion({ item }) {
  return (
    <AccordionItem value={item.id}>
      <AccordionTrigger className="text-[26px] custom-md:text-[20px] custom-sm:text-[18px] custom-sm:text-left text-left custom-xs:text-base custom-xs:text-left font-bold text-headingColor">
        {item?.question}
      </AccordionTrigger>
      <AccordionContent className="text-[18px] custom-md:text-base custom-xs:text-base leading-[30px] text-headingColor font-medium">
        {item?.answer}
      </AccordionContent>
    </AccordionItem>
  );
}

export default SingleAccordion;
