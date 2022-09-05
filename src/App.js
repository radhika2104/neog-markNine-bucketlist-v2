import { useState } from "react";
import "./styles.css";

// Use imageURL from imgur.com to access images in sandbox
var themes = {
  Beach: [
    {
      name: "Seminyak, Bali",
      // image: "beach-bali.jpeg",
      image: "https://i.imgur.com/5trOKDk.jpg",
      rating: "️️❤️ 9/10"
    },
    {
      name: "Havelock, Andaman Islands",
      // image: "beach-andaman.jpeg",
      image: "https://i.imgur.com/SPVtOPO.jpg",
      rating: "️️❤️ 8.5/10"
    },
    {
      name: "Mobor Beach, South Goa",
      // image: "beach-mobor.jpeg",
      image: "https://i.imgur.com/qupMNF4.jpg",
      rating: "️️❤️ 8/10"
    }
  ],
  Mountains: [
    {
      name: "Ladakh",
      // image: "mountains-ladakh.jpeg",
      image: "https://i.imgur.com/9dHe5za.jpg",
      rating: "️️❤️ 10/10"
    },
    {
      name: "Lahual & Spiti, Himachal",
      // image: "mountains-Lahual-spiti.jpeg",
      image: "https://i.imgur.com/U1mqrs8.jpg",
      rating: "️️❤️ 9/10"
    },
    {
      name: "Tirthan Valley, Himachal",
      // image: "mountains-tirthan.jpeg",
      image: "https://i.imgur.com/RQYvYvA.jpg",
      rating: "️️❤️ 8/10"
    }
  ],
  "Food Tour": [
    {
      name: "Manek Chowk, Ahmedabad",
      image: "https://i.imgur.com/VztSHvi.jpg",
      // image: "food-ahmedabad.jpeg",

      rating: "️️❤️ 9/10"
    },
    {
      name: "Mall Road, Mussoorie, Uttarakhand",
      // image: "food-mussourie.jpeg",
      image: "https://i.imgur.com/KdJ0fdB.png",
      rating: "️️❤️ 9/10"
    },
    {
      name: "Floating Market, Thailand",
      // image: "food-thailand.jpeg",
      image: "https://i.imgur.com/f8dXTos.jpg",
      rating: "️️❤️ 8/10"
    }
  ],
  Wildlife: [
    {
      name: "Australia",
      // image: "wildlife-australia.jpeg",
      image: 'https://i.imgur.com/vKW36hV.jpg"',
      rating: "️️❤️ 10/10"
    },
    {
      name: "Kaziranga, Assam",
      // image: "wildlife-assam.jpeg",
      image: "https://i.imgur.com/ExZNMqA.png",
      rating: "️️❤️ 8/10"
    },
    {
      name: "Jim Corbett, Uttarakhand",
      // image: "wildlife-jim.jpeg",
      image: "https://i.imgur.com/qCBu9BA.png",
      rating: "️️❤️ 8/10"
    }
  ],
  "Star Gazing": [
    {
      name: "Nothern Lights in Norway",
      // image: "star-norway.jpeg",
      image: "https://i.imgur.com/Gt2BxZq.jpg",
      rating: "️️❤️ 10/10"
    },
    {
      name: "Nubra Valley, Kashmir",
      // image: "star-nubra.jpeg",
      image: "https://i.imgur.com/4Or6gJ6.jpg",
      rating: "️️❤️ 9/10"
    },
    {
      name: "Rann of Kutch, Gujarat",
      // image: "star-rann.jpeg",
      image: "https://i.imgur.com/pVbvOSt.jpg",
      rating: "️️❤️ 9/10"
    }
  ],
  RoadTrip: [
    {
      name: "Rishikesh-Tehri-Kanatal-Landour",
      // image: "road-tehri.jpeg",
      image: "https://i.imgur.com/3ZaBtPl.jpg",
      rating: "❤️ 10/10"
    },
    {
      name: "Gangtok to Nathula pass",
      // image: "road-nathula.jpeg",
      image: "https://i.imgur.com/IqOCeu0.jpg",
      rating: "❤️ 9/10"
    },
    {
      name: "Bangalore to Bandipur Forest",
      // image: "../road-bandipur.jpeg",
      image: "https://i.imgur.com/ZkWR2BH.jpg",
      rating: "❤️ 8/10"
    }
  ]
};

export default function App() {
  // Use a list of themes to display as button
  var themesKeyArray = Object.keys(themes);
  // Onclick, we want to change theme to clicked theme using useState and setTheme function
  const [theme, setTheme] = useState("RoadTrip");
  // console.log(theme);
  function themeClickHandler(theme) {
    setTheme(theme);
  }

  // console.log(themes[theme]);
  return (
    <div className="App">
      <nav>
        <h1>
          <span role="img" aria-label="bucketlist">
            🚀
          </span>{" "}
          BUCKET <span className="heading-list">list</span>
        </h1>
      </nav>

      <h2>Explore my favourite destinations by theme.</h2>

      <ul className="ul-themes">
        {themesKeyArray.map((theme) => (
          <li
            key={theme}
            className="list-themes"
            onClick={() => themeClickHandler(theme)}
          >
            <button>{theme}</button>
          </li>
        ))}
      </ul>

      <hr></hr>
      <div className="container-main">
        <ul className="ul-thumbnails">
          {/* themes is a dictionary where value of a certain theme is being accessed */}
          {/* Value of a theme is a list of destination objects with defined properties - name,rating and image */}
          {themes[theme].map((destionation) => (
            <span className="span-li-thumbnails" key={destionation.name}>
              <li className="li-thumbnails" key={destionation.name}>
                <img
                  className="li-dest-image"
                  src={destionation.image}
                  alt={destionation.name}
                />
                <p className="li-dest-name">{destionation.name}</p>
                <p className="li-dest-rating">{destionation.rating}</p>
              </li>
            </span>
          ))}
        </ul>
      </div>

      <footer>
        <p>
          images hosted on:{" "}
          <a className="footer-link" href="https://imgur.com/">
            imgur.com
          </a>
        </p>
      </footer>
    </div>
  );
}
