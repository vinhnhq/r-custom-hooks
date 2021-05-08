import React from "react";

declare global {
  interface Window {
    requestIdleCallback: (callback: Function, options?: any) => void;
  }
}

interface DeferProps {
  chunkSize: number;
}

const Defer: React.FC<DeferProps> = ({ chunkSize, children }) => {
  const [renderedItemsCount, setRenderedItemsCount] = React.useState(chunkSize);

  const childrenArray = React.useMemo(() => React.Children.toArray(children), [
    children,
  ]);

  React.useEffect(() => {
    if (renderedItemsCount < childrenArray.length) {
      window.requestIdleCallback(
        () => {
          setRenderedItemsCount(
            Math.min(renderedItemsCount + chunkSize, childrenArray.length)
          );
        },
        { timeout: 200 }
      );
    }
  }, [
    renderedItemsCount,
    setRenderedItemsCount,
    childrenArray.length,
    chunkSize,
  ]);

  return <>{childrenArray.slice(0, renderedItemsCount)}</>;
};

export default Defer;
