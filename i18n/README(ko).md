![커버](https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/9aa67ac2eb4ae25d9192fbebbdd184aec78253db/img/cover_ko.png)

# 📦 PikPak 강화 마스터

> 일괄 압축 해제, 스마트 중복 검사, 다중 모드 일괄 이름 변경, Aria2 전송, 정크 파일 정리, 디렉터리 내보내기, 미디어 재생 엔진 강화 등의 기능을 통합한 데스크톱급 파일 관리자.

---

## 🌍 지원 언어 (Languages)

[한국어](https://github.com/digbug82/PikPak_Enhancement_Master/blob/3ec52a7029ee311abefeb7c7e0375a4c1f2787c7/i18n/README(ko).md) | [简体中文](https://github.com/digbug82/PikPak_Enhancement_Master/blob/3ec52a7029ee311abefeb7c7e0375a4c1f2787c7/i18n/README(zh).md) | [繁體中文](https://github.com/digbug82/PikPak_Enhancement_Master/blob/3ec52a7029ee311abefeb7c7e0375a4c1f2787c7/i18n/README(tc).md) | [English](https://github.com/digbug82/PikPak_Enhancement_Master/blob/3ec52a7029ee311abefeb7c7e0375a4c1f2787c7/README.md) | [日本語](https://github.com/digbug82/PikPak_Enhancement_Master/blob/3ec52a7029ee311abefeb7c7e0375a4c1f2787c7/i18n/README(ja).md) 

---

## ✨ 주요 기능 (Features)

### ✨ 경험 및 탐색 엔진

* **인터페이스 재구성**: Windows 파일 탐색기와 유사한 UI 설계로 사용 경험 향상

* **고속 모드**: 웹 로직 대체, 기본 동기화 차단 (설정에서 켜는 것을 권장)

* **고급 경로 표시줄**: 스크롤, 드롭다운 전환, 경로 표시 및 브레드크럼 이동 지원

* **체험 향상**:

  * 야간 모드
  * 동영상 길이 표시
  * 원클릭 블러 커버 (개인정보 보호)
  * 즐겨찾기 및 파일 유형 정렬 지원

* **백그라운드 자동 인덱싱**: 홈 아이콘 블루 점으로 디렉토리 동기화 상태 표시

---

### 📂 배치 및 저장 공간 관리

* **일괄 이름 변경**

  * 정규식 치환 / 삭제
  * 시리즈 번호 생성
  * 텍스트 포맷 (대/소문자, 전각/반각)
  * 번호 / FC2 표준명
  * 접두사 광고 제거
  * MIME 확장자 수정

* **분석 도구**

  * 파일 분석 (유형 필터 + 중복 확인: 해시 / 길이 / 이름)
  * 폴더 분석 (크기 필터 + 중복 확인: 이름 / 유사도 / 포함율)
  * 디렉토리 트리 내보내기 지원

* **스마트 정리**

  * 빈 폴더 정리
  * 일괄 압축 해제 (자동 비밀번호 입력 + 해제 후 삭제)

* **리소스 관리자**

  * 블랙리스트: 쓰레기 파일 빠른 정리
  * 화이트리스트: 일괄 삭제 보호
  * 설정에서 규칙 사용자 정의 가능

> ⚠️ 사용 중 여러 장치에서 동시에 데이터 수정 금지

---

### 🌐 전송 및 공유 센터

* **공유 관리**: 추출 횟수 제한 지원, 자동 공유 취소

* **오프라인 다운로드**: 일괄 오프라인 작업 + 링크 내보내기

* **고속 업로드**

  * 대용량 파일 지원
  * 소용량 파일 업로드 실패율 대폭 감소

> ⚠️ 추출 제한은 프론트엔드 로직에 의존하며, 웹페이지가 활성화되어 있고 장치가 절전 모드가 아닐 때만 적용

---

### 🎬 몰입형 미디어 향상

* **재생 엔진**

  * 0.5x – 3.0x 배속
  * 회전 / 반전 / 비율 조정
  * 자동 오프닝/엔딩 건너뛰기
  * 연속 재생 / 반복 모드
  * 타임라인 썸네일 미리보기

* **자막 시스템**

  * 클라우드 / 로컬 / 온라인 검색
  * 자막 개인 설정
  * 드래그 앤 드롭 자막 불러오기

* **시각 보조**

  * 이미지 검색 (이미지 / 영상 프레임)
  * 미디어 모드 (시리즈 / 만화 자동 A-Z 정렬)

---

### ⚙️ 설정 및 데이터 관리

* **설정 백업**

  * JSON 내보내기
  * 장치 간 마이그레이션 지원

* **데이터 정리**

  * 전체 인덱스 / 환경 설정 / 관리 규칙 / 비밀번호 저장소 / 기록

> 📌 전체 인덱스는 임시 데이터이며, 나머지는 영구 데이터

---

### ⚡ 다운로드 및 배포

* **외부 직접 연결**

  * Aria2 / Motrix로 RPC 전송 지원

* **다운로드 필터**

  * 확장자 / 키워드별 파일 필터링 지원

---

## 📥 설치 가이드 (Installation)

### 1️⃣ 사용자 스크립트 관리자 설치

* 👉 [Tampermonkey](https://greasyfork.org/ko/scripts/556685)

### 2️⃣ 스크립트 설치

* [`PikPak_Enhancement_Master.user.js`](https://github.com/digbug82/PikPak_Enhancement_Master/blob/cffc9e5d9a72c3ae1063305572b62be9a607a03d/PikPak_Enhancement_Master.user.js) 파일 클릭 설치
* 또는 확장 프로그램에 스크립트 수동 가져오기

### 3️⃣ [PikPak 웹](https://mypikpak.com/drive) 열기

### 4️⃣ 스크립트 시작

페이지 새로고침 후 **사이드바 플로팅 버튼** 클릭하여 실행 ✅

---

## 🙏 감사 (Acknowledgements)

* 프로젝트 영감 출처:  
  👉 [PikPak File Manager v1.2.0](https://github.com/poihoii/PikPak_FileManager)

* 원저자: 브랜뉴

---

## ⚖️ 라이선스 (License)

본 프로젝트는 **CC-BY-NC-SA-4.0 라이선스**를 따릅니다

* 🚫 상업적 용도 금지
* 📢 재배포 시 저작자 명시 및 동일 라이선스 유지
