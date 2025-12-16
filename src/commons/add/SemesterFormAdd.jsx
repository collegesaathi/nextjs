import React from "react";
import { MdAdd, MdDelete } from "react-icons/md";

export default function SemesterFormAdd({ semesters, setSemesters }) {

    // Add Semester
    const addSemester = () => {
        setSemesters(prev => [
            ...prev,
            { title: `Semester ${prev.length + 1}`, subjects: [{ description: "" }] }
        ]);
    };

    // Delete Semester
    const deleteSemester = (sIndex) => {
        setSemesters(prev => prev.filter((_, i) => i !== sIndex));
    };

    // Change Semester Title
    const changeSemesterTitle = (index, value) => {
        const copy = [...semesters];
        copy[index].title = value;
        setSemesters(copy);
    };

    // Add Subject
    const addSubject = (sIndex) => {
        const copy = [...semesters];
        copy[sIndex].subjects.push({ description: "" });
        setSemesters(copy);
    };

    // Delete Subject
    const deleteSubject = (sIndex, subIndex) => {
        const copy = [...semesters];
        copy[sIndex].subjects = copy[sIndex].subjects.filter((_, i) => i !== subIndex);
        setSemesters(copy);
    };

    // Handle Subject Field Change
    const handleSubjectChange = (sIndex, subIndex, field, value) => {
        const copy = [...semesters];
        copy[sIndex].subjects[subIndex][field] = value;
        setSemesters(copy);
    };

    return (
        <div>

            {/* HEADER */}
            <div className="flex justify-between mb-5">
                <h2 className="text-xl font-semibold text-red-600">Semester Management</h2>
                <button
                    type="button"
                    onClick={addSemester}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                    + Add Semester
                </button>
            </div>

            {/* SEMESTERS */}
            {semesters.map((semester, sIndex) => (
                <div key={sIndex} className="border p-4 rounded-lg mb-6 bg-gray-50">

                    {/* Semester Title */}
                    <div className="flex justify-between items-center mb-4">
                        <input
                            type="text"
                            value={semester.title}
                            onChange={(e) => changeSemesterTitle(sIndex, e.target.value)}
                            className="font-semibold text-lg border p-2 rounded w-full mr-2"
                        />

                        <button
                         type="button"
                            onClick={() => deleteSemester(sIndex)}
                            className="bg-red-500 text-white p-2 rounded"
                        >
                            <MdDelete />
                        </button>
                    </div>

                    {/* SUBJECTS */}
                    {semester.subjects.map((subject, subIndex) => (
                        <div key={subIndex} className="grid grid-cols-1 gap-3 bg-white p-3 mb-3 rounded">
                            <textarea
                                rows="3"
                                value={subject.description}
                                onChange={(e) =>
                                    handleSubjectChange(sIndex, subIndex, "description", e.target.value)
                                }
                                className="border p-2 rounded"
                                placeholder="Subject Description"
                            ></textarea>

                            <button
                             type="button"
                                onClick={() => deleteSubject(sIndex, subIndex)}
                                className="bg-red-100 text-red-600 text-sm p-2 rounded w-fit"
                            >
                                Delete Subject
                            </button>

                        </div>
                    ))}

                    {/* ADD SUBJECT */}
                    <button
                     type="button"
                        onClick={() => addSubject(sIndex)}
                        className="text-red-600 font-medium mt-2 flex items-center"
                    >
                        <MdAdd /> Add Subject
                    </button>

                </div>
            ))}
        </div>
    );
}
