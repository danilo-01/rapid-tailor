import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useContext,
} from "react";
import { Popupcontext } from "../../../popup";
import { ReactComponent as TextGrabberIcon } from "../../../../assets/icons/text-grabber-icon.svg";
import { styled } from "styled-components";
import { FunctionWrapper } from "./generate_tab_common";
import { secondaryColor } from "../../constants/styles";

function TextGrabber() {
  const { handleUpdateTargetJobDescription } = useContext(Popupcontext)!;
  const [tracking, setTracking] = useState(false);

  const originalStyles = useMemo(() => new Map(), []);

  const isWithinPluginUI = useCallback(
    (element: HTMLElement | null): boolean => {
      while (element) {
        if (element.id.includes("rapid-tailor-wrapper")) {
          return true;
        }
        element = element.parentElement;
      }
      return false;
    },
    []
  );

  const handleMouseOver = useCallback(
    (event: MouseEvent) => {
      // Cast event.target to an HTMLElement
      const target = event.target as HTMLElement;
      if (tracking && event.target && target instanceof HTMLElement) {
        if (isWithinPluginUI(target)) return; // Do nothing if the target is within the plugin's UI

        const allTextNodes = Array.from(target.childNodes).every(
          (node) => node.nodeType === Node.TEXT_NODE
        );
        originalStyles.set(event.target, {
          border: target.style.border,
          backgroundColor: target.style.backgroundColor,
        });
        if (allTextNodes) {
          target.style.cursor = "pointer";
          target.style.boxSizing = "border-box";
          target.style.border = "1px solid black";
          target.style.backgroundColor = "#89C4FF";
          console.log(target.innerText);
        }
      }
    },
    [isWithinPluginUI, originalStyles, tracking]
  );
  const handleMouseOut = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (tracking && event.target && target instanceof HTMLElement) {
        // Restore original styles
        const styles = originalStyles.get(event.target);
        if (styles) {
          target.style.border = styles.border;
          target.style.backgroundColor = styles.backgroundColor;
        }
      }
    },
    [originalStyles, tracking]
  );

  const handleMouseClick = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      // Cast event.target to an HTMLElement
      const target = event.target as HTMLElement;
      if (tracking && event.target && target instanceof HTMLElement) {
        if (isWithinPluginUI(target)) {
          setTracking(false);
          return;
        } // Do nothing if the target is within the plugin's UI

        const allTextNodes = Array.from(target.childNodes).every(
          (node) => node.nodeType === Node.TEXT_NODE
        );

        if (allTextNodes && target.innerText) {
          handleUpdateTargetJobDescription("ADD", target.innerText);
          if (tracking && event.target && target instanceof HTMLElement) {
            // Restore original styles
            const styles = originalStyles.get(event.target);
            if (styles) {
              target.style.border = styles.border;
              target.style.backgroundColor = styles.backgroundColor;
            }
          }
          setTracking(false);
        }
      }
    },
    [
      handleUpdateTargetJobDescription,
      isWithinPluginUI,
      originalStyles,
      tracking,
    ]
  );

  // Clean up when the component is unmounted
  useEffect(() => {
    if (tracking) {
      document.addEventListener("mouseover", handleMouseOver);
      document.addEventListener("mouseout", handleMouseOut);
      document.addEventListener("click", handleMouseClick);
    } else {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("click", handleMouseClick);
    }
    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("click", handleMouseClick);
    };
  }, [tracking, handleMouseOut, handleMouseOver, handleMouseClick]);

  return (
    <FunctionWrapper
      active={tracking}
      activeColor={secondaryColor}
      onClick={() => setTracking(!tracking)}
    >
      <StyledTextGrabberIcon />
    </FunctionWrapper>
  );
}

export default TextGrabber;

const StyledTextGrabberIcon = styled(TextGrabberIcon)`
  width: 2rem;
  height: 2rem;
`;
