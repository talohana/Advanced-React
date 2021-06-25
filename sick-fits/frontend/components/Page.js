import PropTypes from "prop-types";
import React from "react";
import Header from "./Header";

export function Page({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
