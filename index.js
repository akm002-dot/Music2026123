//songsUrl = "https://localhost:7188/api/Songs";
songsUrl = "https://bottles220261005101940-d7g4gyabd9bgd4dk.eastasia-01.azurewebsites.net/api/songs";


Vue.createApp({
    data() {
        return {
            songs: [],
            message: null,
            newSong: { Title: "", Artist: "", PublishYear: 0, Genre: "" },
        }
    },
    methods: {
        GetAllSongs() {
            axios.get(songsUrl)
            .then(response => {
                    this.songs = response.data;
                    this.message = "Fetched songs successfully";
                })
            .catch(ex => {
                    this.message = "Failed to fetch songs - " + ex.message;
                });
        },
    
    AddSong() {
        console.log("Adding song: ", this.newSong);
            axios.post(songsUrl, this.newSong)
                .then(response => {
                    this.message = "Song added successfully";
                    console.log("Added song: ", response.data);

                    this.newSong = {
                        Title,
                        Artist,
                        PublishYear,
                        Genre
                    };
                })
                .catch(ex => {
                    this.message = "Failed to add song - " + ex.message;

                });
    },
    SearchSong(option, text) {
    axios.get(songsUrl + "/search", {
        params: {
            property: option,
            text: text
        }
    })
    .then(response => {
        this.songs = response.data;
        this.message = "Songs found successfully";
    })
    .catch(ex => {
        this.message = "Failed to search songs - " + ex.message;
    });
    },
},
    mounted() {
        this.GetAllSongs();
    }
}).mount("#app")