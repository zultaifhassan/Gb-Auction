import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../../Features/review/reviewSlice";


const ReviewsTab = () => {
    const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  return (
    <div className="current-table product-table">
    <h1>Contact Form Details</h1>
    <table>
      <thead>
        <tr>
          <th>Emails</th>
          <th>Review</th>
        </tr>
      </thead>
      <tbody>
        {reviews?.map((user) => {
          <tr>
            <td>{user.name}</td>
            <td>{user.message}</td>
            {/* <td><AiTwotoneDelete fontSize={25} /></td> */}
          </tr>
        })}
      </tbody>
    </table>
  </div>
  )
}

export default ReviewsTab