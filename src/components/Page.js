import React, { useState, useEffect } from "react";
import { Pagination } from "semantic-ui-react";

const PageMenu = props => {
  return (
    <div className="pages">
      <Pagination
        defaultActivePage={1}
        totalPages={props.pages}
        onPageChange={(event, data) => props.handlePageChange(data.activePage)}
      />
    </div>
  );
};

export default PageMenu;
