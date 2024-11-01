import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const PaginationC = (props) => {
  return (
    <>
      <Pagination className="sayfalama">
        <PaginationItem onClick={() => {}}>
          <PaginationLink first />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous />
        </PaginationItem>
        <PaginationItem onClick={() => {}}>
          <PaginationLink>1</PaginationLink>
        </PaginationItem>
        <PaginationItem onClick={() => {}}>
          <PaginationLink>2</PaginationLink>
        </PaginationItem>
        <PaginationItem onClick={() => {}}>
          <PaginationLink>...</PaginationLink>
        </PaginationItem>
        <PaginationItem onClick={() => {}}>
          <PaginationLink>8</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last />
        </PaginationItem>
      </Pagination>
    </>
  );
};

export default PaginationC;
