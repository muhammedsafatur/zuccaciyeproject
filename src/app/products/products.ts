export interface Product {
  id: number;
  name: string;
  price: string;
  stock: string;
  image: string;
  description: string;
  discount: number;
  type: string;
  brand: string;
  color: string;
}

export const products: Product[] = [
  { id: 1, name: 'Beyaz Çaydanlık', price: '₺150', stock: "Mevcut", image: 'https://m.media-amazon.com/images/I/51uK15tf+FL._AC_SX679_.jpg', description: 'Kaliteli beyaz çaydanlık', discount: 10, type: 'Çaydanlık', brand: 'BrandA', color: 'Beyaz' },
  { id: 2, name: 'Mavi Tabak Seti', price: '₺120', stock: "Mevcut", image: 'https://cdn.akakce.com/z/schafer/schafer-liana-24-parca-mavi.jpg', description: 'Şık mavi tabak seti', discount: 0, type: 'Tabak', brand: 'BrandB', color: 'Mavi' },
  { id: 3, name: 'Cam Şişe', price: '₺80', stock: "Bitti", image: 'https://bursasisekavanoz.com/Resimler/3d9524968602419fac5d5492633d2521.jpg', description: 'Sağlıklı cam şişe', discount: 5, type: 'Şişe', brand: 'BrandC', color: 'Şeffaf' },
  { id: 4, name: 'Kırmızı Tencere', price: '₺200', stock: "Mevcut", image: 'https://example.com/kirmizi-tencere.jpg', description: 'Dayanıklı kırmızı tencere', discount: 15, type: 'Tencere', brand: 'BrandD', color: 'Kırmızı' },
  { id: 5, name: 'Yeşil Bardak Seti', price: '₺90', stock: "Mevcut", image: 'https://example.com/yesil-bardak-seti.jpg', description: 'Şık yeşil bardak seti', discount: 5, type: 'Bardak', brand: 'BrandE', color: 'Yeşil' },
  { id: 6, name: 'Seramik Tabak', price: '₺70', stock: "Bitti", image: 'https://example.com/seramik-tabak.jpg', description: 'Kaliteli seramik tabak', discount: 0, type: 'Tabak', brand: 'BrandF', color: 'Beyaz' },
  { id: 7, name: 'Çelik Çatal Bıçak Seti', price: '₺250', stock: "Mevcut", image: 'https://example.com/celik-catal-bicak-seti.jpg', description: 'Paslanmaz çelik çatal bıçak seti', discount: 20, type: 'Set', brand: 'BrandG', color: 'Gümüş' },
  { id: 8, name: 'Plastik Saklama Kabı', price: '₺30', stock: "Mevcut", image: 'https://example.com/plastik-saklama-kabi.jpg', description: 'Dayanıklı plastik saklama kabı', discount: 0, type: 'Set', brand: 'BrandH', color: 'Beyaz' },
  { id: 9, name: 'Ahşap Kesme Tahtası', price: '₺60', stock: "Mevcut", image: 'https://example.com/ahsap-kesme-tahtasi.jpg', description: 'Sağlam ahşap kesme tahtası', discount: 10, type: 'Set', brand: 'BrandI', color: 'Kahverengi' },
  { id: 10, name: 'Elektrikli Çay Makinesi', price: '₺300', stock: "Bitti", image: 'https://example.com/elektrikli-cay-makinesi.jpg', description: 'Pratik elektrikli çay makinesi', discount: 25, type: 'Makine', brand: 'BrandJ', color: 'Beyaz' },
  { id: 11, name: 'Granit Tava', price: '₺180', stock: "Mevcut", image: 'https://example.com/granit-tava.jpg', description: 'Yapışmaz granit tava', discount: 15, type: 'Tencere', brand: 'BrandK', color: 'Gri' },
  { id: 12, name: 'Porselen Kahve Fincanı', price: '₺50', stock: "Mevcut", image: 'https://example.com/porselen-kahve-fincani.jpg', description: 'Şık porselen kahve fincanı', discount: 5, type: 'Kupa', brand: 'BrandL', color: 'Beyaz' },
  { id: 13, name: 'Bambu Mutfak Seti', price: '₺220', stock: "Mevcut", image: 'https://example.com/bambu-mutfak-seti.jpg', description: 'Doğal bambu mutfak seti', discount: 10, type: 'Set', brand: 'BrandM', color: 'Kahverengi' },
  { id: 14, name: 'Çelik Termos', price: '₺100', stock: "Bitti", image: 'https://example.com/celik-termos.jpg', description: 'Dayanıklı çelik termos', discount: 0, type: 'Set', brand: 'BrandN', color: 'Gümüş' },
  { id: 15, name: 'Cam Kavanoz', price: '₺40', stock: "Mevcut", image: 'https://example.com/cam-kavanoz.jpg', description: 'Sağlıklı cam kavanoz', discount: 5, type: 'Set', brand: 'BrandO', color: 'Şeffaf' },
  { id: 16, name: 'Metal Çaydanlık', price: '₺170', stock: "Mevcut", image: 'https://example.com/metal-caydanlik.jpg', description: 'Dayanıklı metal çaydanlık', discount: 10, type: 'Çaydanlık', brand: 'BrandP', color: 'Gümüş' },
  { id: 17, name: 'Plastik Tabak Seti', price: '₺110', stock: "Mevcut", image: 'https://example.com/plastik-tabak-seti.jpg', description: 'Şık plastik tabak seti', discount: 0, type: 'Tabak', brand: 'BrandQ', color: 'Beyaz' },
  { id: 18, name: 'Seramik Kupa', price: '₺60', stock: "Bitti", image: 'https://example.com/seramik-kupa.jpg', description: 'Kaliteli seramik kupa', discount: 5, type: 'Kupa', brand: 'BrandR', color: 'Beyaz' },
  { id: 19, name: 'Kırmızı Tava', price: '₺220', stock: "Mevcut", image: 'https://example.com/kirmizi-tava.jpg', description: 'Dayanıklı kırmızı tava', discount: 15, type: 'Tencere', brand: 'BrandS', color: 'Kırmızı' },
  { id: 20, name: 'Yeşil Çaydanlık', price: '₺140', stock: "Mevcut", image: 'https://example.com/yesil-caydanlik.jpg', description: 'Şık yeşil çaydanlık', discount: 5, type: 'Çaydanlık', brand: 'BrandT', color: 'Yeşil' },
  { id: 21, name: 'Cam Bardak Seti', price: '₺90', stock: "Bitti", image: 'https://example.com/cam-bardak-seti.jpg', description: 'Kaliteli cam bardak seti', discount: 0, type: 'Bardak', brand: 'BrandU', color: 'Şeffaf' },
  { id: 22, name: 'Çelik Tencere', price: '₺250', stock: "Mevcut", image: 'https://example.com/celik-tencere.jpg', description: 'Paslanmaz çelik tencere', discount: 20, type: 'Tencere', brand: 'BrandV', color: 'Gümüş' },
  { id: 23, name: 'Plastik Saklama Kabı', price: '₺40', stock: "Mevcut", image: 'https://example.com/plastik-saklama-kabi.jpg', description: 'Dayanıklı plastik saklama kabı', discount: 0, type: 'Set', brand: 'BrandW', color: 'Beyaz' },
  { id: 24, name: 'Ahşap Kaşık Seti', price: '₺70', stock: "Mevcut", image: 'https://example.com/ahsap-kasik-seti.jpg', description: 'Sağlam ahşap kaşık seti', discount: 10, type: 'Set', brand: 'BrandX', color: 'Kahverengi' },
  { id: 25, name: 'Elektrikli Kahve Makinesi', price: '₺350', stock: "Bitti", image: 'https://example.com/elektrikli-kahve-makinesi.jpg', description: 'Pratik elektrikli kahve makinesi', discount: 25, type: 'Makine', brand: 'BrandY', color: 'Beyaz' },
  { id: 26, name: 'Granit Tencere', price: '₺200', stock: "Mevcut", image: 'https://example.com/granit-tencere.jpg', description: 'Yapışmaz granit tencere', discount: 15, type: 'Tencere', brand: 'BrandZ', color: 'Gri' },
  { id: 27, name: 'Porselen Tabak Seti', price: '₺80', stock: "Mevcut", image: 'https://example.com/porselen-tabak-seti.jpg', description: 'Şık porselen tabak seti', discount: 5, type: 'Tabak', brand: 'BrandA', color: 'Beyaz' },
  { id: 28, name: 'Bambu Çaydanlık', price: '₺230', stock: "Mevcut", image: 'https://example.com/bambu-caydanlik.jpg', description: 'Doğal bambu çaydanlık', discount: 10, type: 'Çaydanlık', brand: 'BrandB', color: 'Kahverengi' },
  { id: 29, name: 'Çelik Çaydanlık', price: '₺180', stock: "Mevcut", image: 'https://example.com/celik-caydanlik.jpg', description: 'Paslanmaz çelik çaydanlık', discount: 15, type: 'Çaydanlık', brand: 'BrandC', color: 'Gümüş' },
  { id: 30, name: 'Seramik Tabak Seti', price: '₺90', stock: "Mevcut", image: 'https://example.com/seramik-tabak-seti.jpg', description: 'Kaliteli seramik tabak seti', discount: 5, type: 'Tabak', brand: 'BrandD', color: 'Beyaz' },
  { id: 31, name: 'Plastik Bardak Seti', price: '₺50', stock: "Mevcut", image: 'https://example.com/plastik-bardak-seti.jpg', description: 'Dayanıklı plastik bardak seti', discount: 0, type: 'Bardak', brand: 'BrandE', color: 'Beyaz' },
  { id: 32, name: 'Ahşap Çatal Bıçak Seti', price: '₺120', stock: "Mevcut", image: 'https://example.com/ahsap-catal-bicak-seti.jpg', description: 'Doğal ahşap çatal bıçak seti', discount: 10, type: 'Set', brand: 'BrandF', color: 'Kahverengi' },
  { id: 33, name: 'Elektrikli Tost Makinesi', price: '₺300', stock: "Bitti", image: 'https://example.com/elektrikli-tost-makinesi.jpg', description: 'Pratik elektrikli tost makinesi', discount: 20, type: 'Makine', brand: 'BrandG', color: 'Beyaz' },
  { id: 34, name: 'Granit Tava Seti', price: '₺250', stock: "Mevcut", image: 'https://example.com/granit-tava-seti.jpg', description: 'Yapışmaz granit tava seti', discount: 15, type: 'Tencere', brand: 'BrandH', color: 'Gri' },
  { id: 35, name: 'Porselen Kahve Fincanı Seti', price: '₺100', stock: "Mevcut", image: 'https://example.com/porselen-kahve-fincani-seti.jpg', description: 'Şık porselen kahve fincanı seti', discount: 5, type: 'Kupa', brand: 'BrandI', color: 'Beyaz' },
  { id: 36, name: 'Bambu Mutfak Gereçleri', price: '₺150', stock: "Mevcut", image: 'https://example.com/bambu-mutfak-gerecleri.jpg', description: 'Doğal bambu mutfak gereçleri', discount: 10, type: 'Set', brand: 'BrandJ', color: 'Kahverengi' },
  { id: 37, name: 'Çelik Termos Seti', price: '₺200', stock: "Bitti", image: 'https://example.com/celik-termos-seti.jpg', description: 'Dayanıklı çelik termos seti', discount: 0, type: 'Set', brand: 'BrandK', color: 'Gümüş' },
  { id: 38, name: 'Cam Saklama Kabı', price: '₺60', stock: "Mevcut", image: 'https://example.com/cam-saklama-kabi.jpg', description: 'Sağlıklı cam saklama kabı', discount: 5, type: 'Set', brand: 'BrandL', color: 'Şeffaf' },
  { id: 39, name: 'Metal Çaydanlık Seti', price: '₺300', stock: "Mevcut", image: 'https://example.com/metal-caydanlik-seti.jpg', description: 'Dayanıklı metal çaydanlık seti', discount: 10, type: 'Çaydanlık', brand: 'BrandM', color: 'Gümüş' },
  { id: 40, name: 'Plastik Tabak Seti', price: '₺110', stock: "Mevcut", image: 'https://example.com/plastik-tabak-seti.jpg', description: 'Şık plastik tabak seti', discount: 0, type: 'Tabak', brand: 'BrandN', color: 'Beyaz' },
  { id: 41, name: 'Seramik Kupa Seti', price: '₺70', stock: "Bitti", image: 'https://example.com/seramik-kupa-seti.jpg', description: 'Kaliteli seramik kupa seti', discount: 5, type: 'Kupa', brand: 'BrandO', color: 'Beyaz' },
  { id: 42, name: 'Kırmızı Tencere Seti', price: '₺220', stock: "Mevcut", image: 'https://example.com/kirmizi-tencere-seti.jpg', description: 'Dayanıklı kırmızı tencere seti', discount: 15, type: 'Tencere', brand: 'BrandP', color: 'Kırmızı' },
  { id: 43, name: 'Yeşil Çaydanlık Seti', price: '₺140', stock: "Mevcut", image: 'https://example.com/yesil-caydanlik-seti.jpg', description: 'Şık yeşil çaydanlık seti', discount: 5, type: 'Çaydanlık', brand: 'BrandQ', color: 'Yeşil' },
  { id: 44, name: 'Cam Bardak Seti', price: '₺90', stock: "Bitti", image: 'https://example.com/cam-bardak-seti.jpg', description: 'Kaliteli cam bardak seti', discount: 0, type: 'Bardak', brand: 'BrandR', color: 'Şeffaf' },
  { id: 45, name: 'Çelik Tencere Seti', price: '₺250', stock: "Mevcut", image: 'https://example.com/celik-tencere-seti.jpg', description: 'Paslanmaz çelik tencere seti', discount: 20, type: 'Tencere', brand: 'BrandS', color: 'Gümüş' },
  { id: 46, name: 'Plastik Saklama Kabı Seti', price: '₺40', stock: "Mevcut", image: 'https://example.com/plastik-saklama-kabi-seti.jpg', description: 'Dayanıklı plastik saklama kabı seti', discount: 0, type: 'Set', brand: 'BrandT', color: 'Beyaz' },
];