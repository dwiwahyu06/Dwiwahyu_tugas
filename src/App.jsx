import { useState } from "react";
import { Search } from "lucide-react";
import Brg from './Component/Produk';
import { ShoppingCart } from "lucide-react";
import { AlignRight } from "lucide-react";
import Header from './Component/Hearder'; // Pastikan ini sesuai dengan nama file
import Footer from './Component/Footer'; // Import Footer

export default function App() { 
    const produk = [
        { id: 1, nama: 'Jimmy Choo  Crystal Strap  Heels Pink', foto: 'https://i.pinimg.com/564x/0c/40/fe/0c40fe8c0f0e2f02b415ce02fcad15b4.jpg' , harga:  9149000, deskripsi: 'Sepatu heels ini memiliki desain yang elegan dengan nuansa feminin. Dikenakan dengan bahan patent leather yang mengkilap, memberikan tampilan yang modis dan mewah. Strap kristal yang menghiasi bagian atas sepatu menambah kesan glamor, menjadikannya pilihan sempurna untuk acara formal atau pesta.', stok: 5, kategori: 'Heels' },
        { id: 2, nama: 'Jimmy Choo Heels Black', foto: 'https://i.pinimg.com/564x/34/eb/6a/34eb6a9fca672f6544179a3a60ff5479.jpg', harga: 8000000, deskripsi: ' terbuat dari kulit paten hitam yang mengkilap dengan desain tali silang di bagian depan kaki. Sepatu ini memiliki hak blok yang tebal dan platform yang tinggi, serta tali pergelangan dengan gesper kecil, memberikan kesan glamor dan elegan.', stok: 10, kategori: 'Elektronik' },
        { id: 3, nama: 'Jimmy Choo Heels Rice White', foto: 'https://i.pinimg.com/control/564x/9a/81/c0/9a81c0f248c3fade233ce776989303d2.jpg', harga: 2500000, deskripsi: 'Kemeja batik pria dengan bahan katun yang nyaman.', stok: 15, kategori: 'Pakaian' },
        { id: 4, nama: 'Jimmy Choo Elegant White', foto: 'https://i.pinimg.com/control/564x/2b/a4/1e/2ba41e42a3cf0ef22977182b0a52fce8.jpg', harga: 6000000, deskripsi: 'Sepatu olahraga Nike dengan teknologi Air Max.', stok: 20, kategori: 'Olahraga' },
        { id: 5, nama: 'Jimmy Choo Heels Blue', foto: 'https://i.pinimg.com/564x/2d/bd/b1/2dbdb15073950f6f04cb2f5e40a91ae6.jpg',harga: 9000000, deskripsi:'', stok: 8, kategori: 'Peralatan Dapur' },
        { id: 6, nama: 'Jimmy Choo Sandals White', foto: 'https://i.pinimg.com/control/564x/91/50/60/91506010d93a79d33c8ece99052a1750.jpg', harga: 1000000, deskripsi: 'Buku untuk belajar dasar-dasar pemrograman bagi pemula.', stok: 30, kategori: 'Buku' },
        { id: 7, nama: 'Jimmy Choo Womens White Heels', foto: 'https://i.pinimg.com/control/564x/8d/38/66/8d38660b8aa94d47fa2b091beff73513.jpg', harga: 15000000, deskripsi: 'Nappa leather heeled sandals in off-white. · Open round toe · Crystal-cut detailing at adjustable pin-buckle ankle strap · Covered block heel with rubber injection · Leather sole · Silver-tone hardware · Heel: 4.5 in Supplier color: Latte/Crystal', stok: 5, kategori: 'Sandals' },
        { id: 8, nama: 'Jimmy Choo Casual Heels', foto: 'https://i.pinimg.com/564x/93/6f/5d/936f5d03798f8b69fbfd65629dae23a4.jpg', harga: 4000000, deskripsi: 'Tas punggung Herschel yang stylish dan nyaman dipakai.', stok: 12, kategori: 'Aksesoris' },
        { id: 9, nama: 'Jimmy Choo Heels Crystal White', foto: 'https://i.pinimg.com/control/564x/24/90/42/249042263410845c9c2171e7611b3f7c.jpg', harga: 12000000, deskripsi: 'Kursi kantor ergonomis dengan penyangga punggung yang nyaman.', stok: 7, kategori: 'Perabotan' },
        { id: 10, nama: 'Jimmy Choo Heels Crystal Black', foto: 'https://i.pinimg.com/736x/44/92/3a/44923a760080663a1e803329d97ae8d4.jpg', harga: 7500000, deskripsi: 'Headphone Sony dengan fitur noise cancelling dan suara jernih.', stok: 9, kategori: 'Elektronik' }
    ];
    

    const [search, setSearch] = useState('');
    const [cartCount, setCartCount] = useState(0);

    const filteredData = produk.filter((barang) =>
        barang.nama.toLowerCase().includes(search.toLowerCase())
    );

    const handleAddToCart = () => {
        setCartCount(cartCount + 1);
    };

    return (
        <div>
            <Header /> {/* Tambahkan Header di sini */}
            <div>
                <Search size={25} />
                <input
                    type="text"
                    placeholder="cari disini"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <ShoppingCart size={50} className="keranjang" />
                <span>{cartCount}</span> {/* Display cart count */}
                <AlignRight size={50} className="garis3" />
            </div>
            <div className="perulangan">
                {filteredData.map((produkk) => (
                    <Brg
                        key={produkk.id}
                        nama={produkk.nama}
                        foto={produkk.foto}
                        deskripsi={produkk.deskripsi}
                        stok={produkk.stok}
                        harga={produkk.harga}
                        kategori={produkk.kategori}
                        onAddToCart={handleAddToCart} // Pass the function to the Brg component
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}
