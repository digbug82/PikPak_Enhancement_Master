<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/turbo/turbo_ja.gif" alt="カバー">
</p>

# 📦 PikPak 拡張マスター

<a href="https://github.com/digbug82/PikPak_Enhancement_Master/raw/main/PikPak_Enhancement_Master.user.js" target="_blank">
  <img src="https://img.shields.io/badge/Version-1.0.0-0067C0?style=flat-square" alt="Version">
</a>
<a href="https://spdx.org/licenses/CC-BY-NC-SA-4.0.html" target="_blank">
  <img src="https://img.shields.io/badge/License-CC--BY--NC--SA--4.0-red?style=flat-square" alt="License">
</a>
<a href="https://mypikpak.com/drive/all" target="_blank">
  <img src="https://img.shields.io/badge/Platform-PikPak%20Web-orange?style=flat-square" alt="Platform">
</a>

> 一括解凍、スマート重複チェック、多機能一括リネーム、Aria2 へ送信、空フォルダ削除、ディレクトリ出力、メディア再生エンジンの強化などを統合したデスクトップ級のファイル管理ツールです。

---

## 🌍 対応言語 (Languages)

[简体中文](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/README.md) | [繁體中文](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(tc).md) | [English](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(en).md) | [한국어](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(ko).md) | [日本語](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(ja).md)

---

## ✨ 主な機能 (Features)

### ✨ エクスペリエンス＆ナビゲーション

* **インタラクションの再構築**：Windows エクスプローラー風のインターフェース設計により、操作性を全面的に向上
* **極速モード**：ウェブ版のロジックを置き換え、ネイティブ同期をブロック（**設定での有効化を推奨**）
* **高機能パスバー**：ホイールスクロール、ドロップダウン切替、パスの履歴表示、ディレクトリの遡及に対応
* **バックグラウンド・インデックス**：ホームアイコンの青い点滅インジケーターでディレクトリの同期状態を表示
* **UXの強化**：テーマ切替（ダークモード）、動画の長さ表示、カバー画像をぼかす（プライバシーモード）、スター付き、ファイルタイプによるソートをサポート

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/table/table_ja.gif" alt="パスバー">
</p>

---

### 📂 一括処理＆ストレージ管理

* **一括リネーム**：正規表現置換/削除、シリーズ番号生成、テキスト整形、言語設定に基づく品番リネーム、広告タグ削除、MIME による拡張子修復に対応
  
<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/rename/rename_ja.gif" width="550" alt="一括リネーム">
</p>

* **分析スイート**：ファイル分析（種別フィルタおよび完全/長さ/名前重複チェック）、フォルダ分析（サイズフィルタおよび名前/類似度/包含率重複チェック）、ディレクトリ出力（ツリー形式）機能を搭載

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/tree/tree_ja.png" width="350" alt="ディレクトリ出力">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/file/file_ja.gif" width="300" alt="ファイル分析">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/folder/folder_ja.gif" width="350" alt="フォルダ分析">
</p>

* **スマート整理**：ワンクリックで空フォルダ削除、一括解凍（パスワード庫による解凍パスワードの記憶、スマート自動入力、解凍済み項目の自動削除）に対応

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/archive/archive_ja.png" width="250" alt="パスワード庫">
</p>

* **リソース管理**：設定により、リソース管理をブラックリスト（不要ファイルのクリーンアップ）またはホワイトリスト（一括削除からの保護）としてカスタマイズ可能

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/manager/manager_ja.gif" width="550" alt="リソース管理">
</p>

---

### 🌐 転送＆共有センター

* **共有管理**：抽出回数の制限設定および到達時の自動共有解除に対応
* **オフラインダウンロード**：一括オフラインタスク作成 ＋ リンク書き出し
* **高速アップロード**：大容量ファイルに対応し、小容量ファイルの転送中断率を大幅に低減

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/share/share_ja.gif" width="350" alt="共有管理">
</p>

> ⚠️ 抽出回数の制限機能は、ページを開いており、コンピュータがスリープ状態でない場合にのみ動作します。

---

### 🎬 没入型メディア拡張

* **再生エンジン**：0.5x–3.0xの倍速再生、回転/反転/比率調整、OP/EDスキップ、連続再生/ループモード、再生バーのサムネイルプレビューをサポート
* **字幕システム**：クラウド/ローカル/オンライン検索、字幕の個別設定、ドラッグ＆ドロップによる字幕読み込みに対応
* **ビジュアルアシスト**：画像で検索（画像ファイルまたは動画フレームから）およびメディアモード（シリーズ/マンガの A-Z 自動ソート）を内蔵

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/video/video_ja.gif" alt="動画再生">
</p>

