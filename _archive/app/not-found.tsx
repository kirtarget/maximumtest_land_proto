import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-light text-center px-4">
      <h1 className="text-8xl font-bold text-accent">404</h1>
      <p className="mt-4 text-2xl font-semibold text-dark">Страница не найдена</p>
      <p className="mt-2 text-mid">Такой страницы не существует или она была удалена.</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-[#b82424] transition-colors"
      >
        На главную
      </Link>
    </div>
  )
}
