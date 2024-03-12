import { reactive } from 'vue'

export const store = reactive({

    // questo oggetto è come se fosse un data() condiviso da tutti i componenti della mia app
    jumbo: [
        {
            src: "/assets/image (10).svg",
            titolo: "original ideas",
            text: "Contrary Popalar Belief, Lorern Ipsum Not Simply Ipsum Random Text."
        },
        {
            src: "/assets/image (11).svg",
            titolo: "music studio",
            text: "Contrary Popalar Belief, Lorern Ipsum Not Simply Ipsum Random Text."
        },
        {
            src: "/assets/image (12).svg",
            titolo: "acoustic covers",
            text: "Contrary Popalar Belief, Lorern Ipsum Not Simply Ipsum Random Text."
        }
    ],

    song : [
        {
            srcImmagine: "/assets/gallery1.jpg",
            titolo: "a roll and bang the floor",
            social: 
                [
                    '<i class="fa-brands fa-spotify"></i>',
                    '<i class="fa-brands fa-youtube"></i>', 
                    '<i class="fa-solid fa-music"></i>', 
                    '<i class="fa-brands fa-soundcloud"></i>', 
                    '<i class="fa-brands fa-safari"></i>'
                ]
        },
        {
            srcImmagine: "/assets/gallery2.jpg",
            titolo: "your melody to our music",
            social: 
                [
                    '<i class="fa-brands fa-spotify"></i>',
                    '<i class="fa-brands fa-youtube"></i>', 
                    '<i class="fa-solid fa-music"></i>', 
                    '<i class="fa-brands fa-soundcloud"></i>', 
                    '<i class="fa-brands fa-safari"></i>'
                ]
        },
        {
            srcImmagine: "/assets/gallery3.jpg",
            titolo: "touching heaven on frequency",
            social: 
                [
                    '<i class="fa-brands fa-spotify"></i>',
                    '<i class="fa-brands fa-youtube"></i>', 
                    '<i class="fa-solid fa-music"></i>', 
                    '<i class="fa-brands fa-soundcloud"></i>', 
                    '<i class="fa-brands fa-safari"></i>'
                ]
        },
        {
            srcImmagine: "/assets/gallery4.jpg",
            titolo: "music makes stronge beats",
            social: 
                [
                    '<i class="fa-brands fa-spotify"></i>',
                    '<i class="fa-brands fa-youtube"></i>', 
                    '<i class="fa-solid fa-music"></i>', 
                    '<i class="fa-brands fa-soundcloud"></i>', 
                    '<i class="fa-brands fa-safari"></i>'
                ]
        },
        {
            srcImmagine: "/assets/gallery5.jpg",
            titolo: "sound is the spark of time",
            social: 
                [
                    '<i class="fa-brands fa-spotify"></i>',
                    '<i class="fa-brands fa-youtube"></i>', 
                    '<i class="fa-solid fa-music"></i>', 
                    '<i class="fa-brands fa-soundcloud"></i>', 
                    '<i class="fa-brands fa-safari"></i>'
                ]
        },
        {
            srcImmagine: "/assets/gallery6.jpg",
            titolo: "make your night groovy",
            social: 
                [
                    '<i class="fa-brands fa-spotify"></i>',
                    '<i class="fa-brands fa-youtube"></i>', 
                    '<i class="fa-solid fa-music"></i>', 
                    '<i class="fa-brands fa-soundcloud"></i>', 
                    '<i class="fa-brands fa-safari"></i>'
                ]
        }
    ],

    blog : [
        {
            src: "/assets/hip_hop_wired_to_dance_make.jpg",
            titolo: "hip hop wired to dance make",
            data: "06 November 2021",
            descrizione: "Driving Short Distances Music Is A Music Genre That Includes Tradittonal Folk Music And The Contemporary Genre That Evolved From The Former"
        },
        {
            src: "/assets/music_business-worldwide.jpg",
            titolo: "music business worldwide",
            data: "27 May 2022",
            descrizione: "Accelerate Work And Drive Productivity The Beatles' Experimentation And Creative Freedom Led Other Bands To Experiment In Various Ways As Well."
        },
        {
            src: "/assets/giveaways_rock.jpg",
            titolo: "giveaways rock to all",
            data: "07 May 2022",
            descrizione: "Signs Your Car Battery Has To Be Replaced When The Dashboard Lights Start Flashing, This Is A Sign The Battery Is Dying. Several Issues Arise And"
        }
    ],

    // footer

    bookings : [
        { text: "502 New Design Str, Melbourne, San Francisco, CA 94110, United States Of America Australia" },
        { text: "T: 1 123-456-789" },
        { text: "Email: demo@example.com" },
        { social: 
            [
                '<i class="fa-brands fa-instagram"></i>',
                '<i class="fa-brands fa-facebook"></i>', 
                '<i class="fa-brands fa-twitter"></i>', 
                '<i class="fa-brands fa-youtube"></i>'
            ]
        }
    ],

    informations : [
        { text: "product Support" },
        { text: "Checkout" },
        { text: "Report Abuse" },
        { text: "Redeem Voucher" },
        { text: "Order Status" }
    ],

    support : [
        { text: "Policies & Rules" },
        { text: "Privacy policy" },
        { text: "License policy" },
        { text: "My Account" },
        { text: "Locality" }
    ],
});