---

### ⚙️ 設定＆データ管理

* **設定のバックアップ**：JSON エクスポートによるデバイス間移行をサポート
* **データの削除**：全検索インデックス、基本設定、管理ルール、パスワード庫、動画キャッシュ、実行キャッシュの個別クリアに対応

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/cache/cache_ja.png" width="350" alt="キャッシュ管理">
</p>

> 📌 全検索インデックスは一時的なデータであり、ページを更新するたびに再取得されます。その他の設定データはブラウザに永続的に保存されます。

---

### ⚡ ダウンロード＆配布

* **外部ダイレクト接続**：Aria2 / Motrix への RPC 送信に対応
* **ダウンロードフィルタ**：フォルダ単位のダウンロード時に、拡張子やキーワードでファイルを自動除外するフィルタ機能を搭載

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/aria2/aria2_ja.gif" width="400" alt="Aria2">
</p>

---

## 💻 互換性について (Compatibility)

* **推奨ブラウザ**：Chrome / Edge (最新版)
* **推奨スクリプトマネージャー**：Tampermonkey / Violentmonkey
* *注：Safari、Firefox およびその他のマネージャーでは詳細なテストを行っていないため、最適な体験のために推奨環境の使用をお勧めします。*

---

## 📥 インストールガイド (Installation)

