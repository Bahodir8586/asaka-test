import { useEffect, useRef } from "react";
import classes from "./Cell.module.scss";

export const Cell = ({ label, value, customValueClass = "" }) => {
  const valueRef = useRef(null);
  const cellRef = useRef(null);

  useEffect(() => {
    if (typeof value !== "string") {
      return;
    }
    const updateMaxLength = () => {
      const cellWidth = cellRef.current.offsetWidth;
      const valueWidth = valueRef.current.offsetWidth;
      const paddingRight = parseInt(
        getComputedStyle(valueRef.current).paddingRight,
        10
      );

      const availableWidth = cellWidth - paddingRight;
      const maxChars = Math.floor(availableWidth / (valueWidth / value.length));
      const maxLength = maxChars > 3 ? maxChars - 3 : 0;

      valueRef.current.style.cssText = `
        max-width: ${availableWidth}px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: inline-block;
        width: 100%;
        word-break: break-word;
      `;

      valueRef.current.maxLength = maxLength;
    };

    updateMaxLength();
    window.addEventListener("resize", updateMaxLength);

    return () => {
      window.removeEventListener("resize", updateMaxLength);
    };
  }, [value]);
  return (
    <>
      <div className={classes.label}>{label}</div>
      <div ref={cellRef} className={`${classes.value} ${customValueClass}`}>
        <div ref={valueRef}>{value}</div>
      </div>
    </>
  );
};
