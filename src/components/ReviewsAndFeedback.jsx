const ReviewsAndFeedback = () => {
  const reviews = [
    {
      name: "Emily Johnson",
      title: "Marketing Specialist",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      feedback:
        "Navigate transformed my career. Their guidance and networking opportunities helped me land my dream job. Highly recommend!",
    },
    {
      name: "Michael Lee",
      title: "Software Engineer",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      feedback:
        "The mock interviews were a game changer! The insights I received made me more confident and prepared for the real thing.",
    },
    {
      name: "Sophia Patel",
      title: "UX Designer",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      feedback:
        "I can't thank Navigate enough! Their career planning sessions gave me a clear path forward. Truly life-changing!",
    },
  ];

  return (
    <div className=" py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Real feedback from professionals who achieved success with Navigate.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 text-center flex flex-col items-center"
            >
              <img
                src={review.photo}
                alt={`${review.name}`}
                className="w-20 h-20 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {review.name}
              </h3>
              <p className="text-sm text-gray-500">{review.title}</p>
              <p className="text-gray-600 mt-4 italic">
                &quot;{review.feedback}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsAndFeedback;
