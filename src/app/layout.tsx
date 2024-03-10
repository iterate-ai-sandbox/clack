import './globals.css';
import type { Metadata } from 'next';
import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';
import { Inter } from 'next/font/google';
import { localEbgaramond, localComfortaa } from '@/fonts/fonts';
import { Toaster } from '@/components/ui/toaster';
import { NotesProvider } from '@/context/NotesContext';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Clack',
  description: 'Track your writing progress effortlessly',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <NotesProvider>
        <html lang="en">
          <body
            className={`${inter.className} ${localComfortaa.variable} ${localEbgaramond.variable}`}
          >
            <Toaster />
            {children}
          </body>
        </html>
      </NotesProvider>
    </SessionProvider>
  );
}
