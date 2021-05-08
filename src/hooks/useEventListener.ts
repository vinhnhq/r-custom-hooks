import { useRef, useEffect } from "react";

const useEventListener = (
  eventType = "",
  listener = (event: Event) => null,
  target = window,
  options = null
) => {
  const savedListener = useRef((event) => {});

  useEffect(() => {
    savedListener.current = listener;
  }, [listener]);

  useEffect(() => {
    if (!target?.addEventListener) return;

    const eventListener = (event) => savedListener.current(event);

    target.addEventListener(eventType, eventListener, options);

    return () => {
      target.removeEventListener(eventType, eventListener, options);
    };
  }, [eventType, target, options]);
};

export default useEventListener;
