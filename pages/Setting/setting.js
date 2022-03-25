import Image from "next/image"
import StyleLayout from '/styles/StyleLayout.module.css'
function Setting() {
    return (
        <div class="col-sm-10" >
            <div className={StyleLayout.setting_mg}>
                <div className={StyleLayout.setting_mg_left}>
                    <div className={StyleLayout.setting_avata_mg}>
                        <Image
                            priority
                            src="/image/a1.jpg"
                            className={StyleLayout.setting_avata}
                            height={150}
                            width={150}

                            alt=""
                        />
                    </div>
                    <h3 style={{ fontWeight: 700 }}>What you name</h3>
                </div>
                <div >
                    <h4 style={{ fontWeight: 600, marginBottom: 30 }}>Sửa thông tin</h4>
                    <div className={StyleLayout.setting_from}>
                        <form>
                            <div className={StyleLayout.setting_from_1}>
                                <label className={StyleLayout.setting_name} for="name">Họ và tên:</label>
                                <input className={StyleLayout.setting_input} type="text" id="fname" name="name" />
                            </div>
                            <div className={StyleLayout.setting_from_1}>
                                <label className={StyleLayout.setting_age} for="age">Tuổi:</label>
                                <input className={StyleLayout.setting_input} type="number" id="fname" name="age" />
                            </div>
                            <div className={StyleLayout.setting_from_1}>
                                <label className={StyleLayout.setting_email} for="email">Email:</label>
                                <input className={StyleLayout.setting_input} type="email" id="fname" name="email" />
                            </div>
                            <div className={StyleLayout.setting_from_1}>
                                <label className={StyleLayout.setting_phone} for="phone">Số điện thoại:</label>
                                <input className={StyleLayout.setting_input} type="text" id="fname" name="phone" />
                            </div>
                            <div className={StyleLayout.setting_from_1}>
                                <label className={StyleLayout.setting_address} for="address">Địa chỉ:</label>
                                <input className={StyleLayout.setting_input} type="text" id="fname" name="address" />
                            </div>
                            <div className={StyleLayout.setting_from_1}>
                                <label className={StyleLayout.setting_sex} for="male">Nam</label>
                                <input type="radio" id="fname" name="1" value="Nam" />
                                <label className={StyleLayout.setting_sex} for="female">Nữ</label>
                                <input type="radio" id="fname" name="1" value="Nữ" />
                            </div>

                            <div className={StyleLayout.setting_from_1}>
                                <label className={StyleLayout.setting_avata1} for="avata"> A    vata:</label>
                                <input type="file" id="fname" name="avata" />
                            </div>

                            <div>
                                <input className={StyleLayout.setting_btnEdit} type="submit" value="Lưu thông tin" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Setting