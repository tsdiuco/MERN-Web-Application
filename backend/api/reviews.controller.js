import RestaurantsDAO from "../dao/restaurantsDAO.js"

export default class ReviewsCtrl {
    static async apiPostReview(req, res, next) {
        try {
            const restaurantId = req.body.restaurant_id
            const review = req.body.text
            const userInfo = {
                name: req.body.name,
                _id: req.body.user_id
            }
            const date = new Date()

            const ReviewResponse = await ReviewsDAO.addReview(
                restaurantId,
                userInfo,
                review,
                date,
            )

            res.json({ status: "success" })
        }

    }
}