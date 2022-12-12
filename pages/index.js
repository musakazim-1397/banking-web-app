import styles from '../styles/Home.module.css'
import NavigationBar from '../components/NavigationBar/NavigationBar';
import HeroSection from '../components/HeroSection/HeroSection';
import ActiveUsers from '../components/ActiveUsers/ActiveUsers';
import BusinessSection from '../components/BusinessSection/BusinessSection';
import BillingSection from '../components/BillingSection/BillingSection';
import CardDeal from '../components/CardDeal/CardDeal';
import AboutUs from '../components/AboutUs/AboutUs';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <NavigationBar/>
      <HeroSection/>
      <ActiveUsers/>
      <BusinessSection/>
      <BillingSection/>
      <CardDeal/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}
