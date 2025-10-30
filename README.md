🎬 Film Kütüphanesi - React Dizi Arama Platformu
Bu proje, TVMaze API'sini kullanarak dizi aramanıza, filtrelemenize ve kişisel "Gösterime Girecekler" listenizi oluşturmanıza olanak tanıyan modern bir React uygulamasıdır.

Uygulama, React'in useReducer ve useContext gibi güçlü hook'larını kullanarak verimli bir state yönetimi sağlar ve tamamen duyarlı (responsive) bir arayüze sahiptir.

🚀 Canlı Demo
Uygulamanın Vercel üzerinde yayınlanan canlı demosuna aşağıdaki linkten erişebilirsiniz:

https://film-kutuphanesi-five.vercel.app/

📸 Ekran Görüntüsü
(Bu bölümü projenizin anasayfasından aldığınız bir ekran görüntüsü ile güncelleyin. anasayfa.png gibi bir dosyayı projenize ekleyip aşağıdaki satırı düzenleyebilirsiniz.)

✨ Temel Özellikler
Estetik Arayüz: Siyah'tan Pembe'ye (Synthwave) geçişli, modern ve duyarlı (responsive) tasarım.

API Entegrasyonu: TVMaze API kullanarak anlık dizi arama.

Merkezi State Yönetimi: useReducer ve useContext hook'ları ile yönetilen global "Gösterime Girecekler" (Watchlist) paneli (Ekleme / Çıkarma / Listeyi Temizleme).

Bileşen Tabanlı Liste: Arama sonuçlarının TVCard bileşenleri ile bir grid yapısında listelenmesi.

İstemci Taraflı Filtreleme: Sonuçları Türe, Dile ve Minimum Puana göre anlık olarak filtreleme.

Sayfalama (Pagination): Uzun sonuç listeleri için "İlk, Son, İleri, Geri" navigasyonu.

Dinamik Rota (Routing): react-router-dom ile her dizi için ayrı bir detay sayfası (/show/:id).

Detay ve Bölüm Listesi: Detay sayfasında dizinin tüm künyesi ve bölümlerinin (episodes) listelenmesi.

Koşullu Render: Yükleniyor (Loading), Hata (Error) ve Boş Sonuç (Empty) durumları için net kullanıcı bildirimleri.

🛠️ Kullanılan Teknolojiler
Bu proje, modern React ekosisteminin temel araçları kullanılarak oluşturulmuştur:

React (Vite): Hızlı ve verimli bir geliştirme ortamı için.

React Hooks:

useReducer: Tüm uygulama durumunu (diziler, filtreler, izleme listesi) tek bir merkezden yönetmek için.

useContext: state ve dispatch fonksiyonlarını "prop drilling" olmadan bileşenlere dağıtmak için.

useEffect: Asenkron API çağrılarını tetiklemek için.

useState: Sayfalama gibi yerel durumlar için.

useParams: URL'den :id parametresini almak için.

React Router DOM (v6): Anasayfa ve detay sayfası arasındaki istemci taraflı yönlendirme için.

Axios: TVMaze API'sine asenkron GET istekleri yapmak için.

CSS3: Modern CSS, Degrade (gradient) arkaplanlar, Flexbox, Grid ve Responsive tasarım.

🌐 Kullanılan API
Tüm dizi verileri, ücretsiz ve halka açık olan TVMaze Public API'den alınmaktadır.

Arama: https://api.tvmaze.com/search/shows?q=<query>

Detay: https://api.tvmaze.com/shows/:id

Bölümler: https://api.tvmaze.com/shows/:id/episodes

⚙️ Kurulum ve Çalıştırma
Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

1. Projeyi klonlayın: (Eğer projeniz GitHub'daysa, buraya kendi reponuzun linkini ekleyin)

Bash

git clone https://github.com/KULLANICI_ADINIZ/PROJE_ADINIZ.git
2. Proje dizinine gidin:

Bash

cd film-kutuphanesi-five
3. Gerekli bağımlılıkları yükleyin:

Bash

npm install
4. Geliştirme sunucusunu başlatın:

Bash

npm run dev
Uygulama varsayılan olarak http://localhost:5173 (veya terminalde belirtilen başka bir port) adresinde çalışmaya başlayacaktır.

👨‍💻 Geliştirici
[Cihan Umut Çolak]

[(Linkedin profilim için tıklayınız.)](https://www.linkedin.com/in/cihanumut9/)
