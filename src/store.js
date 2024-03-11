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
});
