# 포트폴리오

Next.js (App Router) + TypeScript + Tailwind CSS 로 만든 개인 포트폴리오.

## 로컬에서 보기

```bash
npm run dev
```

→ http://localhost:3000 접속

## 내용 수정하기

**`src/data/portfolio.ts` 파일 하나만 고치면** 이름·소개·스킬·경력·프로젝트·연락처가 전부 바뀝니다.

- 프로젝트 이미지: `public/` 폴더에 이미지를 넣고 (예: `public/projects/app.png`),
  `portfolio.ts`의 `image: "/projects/app.png"` 로 경로를 지정하면 됩니다.
- 이력서 PDF: `public/resume.pdf` 로 넣고 `resumeUrl: "/resume.pdf"` 로 지정.

색상은 `src/app/globals.css` 상단의 CSS 변수(`--accent` 등)에서 바꿀 수 있습니다.

## Vercel 배포

1. 이 폴더를 GitHub 레포로 올립니다:

   ```bash
   git add -A && git commit -m "Initial portfolio"
   # GitHub에서 빈 레포 만든 뒤:
   git remote add origin https://github.com/<유저명>/<레포명>.git
   git push -u origin main
   ```

2. https://vercel.com 에 GitHub으로 로그인 → **Add New → Project** →
   방금 만든 레포 선택 → **Deploy** 클릭. 끝.

   (Next.js는 Vercel이 자동 감지하므로 설정 건드릴 것 없음.)

3. 이후 `git push` 할 때마다 자동으로 재배포됩니다.

### CLI로 바로 배포하고 싶다면

```bash
npm i -g vercel
vercel        # 첫 배포 (질문에 엔터로 진행)
vercel --prod # 프로덕션 배포
```
