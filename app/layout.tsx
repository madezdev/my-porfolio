import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'madez.dev',
  description: 'Desarrollador fullstack developer con experiencia en la creación de interfaces web atractivas y funcionales utilizando codigo de JavaScript y NodeJs. Mi enfoque no se limita solo al código, también soy un diseñador UX/UI que se preocupa por crear experiencias digitales intuitivas y atractivas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
