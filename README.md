# React-Native-YellowTaxi-App

## Kurulum
  >npm install
  
  >npm run android
  
  >**Bilgisayarınızda kurulu bir sanal makina olmalıdır. (Android Studio Virtual Device vs..)
  
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


## Akış Diagramı

![diagram](https://user-images.githubusercontent.com/48925129/117534637-01fde280-affb-11eb-8b94-23d6f94d965f.png)

## Sorgular

- **Tip-1 :**En fazla yolcu taşınan 5 günü ve toplam yolcu sayılarını listeler.
- 
- **Tip-2 :**Seçilen iki tarih arasında seyahat edilen en az mesafeli 5 yolculuğu listeler.
- 
- **Tip-3 :**Seçilen bir tarihte en uzun seyahatin harita üzerinde yolunu çizer. Başlangıç ve bitiş konumlarını farklı renklerde marker ile gösterir ve konum adını yazar.

![resim1](https://user-images.githubusercontent.com/48925129/117534691-3b365280-affb-11eb-8399-bed25af6f855.png)
![resim-2](https://user-images.githubusercontent.com/48925129/117534696-40939d00-affb-11eb-8a01-adaf497c215b.png)
![resim3](https://user-images.githubusercontent.com/48925129/117534701-44bfba80-affb-11eb-8a43-112b291aaf7f.png)
![resim4](https://user-images.githubusercontent.com/48925129/117534706-47baab00-affb-11eb-8068-7939dfcbd1b4.png)





