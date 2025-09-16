import { useEffect, useState } from "react";
import { fetchPlaylistVideos } from "./CallYoutubeApi";

export default function CourseDetails() {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		async function load() {
			const playlistId = "PLDoPjvoNmBAz7wegzgoJvVJdr-WwE5Pwt";
			const vids = await fetchPlaylistVideos(playlistId);
			setVideos(vids);
		}
		load();
	}, []);

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-4">Playlist Videos</h1>
			<div className="grid grid-cols-3 gap-4">
				{videos.map((v) => (
					<div key={v.videoId} className="border p-2 rounded">
						<img src={v.thumbnail} alt={v.title} className="mb-2" />
						<p className="font-semibold">{v.title}</p>
						<iframe
							width="100%"
							height="200"
							src={`https://www.youtube.com/embed/${v.videoId}`}
							frameBorder="0"
							allowFullScreen
							title={v.title}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
