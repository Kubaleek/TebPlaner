import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const interSans = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: '200',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Planer TEB Technikum & Liceum',
  description: 'TEB Technikum i Liceum Planer to wygodna platforma dla uczniów, dostępna także na telewizorach, dzięki której szybko sprawdzisz swój plan lekcji, ogłoszenia i inne ważne informacje.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${interSans.variable} will-change-auto relative text-sm sm:text-base lg:text-lg televisor:text-4xl  bg-[#FE444C]  text-[#232225]  antialiased`}>
        {children}
      </body>
    </html>
  );
}


// Zaloguj się, aby sprawdzić plan lekcji, ogłoszenia oraz inne ważne
// informacje. Po zalogowaniu uzyskasz dostęp do aktualnych zajęć i
// funkcji aplikacji.