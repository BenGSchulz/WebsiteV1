import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import * as styles from './dropdown.module.css';

const Dropdown = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const values = props.values;

  const handleDropperItemClick = (id) => {
    props.handleNavClick(id);
    setCollapsed(true);
  };

  return (
    <div style={{ position: 'relative' }}>
      <span
        className={styles.selection}
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      >
        {props.currentSelection}
        &nbsp;
        {collapsed ? (
          <FaChevronDown className={styles.icon} />
        ) : (
          <FaChevronUp className={styles.icon} />
        )}
      </span>
      <div
        className={
          collapsed
            ? [styles.dropper, styles.dropperCollapsed].join(' ')
            : [styles.dropper, styles.dropperShown].join(' ')
        }
      >
        {values.map((value, i) => {
          return (
            <div
              className={styles.dropperItem}
              style={
                collapsed
                  ? { top: -40, opacity: 0 }
                  : { top: (i + 1) * 6 + 'vh', opacity: 1 }
              }
              onClick={() => {
                handleDropperItemClick(value);
              }}
              key={value}
            >
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
