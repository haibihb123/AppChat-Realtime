import SideBar from "./SideBar"
import Head from 'next/head'
import StyleSidebar from '../Components/StyleSidebar.module.css'
const Layouts = ({ children }) => {
    return (
        <>
            <div className={StyleSidebar.app}>
                <div className="row">

                    <Head>
                        <title>Chat RealTime</title>
                        <link rel="icon" href="/favicon.ico" />
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
                    </Head>
                    <SideBar />
                    {children}
                </div>
            </div>

        </>
    )
}
export default Layouts