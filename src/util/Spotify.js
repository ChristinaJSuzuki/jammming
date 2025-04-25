let accessToken;
//let expiresIn;

const clientId = "94707f2a8c634994b92a724e0fc8102a"; // Replace with your actual client ID
const redirectUri = "http://127.0.0.1:5173/";

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    // Check if access token is in the URL hash
    const urlParams = new URLSearchParams(window.location.hash.substring(1));
    accessToken = urlParams.get("access_token");
    //expiresIn = urlParams.get("expires_in");

    // If no access token is found, redirect to login
    if (!accessToken) {
      const authEndpoint = "https://accounts.spotify.com/authorize";
      const responseType = "token";
      const scope = "playlist-modify-public playlist-modify-private";

      window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}`;
    }

    // Clear the URL hash so it's not sent to the server on future requests
    window.history.pushState("Access Token", null, "/");

    return accessToken;
  },

  async search(term) {
    const accessToken = Spotify.getAccessToken();
    const endpoint = `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(
      term
    )}`;

    try {
      const response = await fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const jsonResponse = await response.json();

      if (!jsonResponse.tracks) {
        return [];
      }

      return jsonResponse.tracks.items.map((track) => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri,
      }));
    } catch (error) {
      console.error("Search failed:", error);
      return [];
    }
  },
  async savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) {
      return;
    }

    const accessToken = Spotify.getAccessToken();

    try {
      const userResponse = await fetch("https://api.spotify.com/v1/me", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const userData = await userResponse.json();
      const userId = userData.id;

      const createPlaylistResponse = await fetch(
        `https://api.spotify.com/v1/users/${userId}/playlists`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            description: "Created with Jammming 🎧",
            public: true,
          }),
        }
      );

      const playlistData = await createPlaylistResponse.json();
      const playlistId = playlistData.id;

      await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uris: trackUris }),
      });
      console.log("✅ Playlist successfully saved to Spotify!");
    } catch (error) {
      console.log("❌ Error saving playlist:", error);
    }
  },
};

export default Spotify;
