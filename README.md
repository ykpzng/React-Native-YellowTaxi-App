# React-Native-YellowTaxi-App

## Kurulum
  >npm install
  
  >npm run android
  
  >**Bilgisayarınızda kurulu bir sanal makina olmalıdır. (Android Studio Virtual Device vs..)
  
  >**Google Map verilerini kullanabilmek için https://console.cloud.google.com/google/maps-apis adresinden **api key** alınmalıdır. Ana dizinde "epikey.js" dosyasına eklenmelidir. Aşağıdaki apiler de aktif hale getirilmelidir.
  
  >**Server olarak **MongoDb Realm** kullanıldığı için realm fonksiyonları(mongoDb sorguları) realm kısmında yazıldı. Sadece burda göstermek amaçlı **realm.js** altına bu fonksiyonlar eklenmiştir. Native tarafında bu fonksiyonların işlevi yoktur. 
 
 ### Kullanılan Google Apis
  - **Maps SDK for Android**
  
   Yerel Android uygulamanız için haritalar.
   
  - **Directions API**

   Birden çok yer arasındaki yol tarifi. Harita üzerine yol çizebilmek için kullanılmıştır.
   
   - **Geocoding API**
   
   Adresler ve coğrafi koordinatlar arasında dönüştürme yapın. Adreslerden enlem ve boylam çıkarmak için kullanılmıştır
   
   
## Proje

Bu projede bulut bilişim ve google map api kullanarak android platformunda bir uygulama geliştirilmiştir. 

Projede Android geliştirme ortamı olarak **React Native** ve bulut sistem olarak ta **MongoDb Realm** kullanılmıştır.

Projede kullanılacak olan data **New York City Taxi** gezinge verileridir. Bu veriler The New York City Taxi and Limousine Commission (TLC) tarafından düzenli olarak tutulmaktadır ve herkese açıktır. Verilerin çok büyük olması sebebiyle sace Aralık 2020 sarı taksi datası kullanılacaktır. 

>Verinin indirileceği adres ve dosya adları aşağıdadır.

- **Dosya adresi :** https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page

- **Dosya ismi 1 :** yellow tripdata 2020-12.csv

- **Dosya ismi 2 :** taxi+ zone lookup.csv

## Database

MongoDb ye Json formatında iki adet colection ekleniyor..


![data](https://user-images.githubusercontent.com/48925129/117534592-c6fbaf00-affa-11eb-8f8d-95702a8216ed.png)


## Akış Diyagramı

![diagram](https://user-images.githubusercontent.com/48925129/117534637-01fde280-affb-11eb-8b94-23d6f94d965f.png)

## Sorgular

- **Tip-1 :** En fazla yolcu taşınan 5 günü ve toplam yolcu sayılarını listeler.
- 
- **Tip-2 :** Seçilen iki tarih arasında seyahat edilen en az mesafeli 5 yolculuğu listeler.
- 
- **Tip-3 :** Seçilen bir tarihte en uzun seyahatin harita üzerinde yolunu çizer. Başlangıç ve bitiş konumlarını farklı renklerde marker ile gösterir ve konum adını yazar.

![resim1](https://user-images.githubusercontent.com/48925129/117535425-5fdff980-affe-11eb-9b59-fe18fe440227.png)
![resim-2](https://user-images.githubusercontent.com/48925129/117535427-61a9bd00-affe-11eb-9fe4-3d8adb4f7226.png)
![resim3](https://user-images.githubusercontent.com/48925129/117535428-62daea00-affe-11eb-9e72-4660bda90ae9.png)
![resim4](https://user-images.githubusercontent.com/48925129/117535429-640c1700-affe-11eb-98c5-4e80831e5ad8.png)






