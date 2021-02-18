import Hero from '../components/home/Hero'
import Layout from '../components/Layout'
import Blog from '../components/home/Blog'
export default function Home(): JSX.Element {
  return (
    <Layout title="Aretesania | Strona główna">
      <Hero />
      <Blog />
    </Layout>
  )
}
