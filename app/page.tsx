import Sidebar from '../components/sidebar'
import Content from "../components/content-screen";

export default function Home() {
    return (
        <main className='flex flex-row justify-center h-[40rem]'>
            <section className='flex'>
                <Sidebar />
                <Content />
            </section>
        </main>
    )
}
