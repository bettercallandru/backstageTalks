const magazineList = [
  {
    id: "magazine-8",
    name: "Issue #8",
    img: "app/img/backstagetalks_cover_issue_8.png",
    colorPalette: {
      background: "--lightbrown",
      primaryColor: "--black",
      secondaryColor: "--white",
    },
  },
  {
    id: "magazine-7",
    name: "Issue #7",
    img: "app/img/backstagetalks_cover_issue_7.png",
    colorPalette: {
      background: "--pink",
      primaryColor: "--black",
      secondaryColor: "--white",
    },
  },
  {
    id: "magazine-6",
    name: "Issue #6",
    img: "app/img/backstagetalks_cover_issue_6.png",
    colorPalette: {
      background: "--white",
      primaryColor: "--black",
      secondaryColor: "--pink",
    },
  },
  {
    id: "magazine-5",
    name: "Issue #5",
    img: "app/img/backstagetalks_cover_issue_5.png",
    colorPalette: {
      background: "--waterblue",
      primaryColor: "--black",
      secondaryColor: "--white",
    },
  },
  {
    id: "magazine-4",
    name: "Issue #4",
    img: "app/img/backstagetalks_cover_issue_4.png",
    colorPalette: {
      background: "--orange",
      primaryColor: "--black",
      secondaryColor: "--white",
    },
  },
  {
    id: "magazine-3",
    name: "Issue #3",
    img: "app/img/backstagetalks_cover_issue_3.png",
    colorPalette: {
      background: "--yellow",
      primaryColor: "--black",
      secondaryColor: "--white",
    },
  },
  {
    id: "magazine-2",
    name: "Issue #2",
    img: "app/img/backstagetalks_cover2017.png",
    colorPalette: {
      background: "--blue",
      primaryColor: "--black",
      secondaryColor: "--white",
    },
  },
  {
    id: "magazine-1",
    name: "Issue #1",
    img: "app/img/backstagetalks_cover2016_n.png",
    colorPalette: {
      background: "--red",
      primaryColor: "--black",
      secondaryColor: "--white",
    },
  },
];

/* let isThrottled = false;

window.addEventListener("wheel", (event) => {
  if (isThrottled) return;
  isThrottled = true;

  event.preventDefault();
  let newScrollY = window.scrollY + event.deltaY;
  window.scroll({ top: newScrollY, behavior: "smooth" });
  setTimeout(() => {
    isThrottled = false;
  }, 300);
});
 */

window.addEventListener("scrollend", (e) => {
  const focusMagazine = magazineList.find((magazine, index, array) => {
    const currentMagazine = document.getElementById(magazine.id);
    const nextMagazine = document.getElementById(array[index + 1]?.id);

    const magazineOffsetTop =
      currentMagazine?.offsetTop - currentMagazine?.offsetHeight / 2 < 0
        ? 0
        : currentMagazine?.offsetTop - currentMagazine?.offsetHeight / 2;

    const {
      currentMagazineOffsetTop,
      currentMagazineOffsetHeight,
      nextMagazineOffsetTop,
    } = {
      currentMagazineOffsetTop: currentMagazine?.offsetTop,
      currentMagazineOffsetHeight: currentMagazine?.offsetHeight / 2,
      nextMagazineOffsetTop: nextMagazine?.offsetTop
        ? nextMagazine?.offsetTop
        : Infinity,
    };
    const scrollY = parseInt(window.scrollY.toFixed(0));

    if (
      scrollY >= currentMagazineOffsetTop - currentMagazineOffsetHeight < 0
        ? 0
        : currentMagazineOffsetTop - currentMagazineOffsetHeight &&
          scrollY < nextMagazineOffsetTop - currentMagazineOffsetHeight
    ) {
      return magazine;
    }
  });

  if (focusMagazine) {
    const root = document.querySelector(":root");

    root.style.setProperty(
      "--background-color",
      `var(${focusMagazine.colorPalette.background})`,
    );
    root.style.setProperty(
      "--primary-color",
      `var(${focusMagazine.colorPalette.primaryColor})`,
    );
    root.style.setProperty(
      "--secondary-color",
      `var(${focusMagazine.colorPalette.secondaryColor})`,
    );
  }

  e.preventDefault();
});
