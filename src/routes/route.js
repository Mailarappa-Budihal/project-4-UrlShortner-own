const express = require("express");
const router = express.Router();
const Urlcontroller = require("../controllers/urlController");

//---------------------API's---------------------//

//-----------Create ShortUrl---------------------//
router.post("/url/shorten", Urlcontroller.createUrl);

//------------fetch the longUrl------------------//
router.get("/:urlCode", Urlcontroller.getUrl);

module.exports = router;