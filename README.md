「このリポジトリは Code Chrysalis の生徒であるときに作成しました（This was created during my time as a student at Code Chrysalis）」

# API-SOLO

## 残り物管理用 API の利用方法

### 残り物を何に使うことができるのか、検索・ノウハウ追加・削除をすることができる

### GET 　残り物検索

```
http://localhost:3000/leftovers
```

全ての残り物の管理方法・使い道を検索する。  
※id を指定することで 一意の検索も実施可能。

- URL param の中で設定可能なパラメータ  
   id（自動設定（必須項目））：管理 ID：Int

### GET 　登録可能なジャンル検索

```
http://localhost:3000/genres
```

全ての残り物の管理方法のジャンルを検索する。  
※id を指定することで 一意の検索も実施可能。

- URL param の中で設定可能なパラメータ  
   id（自動設定（必須項目））：管理 ID：Int

### POST 　残り物登録

```
http://localhost:3000/leftovers
```

※Request Body で具体的な内容を登録する。

- Request Body に設定可能なパラメータ  
   titlename（必須）： 残り物名 ： string
  genre（必須）：ジャンル： string
  useleftover（任意）：残り物の使い道：string

### POST 　登録可能なジャンル追加

```
http://localhost:3000/genres
```

※Request Body で具体的な内容を登録する。

- URL param の中で設定必要なパラメータ  
   genre（必須）：ジャンル名：string

### PATCH 　残り物使い道修正

```
http://localhost:3000/leftovers/:id
```

※Request Body で修正した内容を登録する。

- Request Body に設定可能なパラメータ  
   titlename（任意）： 残り物名 ： string
  genre（任意）：ジャンル： string
  useleftover（任意）：残り物の使い道：string

### PUT

```
http://localhost:3000/api/user/:id
```

※Request Body で修正した内容を登録する。

- Request Body に設定可能なパラメータ  
   titlename（任意）： 残り物名 ： string
  genre（任意）：ジャンル： string
  useleftover（任意）：残り物の使い道：string

### DELETE

```
http://localhost:3000/leftovers/:id
```

※id で指定した残り物利用方法を削除する。

- URL param の中で設定可能なパラメータ  
   id（必須）：管理 ID：Int 型

---

## タスク管理用 API の利用方法

生活している中で発生した、残り物の使い道を検索したり、活用方法を登録することができる。
企業の場合、産業廃棄物の登録や賞味期限切れの食品を登録する。
今後登録数が増えた場合を想定し、ジャンルを分けて管理するためジャンル追加が可能。

### GET

・残り物の活用法の検索
・ジャンル一覧の取得

### POST

・残り物活用方法の登録
・ジャンルの追加

### PATCH

・残り物活用方法の一部修正

### PUT

・残り物活用方法の修正

### DELETE

・残り物活用方法を削除

---

## 利用したサービス

### Node.js

<img src="./img/node.png" width="400">

https://nodejs.org/ja/

### express

<img src="./img/Express.PNG" width="400">

https://expressjs.com/

### typeORM

<img src="./img/typeORM.png" width="400">

https://typeorm.io/#/

### typeORM

<img src="./img/postgress.png" width="400">

https://www.postgresql.org/
