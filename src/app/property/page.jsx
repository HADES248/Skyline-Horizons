import SearchBar from '@/components/SearchBar'
import Card from '@/components/Card'

export default function PropertyPage() {
  return (
    <main className="container flex flex-col justify-center items-center mt-4">
      <SearchBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[95%] gap-6 mt-6 justify-items-center">
        <Card />
      </div>
    </main>
  )
}