> 1. **事前準備**：ブラウザ拡張機能 [Tampermonkey](https://www.tampermonkey.net/) をインストールします。
> 2. **スクリプトのインストール**：**[今すぐインストール](https://github.com/digbug82/PikPak_Enhancement_Master/raw/main/PikPak_Enhancement_Master.user.js)** をクリックします。
> 3. **サイトへアクセス**：[PikPak 公式ウェブサイト](https://mypikpak.com/drive) を開きます。
> 4. **起動**：ログイン後、サイドバーに表示される青い **PikPak Logo 球** をクリックして PikPak 拡張マスターを起動します。未ログイン状態では起動できません。

---

## ❓ よくある質問 (FAQ)

**Q: スクリプトをインストールしたのに、青い浮遊アイコンが表示されません。**
**A:** PikPak ウェブ版にログインしているか確認してください。ログインしていても表示されない場合は、ページを更新 (F5) するか、広告ブロック（AdGuard / uBlock Origin など）で誤ってブロックされていないか確認し、本サイトをホワイトリストに登録してください。

**Q: 「極速モード (Turbo Mode)」とは何ですか？なぜ推奨されるのですか？**
**A:** このスクリプトの核となる機能です。有効にすると、メモリを大量に消費するウェブ版ネイティブの同期ロジックを物理的にブロックし、スクリプトが軽量な方式で管理します。メリット：ページの動作が重くなったりブラウザがクラッシュ (OOM) したりする問題を完全に解決し、数万のファイルがあるドライブでもデスクトップソフトのようにスムーズに動作します。

**Q: なぜホーム画面の My Pack に「既定」タグがあり、スター、コピー、移動、リネーム、削除ができないのですか？**
**A:** これはお客様のデータを守るための公式の安全保護メカニズムです。本スクリプトはこの保護に基づき、My Pack の共有制限のみを解除しています。

**Q: スクリプトにおける「ファイル重複チェック」と「フォルダ重複チェック」の決定的な違いは何ですか？どのように使い分ければよいですか？**
**A:** 1. **ファイル重複チェック：** 「個別のファイル」単位で動作します。完全一致 (ハッシュマッチ)、長さ類似、名前類似の 3 つのモードを使用し、ドライブ内に散在する重複ファイル（重複して保存した動画の単話や単体の画像など）を整理するのに適しています。 2. **フォルダ重複チェック：** 「フォルダ構造全体」単位で動作します。名前一致、類似度一致、包含率一致の 3 つのモードを使用します。フォルダの「中身の本質」を見抜くため、重複して保存した「シリーズ作品全体」や「画像パック」、「多階層の資料」などの整理に非常に適しています。フォルダ名が全く異なっていても、中身が高度に一致しているか包含関係があれば、正確に検出できます。

> **推奨：** 断片的なファイル整理には「ファイル重複チェック」、大型のリソースパック整理には「フォルダ重複チェック」を使用してください。ファイル重複チェックの「完全一致」はハッシュ照合のため、一括選択して削除しても安全です。一方、類似度や包含率に基づくアルゴリズムは、誤削除を防ぐため一括選択時の操作にはご注意ください。

**Q: なぜ「画像で検索」で直接アップロードされず、貼り付けを促されることがあるのですか？**
**A:** ブラウザのセキュリティポリシー（CORS 制約）による制限です。スクリプトが画像を検索サーバーに直接送信できない場合、現在のフレームのスクリーンショットをクリップボードに自動的にコピーします。開いた検索ページで `[Ctrl+V]` を押すだけで、識別が完了します。

**Q: スクリプトで再生した際、音は出るのに画面が出ないのはなぜですか？**
**A:** 通常、その動画が m3u8 形式などのマルチトラック配信ファイルである場合に発生します。クラウドでのトランスコード後に音声と映像のトラックが分離し、ウェブプレーヤーがオンラインでの多重トラック解析に対応していないためです。この場合、右下の「外部プレーヤーで再生」ボタンを押し、ローカルの PotPlayer などの専門プレーヤーでのストリーミング再生をお勧めします。

**Q: スマホアプリや公式ウェブ版で操作（アップロード、削除、移動など）した内容が、スクリプトの分析リストに即座に反映されないのはなぜですか？**
**A:** 検索や分析の速度を極限まで高めるため、メモリ内のスナップショットを使用しているからです。毎回数万ものファイル情報を読み込み直すことはありません。解決方法：他のクライアントで多くの変更を行った場合は、ページを更新して全検索インデックスを再取得してください。スクリプトの操作中は、複数デバイスでの同時編集は避けることをお勧めします。

**Q: 一括解凍時に、複数のファイルに対して異なるパスワードを一度に設定できますか？**
**A:** はい、可能です。スマート照合ロジック：既知のパスワードをあらかじめ「パスワード庫」に保存しておけば、一括解凍時に各圧縮ファイルに対して庫内の全パスワードを自動で試行します。一致するものがあれば、人の手を介さずに自動で解凍が始まります。

**Q: 一括解凍に失敗した場合はどうすればよいですか？**
**A:** パスワード庫に正しい解凍パスワードが入力されているか確認してください。また、ファイル自体が破損している場合は、クラウドサーバー側でも解凍を完了することはできません。

**Q: エクスポートした設定 JSON にはどのような情報が含まれますか？**
**A:** JSON ファイルには、拡張マスターで設定した重複チェックの設定、リソース管理のルール、パスワード庫などのローカル設定データのみが含まれます。アカウントのパスワードは**含まれません**ので、安心してお使いいただけます。

**Q: なぜ一括削除時に、一部のファイルが保護済みと表示されたり削除できなかったりするのですか？**
**A:** それらのファイルが「リソース管理」に記録されていないか確認してください。設定で「削除時に記録済みリソースをスキップ」を有効にしている場合、誤削除を防ぐためにそれらを保護対象として扱います。解決方法： 1. 設定でこの保護ルールをオフにしてから削除する。 2. ツールバーまたはサイドバーの「リソース管理」メニューに入り、「今すぐクリーンアップ」をクリックして該当する記録項目を強制的に物理削除する。

---

## 🛡️ プライバシー＆セキュリティ (Privacy & Security)

* **データのローカル化**：一括リネーム、ファイル分析、解凍などのすべての核となる機能は、ブラウザを通じて公式 API と直接やり取りします。トークン、パスワード庫、ファイルデータは**ローカルブラウザ内にのみ保存**されます。
* **データ収集なし**：スクリプトはいかなるユーザー情報も収集せず、ファイル情報やアカウント情報を第三者のサーバーにアップロードすることも決してありません。
* **外部インターフェース**：字幕検索や画像検索などの拡張機能を使用する場合にのみ、必要なキーワードや画像データが公共サービス API に送信されます。個人を特定する情報は含まれません。

---

## 🤝 謝辞 (Acknowledgements)

本プロジェクトは、UI デザインおよびウェブ API 呼び出しロジックに関して、[PikPak File Manager v1.2.0](https://github.com/poihoii/PikPak_FileManager) (by 브랜뉴) から多大なインスピレーションを受けており、ここに感謝の意を表します。

---

## ⚖️ ライセンス (License)

本プロジェクトは **CC-BY-NC-SA-4.0 ライセンス** に準拠しています。
* 🚫 商用利用の禁止
* 📢 再配布時は必ずクレジットを表記し、同一ライセンスを維持すること
