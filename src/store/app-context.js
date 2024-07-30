import React from "react";


const AppContext = React.createContext({
  lang: 'en',
  theme: 'ligth',
  toggleLang: () => {},
  GalleryOffsetTop: null,
  OurProjectsOffsetTop: null,
  WhyUsOffsetTop: null,
  setGalleryOffsetTop: () => {},
  setOurProjectsOffsetTop: () => {},
  setWhyUsOffsetTop: () => {},
});

export default AppContext;