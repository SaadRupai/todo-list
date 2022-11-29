const express = require("express");
const router = express.Router();

const profileController = require("../controllers/profileController");
const listController = require("../controllers/listController");
const authVerifyMiddleware = require("../middleware/authVerifyMiddleware");

router.post("/profile-create", profileController.createProfile);
router.post("/profile-login", profileController.loginProfile);

router.get("/profile-select",authVerifyMiddleware,profileController.selectProfile)
router.post("/profile-update",authVerifyMiddleware, profileController.updateProfile);

//list routes
router.post("/list-create",authVerifyMiddleware,listController.createList);
router.get("/list-select", authVerifyMiddleware, listController.selectList);
router.post("/list-update",authVerifyMiddleware,listController.updateList);
router.post("/list-status-update",authVerifyMiddleware,listController.updateListStatus);
router.post("/list-delete",authVerifyMiddleware,listController.removeList);
router.get("/list-status-search",authVerifyMiddleware,listController.listStatusSearch);
router.get("/list-date-search",authVerifyMiddleware,listController.listDateSearch);


module.exports=router;