/*
  EDIT YOUR FAMILY HERE
  ---------------------
  Each person can have:
    name      - displayed name
    dob       - date of birth (any format you prefer)
    place     - birthplace, hometown, or current place
    picture   - URL or a local path such as "pics/grandmother.jpg"
    relation  - optional label, such as Grandmother
    spouse    - optional person object
    children  - optional array of person objects

  Keep local photos in the family/pics folder. If a photo is missing, the
  person's initials are shown automatically.
*/
const FAMILY_DATA = {
  name: "Ron Anderson",
  dob: "12 April 1948",
  place: "Chennai, India",
  picture: "pics/ron.jpg",
  relation: "Grandfather",
  children: [
    {
      name: "Jack Anderson",
      dob: "17 January 1974",
      place: "Bengaluru, India",
      picture: "pics/jack.jpg",
      relation: "Son",
      spouse: {
        name: "Marina Ramirez",
        dob: "28 June 1977",
        place: "Bengaluru, India",
        picture: "pics/marina.jpg",
        relation: "Daughter-in-law"
      },
      children: [
        {
          name: "Jennie Anderson",
          dob: "8 November 2001",
          place: "Bengaluru, India",
          picture: "pics/jennie.jpg",
          relation: "Granddaughter"
        },
        {
          name: "Evan Anderson",
          dob: "21 March 2005",
          place: "Bengaluru, India",
          picture: "pics/evan.jpg",
          relation: "Grandson"
        }
      ]
    },
    {
      name: "Helen Anderson",
      dob: "5 May 1978",
      place: "Coimbatore, India",
      picture: "pics/helen.jpg",
      relation: "Daughter",
      spouse: {
        name: "Aaron Lewis",
        dob: "14 February 1976",
        place: "Coimbatore, India",
        picture: "pics/aaron.jpg",
        relation: "Son-in-law"
      },
      children: [
        {
          name: "Christian Lewis",
          dob: "11 December 2004",
          place: "Coimbatore, India",
          picture: "pics/christian.jpg",
          relation: "Grandson"
        }
      ]
    }
  ]
};
