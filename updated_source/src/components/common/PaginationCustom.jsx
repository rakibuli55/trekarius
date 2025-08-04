import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function PaginationCustom({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Pagination>
      <PaginationContent className="flex items-center gap-3">
        <PaginationItem
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="cursor-pointer"
        >
          <IoIosArrowBack />
        </PaginationItem>
        {pageNumbers.map((number) => (
          <PaginationItem key={number}>
            <PaginationLink
              className={`pagination-link ${
                currentPage === number ? "active" : ""
              }`}
              onClick={() => onPageChange(number)}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="cursor-pointer"
        >
          <IoIosArrowForward />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationCustom;
