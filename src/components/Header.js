import React from 'react';
import { useLocalStoraje } from '@hooks/useLocalStoraje';

import '@styles/Header.scss';

const Header = () => {
  const { watch } = useLocalStoraje('watch', []);

  console.log(watch);
  return (
    <header className="header">
      <ul className="headerList">
        <div className="headerList__background"></div>
        {watch.map((fondo) => (
          <li key={fondo.entry.mal_id} className="headerList__item">
            <img src={fondo.entry.images.webp.large_image_url} alt={fondo.entry.title} key={fondo.entry.title} className="headerList__image" />
            <h3 className="headerList__title">{fondo.entry.title}</h3>
          </li>
        ))}
      </ul>
    </header>
  );
};

export { Header };
