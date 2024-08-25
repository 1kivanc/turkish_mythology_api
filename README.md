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
### 2. Belirli sayıda Belirli Sayıda Mitolojik Karakter Listele

Endpoint:
```bash
GET /api/mythologicalFigures?limit={number}
```

Bu rota, veritabanındaki belirli bir sayıda mitolojik karakterin bilgilerini döndürür. İstediğiniz karakter sayısını limit parametresi ile belirleyebilirsiniz. Eğer limit parametresi belirtilmezse, tüm karakterler döndürülür. Eğer veritabanında istenen sayıda karakter yoksa, mevcut olan karakterler döndürülür ve geri kalan için "İstenen sayıda mitolojik karakter bulunamadı" mesajı döner.


### 3. Belirli Bir Mitolojik Karakteri Getir

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

### 4. Rastgele Bir Mitolojik Karakter Getir

Bu istek, Rastgele bir Mitolojik karakter getirir

Örnek İstek:

```bash
GET /api/mythologicalFigures/random
```

```bash
GET /api/mythologicalFigures/random?lang=en
```

```bash
{
    "name": "Tepegöz",
    "descriptions": {
        "short": "Tepegöz is a one-eyed and gigantic being who lives on Mount Qaf. He is born from the union of a shepherd and a fairy girl, and his mother is a female Alageyik (Fallow Deer).",
        "long": "Tepegöz is a well-known one-eyed and gigantic figure in Turkish mythology and epics. He lives on Mount Qaf and is often depicted as a large, undefined entity floating on water, resembling a formless blob. Sometimes portrayed as male and sometimes female, Tepegöz's mother is a female Alageyik who wears a ring on her finger. Tepegöz's giant form is related to the general term 'Yelbegen' used for giants in Turkish mythology. In Altai Turkish epics, Yelbegens are described as human-shaped, enormous beings with three, seven, or twelve black and yellow heads. Yelbegens are said to cause solar and lunar eclipses by devouring the sun and moon. In Turkish epics, giants are known as enemies of horses. The iron Yelbegen is described as being as tall as a black pine, riding a black horse, and wielding a club-like weapon. Large-eared giants are said to live underground, and female giants known as 'giant mothers' also exist. Giants with their lower lip on the ground and upper lip in the sky are common motifs in Anatolian Turkish tales. Tepegöz, with his single eye and giant form, is considered a terrifying figure in mythology. His stories offer a rich narrative both mythologically and culturally, presenting a world filled with supernatural forces."
    },
    "attributes": [
        "One-eyed",
        "Giant",
        "Terrifying"
    ],
    "symbols": "One eye",
    "associatedAnimals": [
        "Deer"
    ],
    "image": "https://img-s1.onedio.com/id-553fabc604fca38f6f8c4ccc/rev-0/w-635/listing/f-jpg-webp/s-94dbe6d44bac6e925288500e2e0a564f30a6c4e3.webp"
}
```

### 5. Yeni Mitolojik Karakter Ekle

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

### 6. Mitolojik Karakter Güncelle

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

### 7. Mitolojik Karakter Sil

Endpoint:

```bash
DELETE /api/mythologicalFigures/:id
```

Bu rota, belirtilen id parametresine sahip mitolojik karakteri siler. Bu işlem yalnızca yönetici kullanıcılar tarafından yapılabilir.

Bu API, projelerinizde Türk mitolojisindeki karakterlerle ilgili bilgilere kolayca erişmenizi sağlar. Katkıda bulunmak veya geri bildirimde bulunmak isterseniz, lütfen projeye katkıda bulunun veya bir issue açın.
