import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { IoSearch, IoHome, IoHeartOutline } from 'react-icons/io5';
import { BiCategory } from 'react-icons/bi';
import '@styles/Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container__logo">
        <BsFillMoonStarsFill className="logo" />
      </div>
      <ul className="list">
        <li className="list__item">
          <Link to="/" className="list__link">
            <IoHome className="list__icon" />
            <span className="list__text">Home</span>
          </Link>
        </li>
        <li className="list__item">
          <Link to="/categories" className="list__link">
            <BiCategory className="list__icon" />
            <span className="list__text">Categories</span>
          </Link>
        </li>
        <li className="list__item">
          <Link to="/watchlist" className="list__link">
            <IoHeartOutline className="list__icon" />
            <span className="list__text">Favorite</span>
          </Link>
        </li>
        <li className="list__item">
          <Link to="/search" className="list__link">
            <IoSearch className="list__icon list__icon--search" />
            <span className="list__text list__text--search">Search</span>
          </Link>
        </li>

        {/* <li>https://api.jikan.moe/v4/anime?type=movie || ova </li>
        <li>https://api.jikan.moe/v4/anime/21/episodes?page=2</li>
        <li>https://api.jikan.moe/v4/anime/21/episodes</li>
        <li>https://api.jikan.moe/v4/top/manga?limit=10</li>
        <li>https://api.jikan.moe/v4/anime?q=one&order_by=score</li>
        <li>https://api.jikan.moe/v4/anime?genres=6</li> */}
      </ul>
    </nav>
  );
};

export { Navbar };
