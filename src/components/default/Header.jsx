import { Outlet, Link, NavLink } from "react-router-dom";

export const Header = () => {
  const header = document.getElementById('header');


  const ancleMotoCarousel = () => {
    window.scrollTo({top: 650, behavior: 'smooth'});
  };

  const ancleGearCarousel = () => {
    window.scrollTo({top: 1350, behavior: 'smooth'});
  };

  /*window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.className.add('scroll-active')
    } else {
      header.className.remove('scroll-active')
    }
  });*/

  return (
    <div className='header-container' id='header'>
      <nav className='header-nav-bar'>
        <ul>
          <li>
            <button onClick={ancleMotoCarousel}>Models</button>

          </li>
          <li>
            <NavLink to="/"><img className='nav-logo' src='https://assets.ducati.com/dist/0.20.2/assets/img/ducati_id.png' ></img></NavLink>
          </li>
          <li>
          <button onClick={ancleGearCarousel}>Gear</button>
            
          </li>
        </ul>
      </nav>
    </div>
  )
}
