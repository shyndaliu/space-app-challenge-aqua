import { useState } from "react";

// Modal component
function Modal({ isOpen, onClose, content }) {
  const modalClassName = isOpen
    ? "fixed inset-0 z-50 flex items-center justify-center backdrop-filter-blur backdrop-blur transition-opacity duration-300 opacity-100"
    : "fixed inset-0 z-50 flex items-center justify-center backdrop-filter-blur backdrop-blur transition-opacity duration-300 opacity-0 pointer-events-none";

  if (!isOpen) return null;

  return (
    <div className={modalClassName}>
      <div className="rounded-lg bg-white p-6 text-black shadow-lg">
        {content}
        <button
          className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-black"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function Test() {
  // Define your test questions and options here
  const questions = [
    {
      question: "What percentage of Earth's water is freshwater?",
      options: ["10%", "25%", "50%", "97.5%"],
      correctAnswer: "25%",
    },
    {
      question:
        "Which of the following is a major source of freshwater for humans?",
      options: ["Sea water", "Glaciers", "Swimming pools", "Soda"],
      correctAnswer: "Glaciers",
    },
    {
      question:
        "What is the main cause of water pollution in rivers and lakes?",
      options: [
        "Natural sediment",
        "Industrial waste",
        "Alien invasion",
        "Lack of fish",
      ],
      correctAnswer: "Industrial waste",
    },
  ];

  // State to track user's selected answers
  const [userAnswers, setUserAnswers] = useState(
    new Array(questions.length).fill(null),
  );

  // State for controlling the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle user answer selection
  const handleAnswerSelect = (questionIndex, selectedOption) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[questionIndex] = selectedOption;
    setUserAnswers(updatedUserAnswers);
  };

  // Function to calculate the user's score
  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (q.correctAnswer === userAnswers[index]) {
        score++;
      }
    });
    return score;
  };

  const userScore = calculateScore();

  // Function to handle modal opening
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to handle modal closing
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative z-20 h-screen w-full bg-gray-700 px-5 py-10">
      <div className="absolute left-1/4 right-1/4">
        <h1 className="mx-auto pt-5 text-4xl font-semibold text-[#19D5EF]">
          Water Sources Quiz
        </h1>

        {/* Render the questions and options */}
        {questions.map((q, index) => (
          <div key={index} className="py-4">
            <p className="text-xl text-gray-100">
              {index + 1}. {q.question}
            </p>
            <div className="mt-2 flex flex-col">
              {q.options.map((option, i) => (
                <label
                  key={i}
                  className="mt-2 inline-flex items-center text-gray-200"
                >
                  <input
                    type="radio"
                    value={option}
                    name={`question${index}`}
                    onChange={() => handleAnswerSelect(index, option)}
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        {/* Add a submit button */}
        <button
          className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white"
          onClick={openModal}
        >
          Submit
        </button>

        {/* Display user's score and feedback in the modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          content={
            <div className="text-black">
              <p>
                Your Score: {userScore} out of {questions.length}
              </p>
              <div>
                {questions.map((q, index) => (
                  <div key={index} className="py-2">
                    <p>
                      {index + 1}. {q.question}
                    </p>
                    <p>Your Answer: {userAnswers[index]}</p>
                    {userAnswers[index] === q.correctAnswer ? (
                      <p className="text-green-500">Correct</p>
                    ) : (
                      <p className="text-red-500">
                        Correct Answer: {q.correctAnswer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}
