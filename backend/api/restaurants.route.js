import express from "express"
import RestaurantsController from "./restaurants.controller.js"
import ReviewsCtrl from "./reviews.controller.js"

const router = express.Router()

// router.route("/").get((req, res) => res.send("hello world"))
router.route("/").get(RestaurantsController.apiGetRestaurants)
router
    .route("/review")
    .post(ReviewsCtrl.apiPostReview)
    .put(ReviewsCtrl.apiUpdateReview)
    .delete(ReviewsCtrl.apiDeleteReview)

export default router