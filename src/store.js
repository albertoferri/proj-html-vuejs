import { reactive } from 'vue'

export const store = reactive({

    // questo oggetto è come se fosse un data() condiviso da tutti i componenti della mia app
    jumbo: [
        {
            src: "/public/assets/image (10).svg",
            titolo: "original ideas",
            text: "Contrary Popalar Belief, Lorern Ipsum Not Simply Ipsum Random Text."
        },
        {
            src: "/public/assets/image (11).svg",
            titolo: "music studio",
            text: "Contrary Popalar Belief, Lorern Ipsum Not Simply Ipsum Random Text."
        },
        {
            src: "/public/assets/image (12).svg",
            titolo: "acoustic covers",
            text: "Contrary Popalar Belief, Lorern Ipsum Not Simply Ipsum Random Text."
        }
    ],

    song : [
        {
            srcImmagine: "/public/assets/gallery1.jpg",
            titolo: "a roll and bang the floor",
            social: 
                [
                    "/public/assets/spotify.jpg",
                    "/public/assets/youtube.svg", 
                    "/public/assets/music.svg", 
                    "/public/assets/soundcloud.png", 
                    "/public/assets/sa"
                ]
        },
        {
            srcImmagine: "/public/assets/gallery2.jpg",
            titolo: "your melody to our music",
            social: 
                [
                    "/public/assets/spotify.jpg",
                    "/public/assets/youtube.svg", 
                    "/public/assets/music.svg", 
                    "/public/assets/soundcloud.png", 
                    "/public/assets/sa"
                ]
        },
        {
            srcImmagine: "/public/assets/gallery3.jpg",
            titolo: "touching heaven on frequency",
            social: 
                [
                    "/public/assets/spotify.jpg",
                    "/public/assets/youtube.svg", 
                    "/public/assets/music.svg", 
                    "/public/assets/soundcloud.png", 
                    "/public/assets/sa"
                ]
        },
        {
            srcImmagine: "/public/assets/gallery4.jpg",
            titolo: "music makes stronge beats",
            social: 
                [
                    "/public/assets/spotify.jpg",
                    "/public/assets/youtube.svg", 
                    "/public/assets/music.svg", 
                    "/public/assets/soundcloud.png", 
                    "/public/assets/sa"
                ]
        },
        {
            srcImmagine: "/public/assets/gallery5.jpg",
            titolo: "sound is the spark of time",
            social: 
                [
                    "/public/assets/spotify.jpg",
                    "/public/assets/youtube.svg", 
                    "/public/assets/music.svg", 
                    "/public/assets/soundcloud.png", 
                    "/public/assets/sa"
                ]
        },
        {
            srcImmagine: "/public/assets/gallery6.jpg",
            titolo: "make your night groovy",
            social: 
                [
                    "/public/assets/spotify.jpg",
                    "/public/assets/youtube.svg", 
                    "/public/assets/music.svg", 
                    "/public/assets/soundcloud.png", 
                    "/public/assets/sa"
                ]
        }
    ],  
});
