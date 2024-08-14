# Türk Mitolojisi API

Türk Mitolojisi API'sine hoş geldiniz! Bu proje, Türk mitolojisinde yer alan çeşitli mitolojik figürler hakkında bilgi sağlar. İster genel bilgi edinmek isteyin, ister belirli bir karakteri arıyor olun, bu API sizin için tasarlandı. Ayrıca, yalnızca yönetici kullanıcılar yeni karakterler ekleyebilir ve mevcut karakterleri güncelleyebilir.

## Genel Bakış

Bu API, Türk mitolojisindeki figürlerin verilerini JSON formatında sunar. Aşağıda, bu API'yi nasıl kullanabileceğinizi anlatan temel bilgileri bulabilirsiniz.

## Temel Rotalar

### 1. Tüm Mitolojik Karakterleri Listele

**Endpoint:**

```bash
GET /api/mythologicalFigures
```
Bu rota, veritabanındaki tüm mitolojik karakterlerin bilgilerini varsayılan olarak türkçe döndürür. İsterseniz lang parametresi ile verileri ingilizce de alabilirsiniz.
```bash
{
        "name": "Ülgen",
        "descriptions": {
            "short": "Türk mitolojisinde gök tanrısıdır.",
            "long": "Ülgen, Türk mitolojisinde gök tanrısıdır ve iyiliğin, koruyucu güçlerin simgesidir. Göğün 16. katında, Altın Dağ'da altın bir taht üzerinde oturur."
        },
        "attributes": [
            "Yaratıcı güç",
            "Koruyucu",
            "Bilge"
        ],
        "symbols": "Güneş",
        "associatedAnimals": [
            "Kartal"
        ],
        "image": "https://example.com/images/ulgen.jpg"
}

```

Örnek İstek:
```bash
GET /api/mythologicalFigures?lang=en
```
Örnek Yanıt:
```bash
[
    {
        "name": "Ülgen",
        "descriptions": {
            "short": "The sky god in Turkish mythology.",
            "long": "Ülgen is the sky god in Turkish mythology, symbolizing goodness and protective powers..."
        },
        "attributes": ["Creative power", "Protective", "Wise"],
        "symbols": "Sun",
        "associatedAnimals": ["Eagle"],
        "image": "https://example.com/images/ulgen.jpg"
    },
    {
        "name": "Erlik",
        "descriptions": {
            "short": "The god of the underworld in Turkish mythology.",
            "long": "Erlik is the god of the underworld in Turkish mythology, representing darkness and evil..."
        },
        "attributes": ["Dark power", "Underworld", "Strong"],
        "symbols": "Black horse",
        "associatedAnimals": ["Wolf"],
        "image": "https://example.com/images/erlik.jpg"
    }
]
```
### 2. Belirli Bir Mitolojik Karakteri Getir
Endpoint:
```bash
GET /api/mythologicalFigures/:id
```

Bu rota, belirtilen id parametresine sahip mitolojik karakterin bilgilerini döndürür.

Örnek İstek:
```bash
GET /api/mythologicalFigures/1234567890abcdef?lang=en
```
```bash
{
    "name": "Ülgen",
    "descriptions": {
        "short": "The sky god in Turkish mythology.",
        "long": "Ülgen is the sky god in Turkish mythology, symbolizing goodness and protective powers..."
    },
    "attributes": ["Creative power", "Protective", "Wise"],
    "symbols": "Sun",
    "associatedAnimals": ["Eagle"],
    "image": "https://example.com/images/ulgen.jpg"
}
```
### 3. Yeni Mitolojik Karakter Ekle
Endpoint:
```bash
POST /api/mythologicalFigures
```
Bu rota, yeni bir mitolojik karakter ekler. Bu işlem yalnızca yönetici kullanıcılar tarafından yapılabilir.

Örnek İstek Gövdesi:
```bash
{
    "name": "Ülgen",
    "descriptions": {
        "short": {
            "tr": "Türk mitolojisinde gök tanrısıdır.",
            "en": "The sky god in Turkish mythology."
        },
        "long": {
            "tr": "Türk mitolojisinde gök tanrısıdır ve iyiliğin, koruyucu güçlerin simgesidir...",
            "en": "Ülgen is the sky god in Turkish mythology, symbolizing goodness and protective powers..."
        }
    },
    "attributes": {
        "tr": ["Yaratıcı güç", "Koruyucu", "Bilge"],
        "en": ["Creative power", "Protective", "Wise"]
    },
    "symbols": {
        "tr": "Güneş",
        "en": "Sun"
    },
    "associatedAnimals": {
        "tr": ["Kartal"],
        "en": ["Eagle"]
    },
    "image": "https://example.com/images/ulgen.jpg"
}
```
### 4. Mitolojik Karakter Güncelle
Endpoint:
```bash
PATCH /api/mythologicalFigures/:id
```
Bu rota, belirtilen id parametresine sahip mitolojik karakterin bilgilerini günceller. Bu işlem yalnızca yönetici kullanıcılar tarafından yapılabilir.

Örnek İstek Gövdesi:
```bash
{
    "name": "Ülgen",
    "descriptions": {
        "short": {
            "tr": "Güncellenmiş kısa açıklama",
            "en": "Updated short description"
        }
    }
}
```
### 5. Mitolojik Karakter Sil
Endpoint:
```bash
DELETE /api/mythologicalFigures/:id
```
Bu rota, belirtilen id parametresine sahip mitolojik karakteri siler. Bu işlem yalnızca yönetici kullanıcılar tarafından yapılabilir.

Bu API, projelerinizde Türk mitolojisindeki karakterlerle ilgili bilgilere kolayca erişmenizi sağlar. Katkıda bulunmak veya geri bildirimde bulunmak isterseniz, lütfen projeye katkıda bulunun veya bir issue açın.

