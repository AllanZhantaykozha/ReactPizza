import React from 'react';
import { useState } from 'react';

export const Categories = ({ value, onChangeCategory }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((obj, index) => (
          <li
            key={index}
            onClick={() => onChangeCategory(index)}
            className={value === index ? 'active' : ''}>
            {obj}
          </li>
        ))}
      </ul>
    </div>
  );
};
