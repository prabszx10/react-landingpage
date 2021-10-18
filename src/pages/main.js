import React from 'react'
import { Button } from 'react-bootstrap';
import g1 from '../images/card-home1.png';
import thumb from '../images/thum.png';
import lamp from '../images/lamp.png';
import lamp2 from '../images/lamp2.png';
import partner from '../images/partner.png';
import logo from '../images/idcore.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function main() {
    return (
        <div>
            <div className='header'>
                <div className='imgBg'></div>
                <div className='front'>
                    <div className="container">
                        <h1>Software House Development</h1>
                        <hr />
                        <p> <span>"</span> ID Core Indonesia menawarkan solusi berupa digitalisasi dalam model aplikasi dan sistem informasi yang sesuai dengan latar belakang industri yang bersangkutan <span>"</span></p>
                        <Button className='btn'>SELENGKAPNYA</Button>{' '}
                    </div>
                </div>
            </div>

            <div className="layanan">
                <h1>Layanan dari ID Core Indonesia</h1>
                <div className="isi">
                    <div className="grid">
                        <div className="grid-item">
                            <div className="card">
                                <h3>Software Development</h3>
                                <img src={g1} />
                                <p>Sebuah layanan yang akan dapat meringkas, menyederhanakan, serta mempermudah semua proses atau alur bisnis yang berlaku pada area industri, bisnis modern, home industri, pendidikan pada tingkat sekolah dasar hingga perguruan tinggi, bahkan individu dan swasta.</p>
                                <Button className='btn'>LIHAT LAYANAN KAMI</Button>{' '}
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="card">
                                <h3>Software Development</h3>
                                <img src={g1} />
                                <p>Sebuah layanan yang akan dapat meringkas, menyederhanakan, serta mempermudah semua proses atau alur bisnis yang berlaku pada area industri, bisnis modern, home industri, pendidikan pada tingkat sekolah dasar hingga perguruan tinggi, bahkan individu dan swasta.</p>
                                <Button className='btn'>LIHAT LAYANAN KAMI</Button>{' '}
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="card">
                                <h3>Software Development</h3>
                                <img src={g1} />
                                <p>Sebuah layanan yang akan dapat meringkas, menyederhanakan, serta mempermudah semua proses atau alur bisnis yang berlaku pada area industri, bisnis modern, home industri, pendidikan pada tingkat sekolah dasar hingga perguruan tinggi, bahkan individu dan swasta.</p>
                                <Button className='btn'>LIHAT LAYANAN KAMI</Button>{' '}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="keunggulan">
                <h1>Keunggulan ID Core Indonesia</h1>
                <div className="isi">
                    <div className="grid">
                        <div className="grid-item">
                            <div className="icon">
                                <img src={thumb} />
                                <p>Partner yang Baik</p>
                            </div>
                        </div>

                        <div className="grid-item">
                            <div className="icon">
                                <img src={lamp} />
                                <p>Memberikan Solusi sesuai kebutuhan Anda?</p>
                            </div>
                        </div>

                        <div className="grid-item">
                            <div className="icon">
                                <img src={lamp2} />
                                <p>Mengerti yang Anda Butuhkan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="partner">
                <h1>Partner / Client</h1>
                <div className="isi">
                    <div className="grid">
                        <div className="grid-item">
                            <img src={partner} />
                        </div>
                        <div className="grid-item">
                            <img src={partner} />
                        </div>
                        <div className="grid-item">
                            <img src={partner} />
                        </div>
                        <div className="grid-item">
                            <img src={partner} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="kontak">
                <div className="imgBg"></div>
                <div className="front">
                    <div className="container">
                        <h2>“Anda ingin menjadi partner kami ? atau ingin konsultasi untuk pengembangan aplikasi bisnis anda?”</h2>
                        <Button className='btn'>KONTAK KAMI</Button>
                    </div>
                </div>
            </div>
            <footer>
                <img src={logo} />
                <div className="info">
                    <h5>INFORMASI PERUSAHAAN</h5>
                    <div className="info-items">
                        <FontAwesomeIcon icon={faHome} className='icon' />
                        <p>Alamat</p>
                    </div>
                    <div className="info-items">
                        <FontAwesomeIcon icon={faPhone} className='icon' />
                        <p>081*******</p>
                    </div>
                    <div className="info-items">
                        <FontAwesomeIcon icon={faEnvelope} className='icon' />
                        <p>idcore.idn@gmail.com</p>
                    </div>
                </div>
            </footer>
        </div>


    )
}

export default main
