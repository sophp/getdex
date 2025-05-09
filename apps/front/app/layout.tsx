import Link from 'next/link';
export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={'grid grid-cols-2 gap-4'}>
        <div id={"menuLeft"}>
          <h2>TaskMeAnything !</h2>
            <Link href={'/'}>Home</Link>
            <Link href={'/tasks'}>Tasks</Link>
          <hr/>
        </div>
        <div id={'main'}>{children}</div>
      </body>
    </html>
  );
}