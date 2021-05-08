import React from "react";

import ExpensiveComponent from "./ExpensiveComponent";
import Defer from "./Defer";

const margin1RemStyle = { margin: "1rem" };

const ExpensiveList: React.FC = () => {
  const [shouldShow, setShouldShow] = React.useState(false);

  return (
    <>
      <button
        style={margin1RemStyle}
        onClick={() => setShouldShow((prev) => !prev)}
      >
        Toggle
      </button>

      {shouldShow &&
        [...Array(100)].map((_, index) => (
          <ExpensiveComponent key={index}>Component {index}</ExpensiveComponent>
        ))}
    </>
  );
};

const DeferredExpensiveList: React.FC = () => {
  const [shouldShow, setShouldShow] = React.useState(false);

  return (
    <>
      <button
        style={margin1RemStyle}
        onClick={() => setShouldShow((prev) => !prev)}
      >
        Toggle
      </button>

      {shouldShow && (
        <Defer chunkSize={10}>
          {[...Array(100)].map((_, index) => (
            <ExpensiveComponent key={index}>
              Component {index}
            </ExpensiveComponent>
          ))}
        </Defer>
      )}
    </>
  );
};

const containerStyle = { display: "grid", gridTemplateColumns: "1fr 1fr" };

export default function Index() {
  return (
    <div style={containerStyle}>
      <section>
        <ExpensiveList />
      </section>
      <section>
        <DeferredExpensiveList />
      </section>
    </div>
  );
}
