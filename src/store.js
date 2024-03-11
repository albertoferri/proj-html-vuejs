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
                    "/public/assets/safari.png"
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
                    "/public/assets/safari.png"
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
                    "/public/assets/safari.png"
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
                    "/public/assets/safari.png"
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
                    "/public/assets/safari.png"
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
                    "/public/assets/safari.png"
                ]
        }
    ],

    blog : [
        {
            src: "/public/assets/hip_hop_wired_to_dance_make.jpg",
            titolo: "hip hop wired to dance make",
            data: "06 November 2021",
            descrizione: "Driving Short Distances Music Is A Music Genre That Includes Tradittonal Folk Music And The Contemporary Genre That Evolved From The Former"
        },
        {
            src: "/public/assets/music_business-worldwide.jpg",
            titolo: "music business worldwide",
            data: "27 May 2022",
            descrizione: "Accelerate Work And Drive Productivity The Beatles' Experimentation And Creative Freedom Led Other Bands To Experiment In Various Ways As Well."
        },
        {
            src: "/public/assets/giveaways_rock.jpg",
            titolo: "giveaways rock to all",
            data: "07 May 2022",
            descrizione: "Signs Your Car Battery Has To Be Replaced When The Dashboard Lights Start Flashing, This Is A Sign The Battery Is Dying. Several Issues Arise And"
        }
    ],
});
