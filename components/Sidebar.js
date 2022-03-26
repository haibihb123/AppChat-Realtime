import Style from './StyleSidebar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser, faCommentDots, faBell, faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
function SideBar() {
    return <>

        <div class="wrapper col-sm-2 " >

            <nav id="sidebar" className={Style.sidebar_mg}>
                <div className={Style.image_mg}>
                    <Image
                        priority
                        src="/image/a1.jpg"
                        className={Style.image_avata}
                        height={70}
                        width={70}
                        alt=""
                    />
                </div>
                <div>
                    <div className={Style.sidebar_icon}>
                        <Link href="/">
                            <a >
                                <FontAwesomeIcon className={Style.sidebar_icon_a} icon={faHouseUser} style={{ fontSize: 40, }} />
                            </a>
                        </Link>
                    </div>
                    <div className={Style.sidebar_icon}>
                        <Link href="/chat/ChatScreen">
                            <a  >
                                <FontAwesomeIcon className={Style.sidebar_icon_a} icon={faCommentDots} style={{ fontSize: 40, }} />
                            </a>
                        </Link>
                    </div>
                    <div className={Style.sidebar_icon}>
                        <Link href="/">
                            <a >
                                <FontAwesomeIcon className={Style.sidebar_icon_a} icon={faBell} style={{ fontSize: 40, }} />
                            </a>
                        </Link>
                    </div>
                    <div className={Style.sidebar_icon2}>
                        <Link href="/Setting/setting">
                            <a>
                                <FontAwesomeIcon className={Style.sidebar_icon_a} icon={faGear} style={{ fontSize: 40, }} />
                            </a>
                        </Link>
                    </div>
                    <div className={Style.sidebar_icon}>
                        <Link href="/" >
                            <a >
                                <FontAwesomeIcon className={Style.sidebar_icon_a} icon={faRightFromBracket} style={{ fontSize: 40, }} />
                            </a>
                        </Link>
                    </div>

                </div>
            </nav>


        </div>

    </>

}
export default SideBar

