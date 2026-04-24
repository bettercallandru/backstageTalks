const magazineList = [
  {
    id: "magazine-8",
    name: "Issue #8",
    img: "assets/img/backstagetalks_cover_issue_8.png",
    colorPalette: {
      background: "--lightbrown",
      primaryColor: "--black",
      secondaryColor: "--white",
    },
  },
  {
    id: "magazine-7",
    name: "Issue #7",
    img: "assets/img/backstagetalks_cover_issue_7.png",
    colorPalette: {
      background: "--pink",
      primaryColor: "--black",
      secondaryColor: "--white",
    },
  },
  {
    id: "magazine-6",
    name: "Issue #6",
    img: "assets/img/backstagetalks_cover_issue_6.png",
    colorPalette: {
      background: "--white",
      primaryColor: "--black",
      secondaryColor: "--pink",
    },
  },
  {
    id: "magazine-5",
    name: "Issue #5",
    img: "assets/img/backstagetalks_cover_issue_5.png",
    colorPalette: {
      background: "--waterblue",
      primaryColor: "--black",
      secondaryColor: "--white",
    },
  },
  {
    id: "magazine-4",
    name: "Issue #4",
    img: "assets/img/backstagetalks_cover_issue_4.png",
    colorPalette: {
      background: "--orange",
      primaryColor: "--black",
      secondaryColor: "--white",
    },
  },
  {
    id: "magazine-3",
    name: "Issue #3",
    img: "assets/img/backstagetalks_cover_issue_3.png",
    colorPalette: {
      background: "--yellow",
      primaryColor: "--black",
      secondaryColor: "--white",
    },
  },
  {
    id: "magazine-2",
    name: "Issue #2",
    img: "assets/img/backstagetalks_cover2017.png",
    colorPalette: {
      background: "--blue",
      primaryColor: "--black",
      secondaryColor: "--white",
    },
  },
  {
    id: "magazine-1",
    name: "Issue #1",
    img: "assets/img/backstagetalks_cover2016_n.png",
    colorPalette: {
      background: "--red",
      primaryColor: "--black",
      secondaryColor: "--white",
    },
  },
];

// Cache magazine elements for better performance
const magazineElements = magazineList.map((magazine) =>
  document.getElementById(magazine.id),
);
const tabElements = magazineList.map((magazine) =>
  document.getElementById(magazine.id + "-tab"),
);
const root = document.querySelector(":root");

const clearActiveTabs = () => {
  tabElements.forEach((tab) => {
    if (tab) {
      tab.classList.remove("active");
    }
  });
};

const getFocusMagazine = (scrollY) => {
  let focusMagazine = null;

  for (let i = 0; i < magazineList.length; i++) {
    const magazine = magazineList[i];
    const currentElement = magazineElements[i];
    const nextElement = magazineElements[i + 1];

    if (!currentElement) continue;

    const currentTop = currentElement.offsetTop;
    const currentHeight = currentElement.offsetHeight;
    const threshold = currentHeight / 2;
    const startRange = Math.max(0, currentTop - threshold);
    const endRange = nextElement ? nextElement.offsetTop - threshold : Infinity;

    if (scrollY >= startRange && scrollY < endRange) {
      focusMagazine = magazine;
      break;
    }
  }
  return focusMagazine;
};

const setMagazineColors = (magazine) => {
  if (magazine) {
    root.style.setProperty(
      "--background-color",
      `var(${magazine.colorPalette.background})`,
    );
    root.style.setProperty(
      "--primary-color",
      `var(${magazine.colorPalette.primaryColor})`,
    );
    root.style.setProperty(
      "--secondary-color",
      `var(${magazine.colorPalette.secondaryColor})`,
    );

    document.getElementById(magazine.id + "-tab").classList.add("active");
  }
};

window.addEventListener("DOMContentLoaded", () => {
  const scrollY = Math.round(window.scrollY);

  clearActiveTabs();
  const focusMagazine = getFocusMagazine(scrollY);

  setMagazineColors(focusMagazine);
});

window.addEventListener("scrollend", () => {
  const scrollY = Math.round(window.scrollY);

  clearActiveTabs();
  const focusMagazine = getFocusMagazine(scrollY);

  setMagazineColors(focusMagazine);
});
