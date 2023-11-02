// pages.tsx

import Link from 'next/link'

function page() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <Link href="/pages/about"> About Page</Link>
      <Link href="/index"> Index Page</Link>
    </div>
  );
}

export default page;
