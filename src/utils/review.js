import { toast } from "react-toastify";
const fakeReviews = [
  // {
  //   id: 1,
  //   uid: "u1Sd6Fs3Pg09",
  //   name: "Sophia Lee",
  //   review:
  //     "The Career Counseling Session was transformative. John Harris provided excellent guidance and actionable steps to help me focus on my goals. Highly recommended!",
  // },
  // {
  //   id: 1,
  //   uid: "u1Jd2Gs8Kv11",
  //   name: "Ethan Walker",
  //   review:
  //     "John Harris is amazing! His counseling session gave me the confidence to transition to a new career path. Worth every penny.",
  // },
  {
    id: 2,
    uid: "r2Gt7Ns4Bh02",
    name: "Michael Johnson",
    review:
      "Donald Trump's insights during the Resume Review session were spot-on. My resume now stands out, and I’ve already received interview calls!",
  },
  {
    id: 2,
    uid: "r2Gt9Ns3Jh21",
    name: "Jessica Taylor",
    review:
      "My resume looks so professional now. The feedback was detailed, and I feel confident applying for new roles.",
  },
  {
    id: 3,
    uid: "m3Tr9Js5Nk03",
    name: "Emily Carter",
    review:
      "The Mock Interview with Anna Lee was an eye-opener. Her feedback helped me improve my confidence and communication skills. Fantastic experience!",
  },
  {
    id: 3,
    uid: "m3Cr9Ks4Lq41",
    name: "Nathan Scott",
    review:
      "Anna Lee’s mock interview gave me realistic expectations for my upcoming interviews. I learned a lot!",
  },
  {
    id: 4,
    uid: "c4Pl8Ws6Rt04",
    name: "James Brown",
    review:
      "Emily Carter's Career Planning Workshop was incredibly detailed and inspiring. The exercises were practical and helped me clarify my professional path.",
  },
  {
    id: 4,
    uid: "c4Pl9Ws7Rb61",
    name: "Grace Bennett",
    review:
      "I found the goal-setting strategies in this workshop very useful. Emily is an excellent counselor!",
  },
  {
    id: 4,
    uid: "c4Pl8Ws3Lt04",
    name: "Liam Anderson",
    review:
      "This workshop helped me create a realistic roadmap for my career goals. Highly recommended!",
  },
  {
    id: 5,
    uid: "n5Ch7Xs7Kp05",
    name: "Laura Wilson",
    review:
      "Networking Secrets with Robert Chang was a game changer! I learned how to make meaningful connections and effectively use LinkedIn. Great session!",
  },
  {
    id: 5,
    uid: "n5Jh9Xs8Kv05",
    name: "Oscar Lewis",
    review:
      "Robert’s strategies helped me stand out during industry events. This session was incredibly helpful.",
  },
  {
    id: 6,
    uid: "l6Pb6Ys8Qr06",
    name: "Benjamin Garcia",
    review:
      "Samantha Green’s Cover Letter Tips session was incredibly helpful. My cover letters now feel tailored and compelling. Thank you for the guidance!",
  },
  {
    id: 6,
    uid: "l6Jb7Ys6Nr41",
    name: "Sophia Davis",
    review:
      "The tips provided by Samantha were exactly what I needed. My cover letters have improved significantly.",
  },
  {
    id: 7,
    uid: "o7Fg9Jz9Lp07",
    name: "Isabella Martinez",
    review:
      "Mark Williams helped optimize my LinkedIn profile perfectly. I’ve already noticed an increase in recruiter views. Highly recommend this service!",
  },
  {
    id: 8,
    uid: "s8Nk8Vs1Bt08",
    name: "Oliver Anderson",
    review:
      "Jessica Park’s Salary Negotiation Skills session was incredible. I feel much more confident in negotiating my worth now. Great value!",
  },
  {
    id: 8,
    uid: "s8Jk8Vs2Ct09",
    name: "Mason Rivera",
    review:
      "Jessica provided actionable steps that led to a 20% salary increase in my recent job offer. Amazing session!",
  },
  {
    id: 9,
    uid: "p9Tl7Zq2Wp09",
    name: "Ava Roberts",
    review:
      "Daniel Smith’s Personal Branding Masterclass was outstanding. I now have a clear personal brand and a solid strategy to stand out in my industry.",
  },
  {
    id: 9,
    uid: "p9Tl9Qs2Wb19",
    name: "Chloe Wilson",
    review:
      "The masterclass changed how I approach personal branding. Daniel provided invaluable advice!",
  },
];

// Get Review From Local Storage
const getReviewFLS = () => {
  const reviewJSON = localStorage.getItem("reviews");
  if (reviewJSON) {
    const reviews = JSON.parse(reviewJSON);
    return reviews;
  } else {
    return fakeReviews;
  }
};

// Adding Review To Local Storage
const addReview = (rev) => {
  const reviews = getReviewFLS();
  // const isExist = reviews.find((r) => r.uid === rev.uid);
  // if (isExist) return toast.error("Already Reviewed");
  reviews.push(rev);
  localStorage.setItem("reviews", JSON.stringify(reviews));
  toast.success("Thanks For Feedback");
};

// // get Wishlist item
// const getWishlistFLS = () => {
//   const wishlistJSON = localStorage.getItem("wishlist");
//   if (wishlistJSON) {
//     const wishlist = JSON.parse(wishlistJSON);
//     return wishlist;
//   } else {
//     return [];
//   }
// };

// // adding Wishlist
// const addToWishlist = (item) => {
//   const wishlist = getWishlistFLS();
//   const isExist = wishlist.find(
//     (wList) => wList.product_id === item.product_id
//   );
//   if (isExist) return toast.error("Already on Wishlist!");
//   wishlist.push(item);
//   localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   toast.success("Added to Wishlist!");
// };

// // remove Wishlist
// const removeWishlist = (item) => {
//   const wishlist = getWishlistFLS();
//   const remainingWishlist = wishlist.filter(
//     (wItem) => wItem.product_id !== item.product_id
//   );
//   localStorage.setItem("wishlist", JSON.stringify(remainingWishlist));
//   toast.success("Removed from Wishlist!");
// };

export { getReviewFLS, addReview };
