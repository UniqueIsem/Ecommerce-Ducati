export const Header = () => {
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scroll-active')
    } else {
      header.classList.remove('scroll-active')
    }
  });

  return (
    <div className='header-container' id='header'>
      <div className='header-nav-bar'>
        <ul>
          <li><a href='#moto-title'>MODELS</a></li>
          <li><a href=''><img className='nav-logo' src='https://assets.ducati.com/dist/0.20.2/assets/img/ducati_id.png' ></img></a></li>
          <li><a href='#gear-title'>GEAR</a></li>
        </ul>
      </div>
    </div>
  )
}
