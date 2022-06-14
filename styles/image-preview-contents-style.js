const styleContents = {
  ".bodyContainer": { marginTop: "2rem" },
  ".body300x65Container": {
    width: "300px",
    height: "65px",
    border: "0.5px solid gray",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem"
  },
  ".body300x65Text": { width: "235px", height: "100%", overflow: "hidden" },
  ".body300x65TextContents": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "5px 0 0 10px"
  },
  ".body300x65TextTitle": {
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center"
  },
  ".body300x65TextDescription": {
    fontSize: "12px",
    fontWeight: "bold",
    paddingTop: "2px"
  },
  ".body300x65Image": { width: "65px", height: "65px", objectFit: "cover" },
  ".body300x300Container": { width: "300px", marginBottom: "1rem" },
  ".body300x300Image": { width: "300px", height: "300px", objectFit: "cover" },
  ".body300x300TextContainer": {
    width: "300px",
    height: "60px",
    display: "flex",
    flexDirection: "column",
    border: "0.5px solid gray",
    borderRadius: "6px",
    padding: "2px 10px 2px 10px",
    overflow: "hidden"
  },
  ".body300x300TextTitle": {
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "center"
  },
  ".body300x300TextDescription": {
    fontSize: "13px",
    fontWeight: "bold",
    paddingTop: "4px"
  },
  ".bodyInPostContainer": {
    width: "100%",
    maxWidth: "40rem",
    height: "150px",
    border: "0.5px solid gray",
    borderRadius: "6px",
    overflow: "hidden"
  },
  ".bodyInPostContents": { display: "flex" },
  ".bodyInPostImageContainer": {
    width: "150px",
    height: "150px",
    objectFit: "cover"
  },
  ".bodyInPostTextContainer": { flexGrow: 2 },
  ".bodyInPostTextTitle": {
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
    padding: "20px 0 10px 0"
  },
  ".bodyInPostTextDescription": { fontSize: "16px", padding: "0 5px" },
  "@media (min-width: 480px)": {
    ".bodyInPostTextTitle": {
      fontSize: "26px",
      fontWeight: "bold",
      textAlign: "center",
      padding: "20px 0 10px 0"
    },
    ".bodyInPostTextDescription": { fontSize: "22px", padding: "0 20px" }
  }
}

module.exports = {
  styleContents,
}