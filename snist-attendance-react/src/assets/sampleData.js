const sample = {
  c_month: [
    [
      "August-2022",
      [
        ["22-08-2022 ", "A", "A", "A", "A", "", "", ""],
        ["23-08-2022 ", "A", "A", "", "", "", "", ""],
        ["24-08-2022 ", "A", " P ", "A", "A", "A", "A", "A"],
        ["25-08-2022 ", "A", "A", "A", "A", "", "", ""],
        ["26-08-2022 ", "A", " P ", " P ", "", "", "", ""],
        ["29-08-2022 ", "A", "A", "A", "A", "A", "A", "A"],
        ["30-08-2022 ", "A", "A", "A", "A", "", "", ""],
      ],
    ],
    [
      "September-2022",
      [
        ["01-09-2022 ", "A", "A", "A", "A", "", "", ""],
        ["02-09-2022 ", " P ", " P ", " P ", " P ", "", "", ""],
        ["03-09-2022 ", "A", "A", "A", "A", "A", "A", ""],
        ["05-09-2022 ", " P ", " P ", " P ", " P ", " P ", " P ", ""],
        ["06-09-2022 ", " P ", " P ", " P ", " P ", "", "", ""],
        ["07-09-2022 ", "A", "A", "", "", "", "", ""],
        ["08-09-2022 ", "A", "A", "A", "A", "", "", ""],
        ["10-09-2022 ", "A", "A", "A", "A", "A", "A", ""],
        ["12-09-2022 ", " P ", " P ", " P ", " P ", " P ", " P ", " P "],
        ["13-09-2022 ", " P ", " P ", " P ", " P ", " P ", " P ", " P "],
        ["14-09-2022 ", " P ", " P ", " P ", " P ", " P ", "", ""],
        ["15-09-2022 ", " P ", " P ", " P ", " P ", "", "", ""],
        ["16-09-2022 ", " P ", " P ", " P ", " P ", "", "", ""],
        ["19-09-2022 ", "A", "A", "A", "A", " P ", " P ", " P "],
        ["20-09-2022 ", " P ", " P ", " P ", " P ", " P ", " P ", " P "],
        ["21-09-2022 ", " P ", " P ", " P ", " P ", "", "", ""],
        ["22-09-2022 ", " P ", " P ", " P ", " P ", "", "", ""],
        ["23-09-2022 ", "A", "A", " P ", " P ", "", "", ""],
        ["24-09-2022 ", "A", "A", "A", "", "", "", ""],
        ["26-09-2022 ", " P ", " P ", " P ", " P ", "A", "A", "A"],
        ["27-09-2022 ", "A", "A", " P ", " P ", "A", " P ", " P "],
        ["28-09-2022 ", "A", " P ", " P ", " P ", " P ", " P ", " P "],
        ["29-09-2022 ", "A", "A", "A", "A", "", "", ""],
        ["30-09-2022 ", "A", "A", "A", "A", "", "", ""],
      ],
    ],
    [
      "October-2022",
      [
        ["01-10-2022 ", "A", "A", "A", "A", "A", "A", ""],
        ["10-10-2022 ", "A", "A", "A", "A", "A", "A", "A"],
        ["11-10-2022 ", "A", "A", "A", "A", "A", " P ", " P "],
        ["12-10-2022 ", "A", "A", "A", "A", "A", "A", ""],
        ["13-10-2022 ", "A", "A", "A", " P ", "", "", ""],
        ["14-10-2022 ", "A", "A", "A", "A", "", "", ""],
        ["15-10-2022 ", "A", "A", "A", "A", "A", "A", "A"],
        ["17-10-2022 ", " P ", " P ", " P ", " P ", " P ", " P ", " P "],
        ["18-10-2022 ", " P ", " P ", " P ", " P ", " P ", " P ", " P "],
        ["19-10-2022 ", " P ", " P ", " P ", " P ", " P ", " P ", " P "],
        ["20-10-2022 ", " P ", " P ", " P ", " P ", "", "", ""],
        ["21-10-2022 ", " P ", " P ", " P ", "", "", "", ""],
        ["22-10-2022 ", "A", "A", "", "", "", "", ""],
        ["31-10-2022 ", " P ", " P ", " P ", " P ", " P ", " P ", " P "],
      ],
    ],
    [
      "November-2022",
      [
        ["01-11-2022 ", " P ", " P ", " P ", " P ", " P ", "", ""],
        ["02-11-2022 ", " P ", " P ", " P ", " P ", " P ", " P ", ""],
        ["03-11-2022 ", "A", " P ", " P ", "", "", "", ""],
        ["04-11-2022 ", "A", "A", "A", "A", "", "", ""],
        ["05-11-2022 ", "A", "A", "A", "A", "A", "A", ""],
        ["07-11-2022 ", " P ", " P ", " P ", " P ", "A", "A", ""],
        ["09-11-2022 ", "A", "A", "A", "A", "A", "A", "A"],
        ["10-11-2022 ", " P ", " P ", " P ", " P ", "", "", ""],
        ["11-11-2022 ", " P ", " P ", "", "", "", "", ""],
        ["12-11-2022 ", "A", "A", "", "", "", "", ""],
        ["14-11-2022 ", " P ", " P ", " P ", " P ", " P ", " P ", " P "],
        ["15-11-2022 ", " P ", " P ", " P ", " P ", " P ", " P ", " P "],
        ["16-11-2022 ", " P ", "A", " P ", " P ", " P ", " P ", ""],
        ["17-11-2022 ", " P ", " P ", " P ", "", "", "", ""],
        ["18-11-2022 ", " P ", " P ", " P ", " P ", "", "", ""],
        ["19-11-2022 ", "A", "A", "A", "", "", "", ""],
        ["21-11-2022 ", " P ", " P ", " P ", " P ", " P ", " P ", ""],
        ["22-11-2022 ", " P ", " P ", " P ", " P ", " P ", " P ", " P "],
        ["23-11-2022 ", " P ", " P ", " P ", " P ", " P ", " P ", ""],
        ["24-11-2022 ", " P ", " P ", " P ", " P ", "", "", ""],
        ["25-11-2022 ", " P ", " P ", " P ", " P ", "", "", ""],
        ["26-11-2022 ", "A", "A", "A", "A", "A", "", ""],
        ["28-11-2022 ", " P ", " P ", " P ", " P ", " P ", " P ", " P "],
        ["29-11-2022 ", " P ", " P ", " P ", " P ", " P ", " P ", " P "],
      ],
    ],
  ],
  name: "Sample Name",
};

export default sample;