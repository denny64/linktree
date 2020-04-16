// Mock data
export default {
  user: {
    id: 1,
    username: "@dealdrop",
    styles: {
      primaryColor: "rebeccapurple",
      secondaryColor: "palegoldenrod",
      // NOTE: API should return these values if on free plan
      // primaryColor: "#39e09b",
      // secondaryColor: "white"
    }
  },
  links: [
    {
      type: "classic",
      href: "https://www.dealdrop.com",
      description: "Classic link - Find coupons on DealDrop"
    },
    {
      type: "music",
      href: "https://nextjs.org/learn",
      description: "Music Link - Choose Player",
      songName: "KillShot",
      songArtist: "Eminem",
      songCover: "https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Eminem_Killshot.jpg/220px-Eminem_Killshot.jpg",
      platforms: [
        {
          name: "Spotify",
          link: "https://soundcloud.com/t-mega-40540774/30-minute-deep-sleep-music-calming-music-relaxing-music-soothing-music-calmi",
          logo: "https://seeklogo.com/images/S/spotify-logo-7839B39C1B-seeklogo.com.png"
        },
        {
          name: "Apple Music",
          link: "https://soundcloud.com/t-mega-40540774/30-minute-deep-sleep-music-calming-music-relaxing-music-soothing-music-calmi",
          logo: "https://i7.pngguru.com/preview/589/452/885/apple-music-festival-itunes-computer-icons-music-icon.jpg"
        },
        {
          name: "Soundcloud",
          link: "https://soundcloud.com/t-mega-40540774/30-minute-deep-sleep-music-calming-music-relaxing-music-soothing-music-calmi",
          logo: "https://i.pinimg.com/originals/34/44/3a/34443aba7daa18bb75114c16c684571e.png"
        },
        {
          name: "Youtube Music",
          link: "https://soundcloud.com/t-mega-40540774/30-minute-deep-sleep-music-calming-music-relaxing-music-soothing-music-calmi",
          logo: "data:image/png;base64,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"
        },
        {
          name: "Deezer",
          link: "https://soundcloud.com/t-mega-40540774/30-minute-deep-sleep-music-calming-music-relaxing-music-soothing-music-calmi",
          logo: "https://p1.hiclipart.com/preview/747/952/57/os-x-yosemite-deezer-round-black-and-white-logo.jpg"
        },
        {
          name: "Tidal",
          link: "https://soundcloud.com/t-mega-40540774/30-minute-deep-sleep-music-calming-music-relaxing-music-soothing-music-calmi",
          logo: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/tidal-512.png"
        },
        {
          name: "BandCamp",
          link: "https://soundcloud.com/t-mega-40540774/30-minute-deep-sleep-music-calming-music-relaxing-music-soothing-music-calmi",
          logo: "https://www.pngrepo.com/download/56867/bandcamp-logo.png"
        }
      ]
    },
    {
      type: "list",
      href: "https://github.com/zeit/next.js/tree/master/examples",
      description: "List Link - Find Events",
      items: [
        {
          name: "Dreamgun",
          date: "Apr 01 2019",
          link: "https://www.songkick.com/festivals/1500034-melbourne-international-comedy/id/39393356-melbourne-international-comedy-festival-2020",
          description: "The Forum, Melbourne",
          status: "Available"
        },
        {
          name: "Eminem",
          date: "Apr 02 2019",
          link: "https://www.songkick.com/festivals/1500034-melbourne-international-comedy/id/39393356-melbourne-international-comedy-festival-2020",
          description: "MCG, Melbourne",
          status: "Sold out"
        },
        {
          name: "Comedy Festival",
          date: "Apr 03 2019",
          link: "https://www.songkick.com/festivals/1500034-melbourne-international-comedy/id/39393356-melbourne-international-comedy-festival-2020",
          description: "Rod Laver Arena, Melbourne",
          status: "Available"
        }
      ]
    },
    {
      type: "classic",
      href: "https://zeit.co/",
      description: "Another classic link"
    }
  ]
};