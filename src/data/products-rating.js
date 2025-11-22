
export const reviews = [
  {
    id: 1,
    productid: 1,
    username: "Khubair Ali",
    date: "31/3/2021",
    rating: 4.5,
    review: "Nice Product i will recommend everyone to purchase this",
    isApproved: true
  },
  {
    id: 2,
    productid: 1,
    username: "Umair Arshad",
    date: "1/4/2021",
    rating: 2.0,
    review: "Not much recommended Product, very cheap product",
    isApproved: true
  },
  {
    id: 3,
    productid: 2,
    username: "Nasir Ali",
    date: "31/3/2021",
    rating: 4.5,
    review: "Nice Product i will recommend everyone to purchase this",
    isApproved: true
  },
  {
    id: 4,
    productid: 2,
    username: "Ali Arshad",
    date: "1/4/2021",
    rating: 2.0,
    review: "Not much recommended Product, very cheap product",
    isApproved: true
  },
  {
    id: 5,
    productid: 3,
    username: "Nasir Ali",
    date: "31/3/2021",
    rating: 4.5,
    review: "Nice Product i will recommend everyone to purchase this",
    isApproved: true
  },
  {
    id: 6,
    productid: 4,
    username: "Ali Arshad",
    date: "1/4/2021",
    rating: 2.0,
    review: "Not much recommended Product, very cheap product",
    isApproved: true
  },
  {
    id: 7,
    productid: 5,
    username: "Mazhar",
    date: "1/4/2021",
    rating: 2.0,
    review: "Not much recommended Product, very cheap product",
    isApproved: true
  },
  {
    id: 8,
    productid: 6,
    username: "Ali Arshad",
    date: "1/4/2021",
    rating: 2.0,
    review: "Not much recommended Product, very cheap product",
    isApproved: true
  },
  {
    id: 9,
    productid: 7,
    username: "Ali Arshad",
    date: "1/4/2021",
    rating: 2.0,
    review: "Not much recommended Product, very cheap product",
    isApproved: true
  },
  {
    id: 10,
    productid: 8,
    username: "Ali Arshad",
    date: "1/4/2021",
    rating: 2.0,
    review: "Not much recommended Product, very cheap product",
    isApproved: true
  },
  {
    id: 11,
    productid: 9,
    username: "Ali Arshad",
    date: "1/4/2021",
    rating: 2.0,
    review: "Not much recommended Product, very cheap product",
    isApproved: true
  },
  {
    id: 12,
    productid: 9,
    username: "Anwar",
    date: "1/4/2021",
    rating: 2.0,
    review: "Not much recommended Product, very cheap product",
    isApproved: true
  },
  {
    id: 13,
    productid: 9,
    username: "Asad",
    date: "1/5/2022",
    rating: 2.0,
    review: "Not much recommended Product, very cheap product",
    isApproved: true
  },
  {
    id: 14,
    productid: 9,
    username: "Ali Arshad",
    date: "10/4/2021",
    rating: 2.0,
    review: "Not much recommended Product, very cheap product",
    isApproved: true
  },
  {
    id: 15,
    productid: 9,
    username: "Anus",
    date: "1/4/2021",
    rating: 4.0,
    review: "Not much recommended Product, very cheap product",
    isApproved: true
  },
  {
    id: 16,
    productid: 9,
    username: "Ali Arshad",
    date: "1/4/2021",
    rating: 2.0,
    review: "Not much recommended Product, very cheap product",
    isApproved: true
  },
  {
    id: 17,
    productid: 9,
    username: "Hamza",
    date: "1/6/2022",
    rating: 3.0,
    review: "Not much recommended Product, very cheap product",
    isApproved: true
  },
  {
    id: 18,
    productid: 9,
    username: "Ali Arshad",
    date: "1/4/2021",
    rating: 2.0,
    review: "Not much recommended Product, very cheap product",
    isApproved: true
  },
  {
    id: 19,
    productid: 9,
    username: "Ali Arshad",
    date: "1/6/2021",
    rating: 2.0,
    review: "Not much recommended Product, very cheap product",
    isApproved: true
  },
  {
    id: 20,
    productid: 5,
    username: "Ammar Arshad",
    date: "1/4/2021",
    rating: 5.0,
    review: "Not much recommended Product, very cheap product",
    isApproved: true
  }








];

export const countReviews = (productID) => {
  let sum = 0;
  reviews.forEach((review) => {
    if (review.productid === productID) sum++;
  });
  return sum;
};


