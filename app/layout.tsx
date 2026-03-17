import type { Metadata } from 'next';
import '@/app/globals.css';
import '@/styles/landing.css';

export const metadata: Metadata = {
  title: 'Team Campfire',
  description: '여러 분야의 작은 열정들이 만나는 공간 — 인디 게임 & 웹 서비스 개발조직',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
