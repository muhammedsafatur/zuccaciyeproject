import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-inherit bg-slate-900 p-4">
      <ul className="flex space-x-4 text-white">
        <li><Link href="/">Ana Sayfa</Link></li>
        <li><Link href="/about">Hakkımızda</Link></li>
        <li><Link href="/products">Ürünler</Link></li>
        <li><Link href="/contact">İletişim</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
