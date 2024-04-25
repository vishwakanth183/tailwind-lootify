import React from "react";
import VstudioStyles from "./vstudions.module.css";

const VstudiosComponent = () => {
  const featureImg =
    "https://images.pexels.com/photos/7562026/pexels-photo-7562026.jpeg?auto=compress&cs=tinysrgb&w=600";

  const creationDetails = [
    {
      title: "Jurassic Encounter",
      url: "https://images.pexels.com/photos/6945926/pexels-photo-6945926.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Ocean Odyssey",
      url: "https://images.pexels.com/photos/5277693/pexels-photo-5277693.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Cosmic Sprint",
      url: "https://images.pexels.com/photos/1748447/pexels-photo-1748447.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Virtual Canvas",
      url: "https://images.pexels.com/photos/2397652/pexels-photo-2397652.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "VR Training",
      url: "https://images.pexels.com/photos/1261822/pexels-photo-1261822.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Mythical AR Tour",
      url: "https://images.pexels.com/photos/1036645/pexels-photo-1036645.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Martian Colonization",
      url: "https://images.pexels.com/photos/7180658/pexels-photo-7180658.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Peak Performance",
      url: "https://images.pexels.com/photos/7777270/pexels-photo-7777270.jpeg?auto=compress&cs=tinysrgb&w=600",
    }, // Replaces "Premium Seat Experience" for broader appeal
    {
      title: "Zero-Gravity",
      url: "https://images.pexels.com/photos/3737624/pexels-photo-3737624.jpeg?auto=compress&cs=tinysrgb&w=600",
    }, // Replaces "Zero-Gravity Training" for a more impactful feel
    {
      title: "Mindful Focus",
      url: "https://images.pexels.com/photos/7626586/pexels-photo-7626586.jpeg?auto=compress&cs=tinysrgb&w=600",
    }, // Replaces "Immersive Focus Training" for a more user-friendly term
  ];

  return (
    <div className={VstudioStyles.mainView}>
      {/* Header Section */}
      <section className={VstudioStyles.headerSection}>
        <div className="flex md:flex-row justify-between items-center">
          <div className={VstudioStyles.headerText}>VStudios</div>
          {/* Menu block */}
          <div className={VstudioStyles.menuBlock}>
            {/* <div className={"mainGroup group"}>
              <div className={VstudioStyles.groupText}>About us</div>
              <div className={VstudioStyles.groupBorder}></div>
            </div> */}

            <div className="group cursor-pointer">
              <div className="text-white text-center">About</div>
              <div className="border-b-2 mx-2 mt-2 opacity-100 group-hover:opacity-100 border-zinc-200"></div>
            </div>

            <div className="group cursor-pointer">
              <div className="text-white text-center">Carrers</div>
              <div className="border-b-2 mx-2 mt-2 opacity-0 group-hover:opacity-100 border-zinc-200"></div>
            </div>

            <div className="group cursor-pointer">
              <div className="text-white text-center">Events</div>
              <div className="border-b-2 mx-2 mt-2 opacity-0 group-hover:opacity-100 border-zinc-200"></div>
            </div>

            <div className="group cursor-pointer">
              <div className="text-white text-center">Products</div>
              <div className="border-b-2 mx-2 mt-2 opacity-0 group-hover:opacity-100 border-zinc-200"></div>
            </div>

            <div className="group cursor-pointer">
              <div className="text-white text-center">Support</div>
              <div className="border-b-2 mx-2 mt-2 opacity-0 group-hover:opacity-100 border-zinc-200"></div>
            </div>
          </div>
        </div>
        <div className={VstudioStyles.textContainer}>
          Vstudios, a pioneer in VR, crafts captivating simulations and
          interactive experiences.
        </div>
      </section>
      {/* Features Section */}
      <div className={VstudioStyles.featureSection}>
        <img src={featureImg} alt="" className="h-30 w-30 md:h-20 md:w-20" />
        <div className={VstudioStyles.absoluteTextConatiner}>
          <div className={VstudioStyles.featureTextTitle}>
            Immerse Yourself in Vstudios Experiences
          </div>
          <div className={VstudioStyles.featureTextContainer}>
            Vstudios' feature section unveils a world of possibilities. Dive
            into captivating simulations, explore interactive experiences, and
            unleash your creativity. Discover how VR transforms learning,
            unlocks immersive entertainment, and redefines design boundaries.
          </div>
        </div>
      </div>
      {/* Our creation section */}
      <section className={VstudioStyles.ourCreationContainer}>
        <div className={VstudioStyles.ourCreationText}>Our Creations</div>

        <div className={VstudioStyles.creationGrid}>
          {creationDetails.map((items) => {
            return (
              <div
                className={`${VstudioStyles.item} group hover:scale-105 duration-200`}
              >
                <img
                  className={`${VstudioStyles.gridImg}`}
                  src={items.url}
                  alt={items.title}
                />
                <div className={VstudioStyles.itemGradient}></div>
                <div className={VstudioStyles.itemText}>{items.title}</div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default VstudiosComponent;
