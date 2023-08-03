import { useEffect } from "react";
// -ref: A useRef() contain Component That need to check
// -HandlerOnclickOutSide(isOutSide): function that will be called if user clicked outside component
// -- Function have 1 parameter( parameter is boolean, true is outside, false is inside )
// -isRemoveEventAfterCall: if true, click Event Listener will be removed after first call
const useClickOutSideEffect = (
  ref,
  HandlerOnclickOutSide,
  isRemoveEventAfterCall
) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        HandlerOnclickOutSide(true);
        if (isRemoveEventAfterCall) {
          document.removeEventListener("click", handleClickOutside);
        }
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });
};

export default useClickOutSideEffect;
