import '../styles/globals.css';
import Header from '@/components/Header/Header';
import { Open_Sans } from 'next/font/google';
import HeaderTop from '@/components/HeaderTop';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '@/components/Footer';
import FooterBottom from '@/components/FooterBottom';

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata = {
  title: {
    template: '%s | Portfolio',
    default: 'Portfolio | Portfolio', // a default is required when creating a template
  },
  description: "Portfolio website of Portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <HeaderTop />
        <Header />
        {children}
        <div id='contact'>
          <Footer />
        </div>
        <FooterBottom />
      </body>
    </html>
  )
};
