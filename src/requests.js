const API_kEY="db2c5357acea5cf690080a5d18d2881c";

const requests={
    fetchTrending:`/trending/all/week?api_key=${API_kEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv/?api_key=${API_kEY}&with_network=213`,
    fetchTopRated:`/movie/top_rated/?api_key=${API_kEY}&language=en-US`,
    fetchActionMovies:`/discover/movie/?api_key=${API_kEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie/?api_key=${API_kEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie/?api_key=${API_kEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie/?api_key=${API_kEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie/?api_key=${API_kEY}&with_genres=99`,
}
export default requests;