![カバー](https://github.com/digbug82/PikPak_Enhancement_Master/blob/cc93155fbfb1f6b64a01d0628167dcd78d15bcda/img/cover_ja.png)

# 📦 PikPak 強化マスター

> 🚀 PikPak Web版用のクラウドドライブ管理ツール。Web上でもローカルファイルシステムに匹敵する操作体験を提供。

---

## 🌍 対応言語 (Languages)

[日本語](https://github.com/digbug82/PikPak_Enhancement_Master/blob/3ec52a7029ee311abefeb7c7e0375a4c1f2787c7/i18n/README(ja).md) | [简体中文](https://github.com/digbug82/PikPak_Enhancement_Master/blob/3ec52a7029ee311abefeb7c7e0375a4c1f2787c7/i18n/README(zh).md) | [繁體中文](https://github.com/digbug82/PikPak_Enhancement_Master/blob/3ec52a7029ee311abefeb7c7e0375a4c1f2787c7/i18n/README(tc).md) | [English](https://github.com/digbug82/PikPak_Enhancement_Master/blob/3ec52a7029ee311abefeb7c7e0375a4c1f2787c7/README.md) | [한국어](https://github.com/digbug82/PikPak_Enhancement_Master/blob/3ec52a7029ee311abefeb7c7e0375a4c1f2787c7/i18n/README(ko).md)

---

## ✨ 主な機能 (Features)

### ✨ 体験とナビゲーションエンジン

* **UI再構築**：Windowsファイルエクスプローラーに似たデザインで、操作体験を大幅に向上

* **高速モード**：Webロジックを置き換え、ネイティブ同期を無効化（設定で有効化推奨）

* **高度なパスバー**：スクロール、ドロップダウン切替、パス表示、ブレッドクラムジャンプ対応

* **体験強化**：

  * ダークモード
  * 動画時間表示
  * ワンクリックでカバーをぼかす（プライバシー保護）
  * お気に入り & ファイルタイプ別ソート対応

* **バックグラウンド自動インデックス**：ホームアイコンの青点でディレクトリ同期状態を表示

---

### 📂 バッチおよびストレージ管理

* **一括リネーム**

  * 正規表現による置換 / 削除
  * シリーズ番号生成
  * テキストフォーマット（大文字/小文字、全角/半角）
  * 番号 / FC2 標準命名
  * プレフィックス広告削除
  * MIME拡張子修正

* **分析ツール**

  * ファイル分析（タイプフィルタ + 重複チェック：ハッシュ / 長さ / 名前）
  * フォルダ分析（サイズフィルタ + 重複チェック：名前 / 類似度 / 含有率）
  * ディレクトリツリーのエクスポート対応

* **スマート整理**

  * 空フォルダの削除
  * 一括解凍（パスワード自動入力 + 解凍後自動削除）

* **リソースマネージャー**

  * ブラックリスト：ゴミファイルを素早く削除
  * ホワイトリスト：一括削除保護
  * 設定でカスタムルール対応

> ⚠️ 操作中は複数端末で同時にデータを変更しないでください。

---

### 🌐 転送と共有センター

* **共有管理**：取得回数制限対応、共有自動解除

* **オフラインダウンロード**：バッチオフラインタスク + リンクエクスポート

* **高速アップロード**

  * 大容量ファイル対応
  * 小容量ファイルのアップロード失敗率大幅低減

> ⚠️ 取得回数制限はフロントエンドのロジックに依存し、Webページがアクティブでデバイスがスリープしていない場合のみ有効です。

---

### 🎬 没入型メディア強化

* **再生エンジン**

  * 0.5x – 3.0x 倍速
  * 回転 / ミラー / アスペクト比調整
  * 自動オープニング/エンディングスキップ
  * 連続再生 / ループモード
  * タイムラインサムネイルプレビュー

* **字幕システム**

  * クラウド / ローカル / オンライン検索
  * 字幕個別設定
  * ドラッグ＆ドロップで字幕読み込み

* **視覚補助**

  * 画像検索（画像 / 動画フレーム）
  * メディアモード（シリーズ / 漫画自動A-Zソート）

---

### ⚙️ 設定およびデータ管理

* **設定バックアップ**

  * JSONエクスポート
  * デバイス間移行対応

* **データクリア**

  * 全ディスクインデックス / 設定 / 管理ルール / パスワード保管庫 / 履歴データ

> 📌 全ディスクインデックスは一時データ、それ以外は永続データ

---

### ⚡ ダウンロードと配布

* **外部直リンク**

  * Aria2 / MotrixへのRPC送信対応

* **ダウンロードフィルター**

  * 拡張子 / キーワードでのファイルフィルタリング対応

---

## 📥 インストール手順 (Installation)

### 1️⃣ ユーザースクリプトマネージャーのインストール

* 👉 [Tampermonkey](https://greasyfork.org/ko/scripts/556685)

### 2️⃣ スクリプトのインストール

* [`PikPak_Enhancement_Master.user.js`](https://github.com/digbug82/PikPak_Enhancement_Master/blob/cffc9e5d9a72c3ae1063305572b62be9a607a03d/PikPak_Enhancement_Master.user.js) をクリックしてインストール
* または拡張機能に手動でインポート

### 3️⃣ [PikPak Web](https://mypikpak.com/drive) を開く

### 4️⃣ スクリプトを起動

ページ更新後、**サイドバーのフローティングボタン**をクリックして起動 ✅

---

## 🙏 謝辞 (Acknowledgements)

* プロジェクトのインスピレーション:  
  👉 [PikPak File Manager v1.2.0](https://github.com/poihoii/PikPak_FileManager)

* 原作者: 브랜뉴

---

## ⚖️ ライセンス (License)

本プロジェクトは **CC-BY-NC-SA-4.0 ライセンス**に従います

* 🚫 商用利用禁止
* 📢 再配布時は著作者表記および同一ライセンスを保持
