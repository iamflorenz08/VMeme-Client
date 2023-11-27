import ArtistsSection from "./artistsSection";
import BookSection from "./bookSection";
import ExhibitionsSection from "./exhibitionsSection";


export default function Home() {
  return (
    <main className='xl:mt-20'>
      <ExhibitionsSection />
      <ArtistsSection />
      <BookSection />
    </main>
  )
}
