import React from "react";

interface ExpensiveComponentProps {
  children: React.ReactNode;
}

const ExpensiveComponent: React.FC<ExpensiveComponentProps> = ({
  children,
}) => {
  let result = 0;
  for (var i = Math.pow(6, 7); i >= 0; i--) {
    result += Math.atan(i) * Math.tan(i);
  }

  if (result !== 0) {
    return <div>{children}</div>;
  }
};

export default React.memo(ExpensiveComponent);
