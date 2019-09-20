import React from "react";
import { Pagination } from "semantic-ui-react";

const PageMenu = props => {
  return (
    <div className="pages">
      <Pagination
        defaultActivePage={1}
        totalPages={props.pages}
        onPageChange={data => props.handlePageChange(data.activePage)}
      />
    </div>
  );
};

export default PageMenu;
