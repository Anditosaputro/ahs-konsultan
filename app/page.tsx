import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="main-container">
            <div className="navbar">
                <ul>
                    <li>Beranda</li>
                    <li><Link href="#tentang-kami" className="a-navbar">Tentang Kami</Link></li>
                    <li><Link href="#kontak" className="a-navbar">Kontak</Link></li>
                </ul>
            </div>
            <div className="header" id="beranda">
                <div className="header-left">
                    <div className="header-left-container">
                        <div className="logo">
                          <Image src="/Logo.jpg" alt="AHS Konsultan Logo" width={0} height={0} sizes="100vw" style={{width:'100%',height:'auto'}}/>
                        </div>
                        <div className="header-title">Konsultasi Bisnis UMKM</div>
                        <div className="header-subtitle">Konsultan spesialis UMKM berpengalaman lebih dari 3 tahun. Kami percaya setiap bisnis itu unik dan membutuhkan pendekatan yang berbeda-beda. Kami siap memberi solusi terbaik untuk tantangan bisnis Anda.</div>
                        <div className="order-button">
                            <div className="header-button"><Link href="#">Konsultasi Sekarang</Link></div>
                            <div className="header-button-wa">
                                <div className="button-wa-icon">
                                  <Image src="/WhatsApp.svg" alt="whatsapp logo" width={0} height={0} sizes="100vw" style={{width:'100%',height:'25px'}}/>
                                </div>
                                <div className="button-wa-text"><Link href="#">Hubungi via Whatsapp</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-right">
                    <div className="header-image">
                        <div className="image-header">
                          <Image src= "/batik_seller.png" alt="indonesian batik seller" width={0} height={0} sizes="100vw" style={{width:'100%',height:'auto'}}/>
                        </div>
                        <div className="image-header">
                          <Image src="/store.png" alt="indonesian store" width={0} height={0} sizes="100vw" style={{width:'100%',height:'auto'}}/>
                        </div>
                        <div className="image-header">
                          <Image src="/coffee_shop.png" alt="indonesian coffee shop" width={0} height={0} sizes="100vw" style={{width:'100%',height:'auto'}}/>
                        </div>
                    </div>        
                </div>
            </div>
            <div className="layanan-container">
                <div className="layanan-title">Layanan apa yang kami berikan?</div>
                <div className="layanan-content">
                    <div className="content">
                        <div className="icon">
                          <Image src="/pengembanganBisnis.png" alt="Pengembangan Bisnis icon" width={0} height={0} sizes="100vw" style={{width:'100%',height:'auto'}}/>
                        </div>
                        <div className="content-title">Pengembangan Bisnis</div>
                    </div>
                    <div className="content">
                        <div className="icon">
                          <Image src="/manajemenKeuangan.png" alt="Pengembangan Bisnis icon" width={0} height={0} sizes="100vw" style={{width:'100%',height:'auto'}}/>
                        </div>
                        <div className="content-title">Manajemen Keuangan</div>
                    </div>
                    <div className="content">
                        <div className="icon">
                          <Image src="/manajemenSdm.png" alt="Pengembangan Bisnis icon" width={0} height={0} sizes="100vw" style={{width:'100%',height:'auto'}}/>
                        </div>
                        <div className="content-title">Manajemen SDM</div>
                    </div>
                    <div className="content">
                        <div className="icon">
                          <Image src="/analisisData.png" alt="Pengembangan Bisnis icon" width={0} height={0} sizes="100vw" style={{width:'100%',height:'auto'}}/>
                        </div>
                        <div className="content-title">Analisis Data</div>
                    </div>
                    <div className="content">
                        <div className="icon">
                          <Image src="/Logo2.png" alt="Pengembangan Bisnis icon" width={0} height={0} sizes="100vw" style={{width:'100%',height:'auto'}}/>
                        </div>
                        <div className="content-title">Strategi Pemasaran</div>
                    </div>
                </div>
            </div>
            <div className="profil" id="tentang-kami">
                <div className="image-profil">
                  <Image src="/building.png" alt="office building" className="profil-background" width={0} height={0} sizes="100vw" style={{width:'auto',height:'100%'}}/>
                </div>
                <div className="profil-container">
                    <div className="profil-image">
                      <Image src="/photo_andito.png" alt="andito's photo" width={0} height={0} sizes="100vw" style={{width:'100%',height:'100%'}}/>
                    </div>
                </div>
                <div className="profil-container-right">
                    <div className="profil-right">
                        <div className="profil-title">Profil Konsultan</div>
                        <div className="profil-name">Andito Haryo Saputro, S.Pd, M.Sc</div>
                        <div className="profil-subtitle">Pengalaman :</div>
                        <div className="profil-content">Sejasa.com - CEO Office (Manager) - 2023 s/d Sekarang<br />
                            Sejasa.com - Senior Data Analyst - 2023<br />
                            Sejasa.com - Data Analyst - 2022</div>
                        <div className="profil-subtitle">Pendidikan :</div>
                        <div className="profil-content">National Central University, Taiwan - Master of Computer Science and Information Engineering<br />
                            Universitas Sebelas Maret, Surakarta, Indonesia - Sarjana Pendidikan Teknik Informatika dan Komputer</div>
                        </div>
                    </div>
                </div>
            <div className="sublayanan">
                <div className="sublayanan-title">Apa yang akan anda dapatkan?</div>
                <div className="sublayanan-content">
                    <div className="sublayanan-icon">
                      <Image src="/Logo2.png" alt="Bisnis menjadi efisien icon" width={0} height={0} sizes="100vw" style={{width:'100%',height:'auto'}}/>
                    </div>
                    <div className="sublayanan-subtitle">Bisnis menjadi efisien</div>
                    <div className="sublayanan-subtitle1">Efisiensi bisnis anda dengan merapikan operasional, pengeluaran, manajemen sumber daya</div>
                </div>
                <div className="sublayanan-content">
                    <div className="sublayanan-icon">
                      <Image src="/Logo2.png" alt="Bisnis menjadi efisien icon" width={0} height={0} sizes="100vw" style={{width:'100%',height:'auto'}}/>
                    </div>
                    <div className="sublayanan-subtitle">Minimalisir resiko bisnis</div>
                    <div className="sublayanan-subtitle1">Perbaiki proses bisnis dan strategi minimalisir resiko untuk menghindarkan bisnis anda dari kerugian</div>
                </div>
                <div className="sublayanan-content">
                    <div className="sublayanan-icon">
                      <Image src="/melihatPeluangPasar.png" alt="Bisnis menjadi efisien icon" width={0} height={0} sizes="100vw" style={{width:'100%',height:'auto'}}/>
                    </div>
                    <div className="sublayanan-subtitle">Melihat peluang pasar</div>
                    <div className="sublayanan-subtitle1">Menemukan peluang yang ada untuk membuat bisnis anda lebih berkembang</div>
                </div>
            </div>
            <div className="footer" id="kontak">
                <div className="footer-title">AHS Konsultan</div>
                <div className="header-button-wa">
                    <div className="button-wa-icon">
                      <Image src="/WhatsApp.svg" alt="whatsapp logo" width={0} height={0} sizes="100vw" style={{width:'100%',height:'25px'}}/>
                    </div>
                    <div className="button-wa-text"><Link href="#">Hubungi via Whatsapp</Link></div>
                </div>
            </div>
        </div>
  );
}
