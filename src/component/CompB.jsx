import { memo } from "react";
import CompC from "./CompC";

function CompB({ name }) {
  console.log("component B");
  return (
    <div>
      {name}
      <CompC></CompC>
    </div>
  );
}
export default memo(CompB);
