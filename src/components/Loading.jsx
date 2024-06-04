import React from "react";
import LoadingBar from "react-redux-loading-bar";

function Loading() {
  return (
    <div className="loading" color="black">
      <LoadingBar style={{ backgroundColor: "#FFCD39" }} />
    </div>
  );
}

export default Loading;
