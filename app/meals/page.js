import Link from "next/link";

export default function MealsPage () {
  return (
    <main>
      <h1>Meals Page</h1>
      <p><Link href='/meals/delicious'>Delicious</Link></p>
      <p><Link href='/meals/share'>Share</Link></p>
      <p><Link href='/meals/community'>Community</Link></p>
    </main>
  )
}