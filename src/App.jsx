import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import "./styles/App.css";

import Cover from "./components/Cover";
import Letter from "./components/Letter";
import Gallery from "./components/Gallery";
import Prayer from "./components/Prayer";
import VideoPage from "./components/VideoPage";
import MusicPlayer from "./components/MusicPlayer";
// import Footer from "./components/Footer";
import FinalMessage from "./components/FinalMessage";
import ScrollProgress from "./components/ScrollProgress";

import pages from "./data/bookData";

function App() {
  const [opened, setOpened] = useState(false);

  if (!opened) {
    return (
      <>
        <Cover onOpen={() => setOpened(true)} />
        <MusicPlayer />
      </>
    );
  }

  return (
    <AnimatePresence>

      <div className="app">

        <ScrollProgress />

        <MusicPlayer started={opened} />

        <Letter />

        {pages.map((page) => {

          if (page.type === "gallery") {

            return (

              <Gallery

                key={page.id}

                title={page.title}

                caption={page.caption}

                description={page.description}

                images={page.images}

              />

            );

          }

          if (page.type === "video") {

            return (

              <VideoPage

                key={page.id}

                title={page.title}

                video={page.video}

              />

            );

          }

          return null;

        })}

        <Prayer />

        <FinalMessage />

        {/* <Footer /> */}

      </div>

    </AnimatePresence>
  );
}

export default App;