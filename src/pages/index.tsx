import Hero from '../components/home/Hero'
import Layout from '../components/Layout'
import Blog from '../components/home/Blog'
import AboutProducts from 'components/home/AboutProducts'
import Contact from 'components/home/Contact'

export default function Home(): JSX.Element {
  return (
    <Layout title="Aretesania | Strona główna">
      <Hero />
      <AboutProducts />
      <Contact />
      <Blog />
    </Layout>
  )
}
