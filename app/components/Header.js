import { Codystar } from "next/font/google";

const cody = Codystar({subsets: ['latin'], weight: '400' });

function Header() {
  return (
    <header className='app-header'>
      <img src='logo512.png' alt='React logo' />
      <h1 className={cody.className}>The React Quiz</h1>
    </header>
  );
}

export default Header;
