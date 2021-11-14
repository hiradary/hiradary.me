/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next';

import { getTopTracks } from '~/lib/spotify';
import unique from '~/lib/unique';
import { NextApiFunc, validateTrack } from '~/types';

interface SpotifyTrack {
  title?: string;
  artist?: string;
  album?: string;
  url?: string;
  image?: string;
}

export default async (
  _: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiFunc> => {
  const response = await getTopTracks();
  const { items = [] } = await response.json();

  const tracks: Array<SpotifyTrack> = items
    .map((track: any) => ({
      title: track.name,
      artist: track.artists.map((_artist: any) => _artist.name).join(', '),
      album: track.album.name,
      url: track.external_urls.spotify,
      image: track.album.images.pop(),
    }))
    .filter(validateTrack);

  const uniqueArtistTracks = unique(tracks, 'artist').slice(0, 10);

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200',
  );

  return res.status(200).json({ tracks: uniqueArtistTracks });
};
