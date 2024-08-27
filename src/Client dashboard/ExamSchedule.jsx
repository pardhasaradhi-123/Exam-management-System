import React from "react";
import { FaCalendarAlt, FaClock, FaUser, FaInfoCircle } from "react-icons/fa";

export default function ExamSchedule() {
  const examScheduleData = [
    {
      id: 1,
      subject: "English",
      date: "2024-09-01",
      time: "01:00 PM - 04:00 PM",
      duration: "3 hours",
      instructor: "Dr. Emily White",
      notes: "Focus on essay writing and comprehension.",
    },
    {
      id: 2,
      subject: "Mathematics",
      date: "2024-09-02",
      time: "09:00 AM - 12:00 PM",
      duration: "3 hours",
      instructor: "Prof. John Doe",
      notes: "Bring a calculator and geometry set.",
    },
    {
      id: 3,
      subject: "Physics",
      date: "2024-09-03",
      time: "01:00 PM - 04:00 PM",
      duration: "3 hours",
      instructor: "Dr. Jane Smith",
      notes: "Focus on chapters 3-6.",
    },
    {
      id: 4,
      subject: "Biology",
      date: "2024-09-04",
      time: "09:00 AM - 12:00 PM",
      duration: "3 hours",
      instructor: "Dr. Richard Green",
      notes: "Review chapters 7-10, with emphasis on human anatomy.",
    },
    {
      id: 5,
      subject: "Chemistry",
      date: "2024-09-05",
      time: "09:00 AM - 12:00 PM",
      duration: "3 hours",
      instructor: "Dr. Alan Brown",
      notes: "Organic chemistry is a key topic.",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen mx-5 rounded-lg shadow-lg max-sm:ml-[-1rem]">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
        Exam Schedule
      </h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
        {examScheduleData.map((exam) => (
          <div
            key={exam.id}
            className="p-6 rounded-xl shadow-lg bg-gray-100 flex flex-col border-t-4 border-indigo-500 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out max-sm:p-3 max-sm:w-auto"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {exam.subject}
            </h2>
            <p className="text-gray-600 flex items-center mb-3 text-lg">
              <FaCalendarAlt className="mr-2 text-indigo-500" /> {exam.date}
            </p>
            <p className="text-gray-600 flex items-baseline mb-3 text-lg">
              <FaClock className="mr-2 text-indigo-500" /> {exam.time} (
              {exam.duration})
            </p>
            <p className="text-gray-600 flex items-baseline mb-3 text-lg">
              <FaUser className="mr-2 text-indigo-500" />{" "}
              <span className="text-indigo-500 underline">Instructor:</span>{" "}
              {exam.instructor}
            </p>
            <p className="text-blue-600 flex items-baseline italic text-md">
              <FaInfoCircle className="mr-2 text-blue-500" /> {exam.notes}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}