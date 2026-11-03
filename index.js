//songsUrl = "https://localhost:7188/api/Songs";
songsUrl = "https://amboat2026-a8c5aye0e0agcdez.germanywestcentral-01.azurewebsites.net/api/songs";


Vue.createApp({
    data() {
        return {
            songs: [],
            message: null,
            newSong: { Title: "", Artist: "", PublishYear: "", Genre: "" },
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
    },
    mounted() {
        this.GetAllSongs();
    },
    AddSong(newSong) {
            axios.post(songsUrl, newSong)
                .then(response => {
                    this.message = "Song added successfully";

                    this.newSong = {
                        Title: "",
                        Artist: "",
                        PublishYear: "",
                        Genre: ""
                    };
                })
                .catch(ex => {
                    this.message = "Failed to add song - " + ex.message;
                });
    },
    SearchSong(text, option) {
    axios.get(songsUrl + "/search", {
        params: {
            text: text,
            option: option
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
}).mount("#app")