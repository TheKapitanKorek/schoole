import React, { useRef, useState, useEffect } from "react";

const Dropdown = ({
  value,
  options,
  placeholder = "Select",
  onChange,
  styles,
}) => {
  const node = useRef();

  console.log(node);

  const [open, setOpen] = useState(false);

  const handleClickOutside = (e) => {
    console.log("clicking anywhere");
    if (node.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  const handleChange = (selectedValue) => {
    onChange(selectedValue);
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={node} className={styles.dropdown}>
      <button
        className={styles.dropdown_toggler}
        onClick={(e) => {
          setOpen(!open);
        }}
      >
        <div className={styles.dropdown_desc}>{value || placeholder}</div>
        <div className={styles.dropdown_symbol}>▼</div>
      </button>
      {open && (
        <ul className={styles.dropdown_menu}>
          {options.map((opt) => (
            <li
              className={styles.dropdown_menu_item}
              onClick={() => {
                handleChange(opt);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
