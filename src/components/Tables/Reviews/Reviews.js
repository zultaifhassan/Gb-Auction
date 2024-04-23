import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../../Features/review/reviewSlice";


const ReviewsTab = () => {
    const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.reviews);
  console.log(reviews);

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
        </tr>
      </thead>
      <tbody>
        {reviews?.map((user) => (
          <tr>
            <td>{user.email}</td>
            {/* <td><AiTwotoneDelete fontSize={25} /></td> */}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default ReviewsTab