import React from "react";
import AddArtistButton from "./addArtistButton";

import Link from "next/link";
import ArtistsTable from "./artistsTable";
import SearchBar from "@/components/searchBar";

const getArtists = async (page?: number, search?: string) => {
  const res = await fetch(
    `${process.env.API_URI}/api/v1/artist?page=${page}&limit=10&${
      search ? `search=${search}` : ""
    }`,
    { cache: "no-cache" }
  );
  return res.json();
};

interface IProps {
  searchParams: { page: number; search: string };
}

interface IArtists {
  totalDocuments: number;
  page: number;
  data: [
    {
      _id: string;
      imageURL: string;
      name: string;
      description: string;
    }
  ];
}

export default async function DashboardPage({ searchParams }: IProps) {
  const page = Number(searchParams.page) || 1;
  const artists: IArtists = await getArtists(page, searchParams.search);

  return (
    <main className="h-full max-h-full p-8 overflow-auto flex flex-col gap-8">
      <h1 className="font-medium text-4xl">Artists Page</h1>

      <div className="flex flex-col gap-5 justify-between bg-white shadow-md p-5 rounded-lg">
        <div className="flex justify-between">
          <SearchBar placeholder="Search artist name..." />
          <AddArtistButton />
        </div>

        <ArtistsTable artists={artists.data} />

        <div className="flex justify-between items-center">
          <span>
            Showing {(artists.page - 1) * 10 + 1} to {artists.page * 10} of{" "}
            {artists.totalDocuments} results
          </span>
          <div className="flex gap-5">
            <Link
              href={"/admin/artists?page=" + (page > 1 ? page - 1 : 1)}
              className="bg-primary text-white px-5 py-2 rounded-md"
            >
              Previous
            </Link>
            <Link
              href={"/admin/artists?page=" + (page + 1)}
              className="bg-primary text-white px-5 py-2 rounded-md"
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
