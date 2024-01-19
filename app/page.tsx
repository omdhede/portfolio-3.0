import Sidebar from '../components/sidebar'
import Content from "../components/content-screen";

export default function Home() {
    return (
        <main className='flex flex-row justify-center '>
            <section className='flex'>
                <Sidebar />
                <Content />
            </section>
        </main>
    )
}
