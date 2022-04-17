export default [
  {
    id: "1",
    title: "Project Family House",
    thumbImgSrc: require("../assets/images/projects/family-house/familyHouse3-680x480.jpeg"),
    quote: "An old thing becomes new if you detach it from what usually surrounds it.",
    gallery: [
      // img 1
      {
        // src medium (1280 x 960)
        src: require("../assets/images/projects/family-house/familyHouse1-1280x960.jpeg"),
        // src small (680 x 480)
        thumbnail:require("../assets/images/projects/family-house/familyHouse1-680x480.jpeg"),
        w: 1280,
        h: 960,
        alt: "Family House 1", // optional alt attribute for thumbnail image
        title: "Family House"
      },
      {
        // src medium (1280 x 960)
        src: require("../assets/images/projects/family-house/familyHouse1-1280x960.jpeg"),
        // src small (680 x 480)
        thumbnail:require("../assets/images/projects/family-house/familyHouse1-680x480.jpeg"),
        w: 1280,
        h: 960,
        alt: "Family House 1", // optional alt attribute for thumbnail image
        title: "Family House"
      },
      // img 2
    ],
    text: "Inspired by the aforementioned, we removed the wall between the kitchen and the living room to make it more airy and bright, as the previous outdated composition did not meet the criteria of current housing trends.",
  },
];
