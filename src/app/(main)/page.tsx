import { IArtist } from "@/types/artists";
import ArtistsSection from "./artistsSection";
import BookSection from "./bookSection";
import ExhibitionsSection from "./exhibitionsSection";

interface IResult {
  totalDocuments: number,
  page: number,
  data: Array<IArtist>
}
const getArtists = async () => {
  const res = await fetch(`${process.env.API_URI}/api/v1/artist`, { cache: 'no-cache' })
  return res.json()
}

export default async function Home() {
  const artists: IResult = await getArtists()

  return (
    <main className='xl:mt-20'>
      <ExhibitionsSection />
      <ArtistsSection
        artists={artists.data}
      />
      {/* <BookSection /> */}
    </main>
  )
}
