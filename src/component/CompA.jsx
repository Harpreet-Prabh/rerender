import { memo } from "react";

function CompA({ name,count }) {
  console.log("component A");

  return <div>CompA {name} {count}</div>;
}

export default memo(CompA);
