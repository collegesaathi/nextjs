import ReactQuillEditor from "@/common/ReactQuillEditor";
import React, { useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const AdminOnlineMBA = ({ setMonthlyData, monthlyData, formData, handleQuillChange, handleChange }) => {


    const handleMonthChange = (month, value) => {
        setMonthlyData({ ...monthlyData, [month]: value });
    };

    const chartData = months.map((month) => ({
        month,
        value: Number(monthlyData[month]) || 0,
    }));


    return (
        <div className="max-w-6xl  p-6">
            <div>
                <label className="flex justify-between text-[#FF1B1B] font-medium mb-1">
                    Name{" "}
                </label>
                <input
                    type="text"
                    name="futuretitle"
                    value={formData.futuretitle}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    placeholder="Enter partners name"
                    className="w-full p-3 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CECECE]"
                    required
                />
            </div>
            <ReactQuillEditor
                label="Description"
                desc={formData.futuredesc}
                handleBioChange={(val) => handleQuillChange("futuredesc", val)}
            />

            <ReactQuillEditor
                label="Botttom Description"
                desc={formData.futurebtmdesc}
                handleBioChange={(val) => handleQuillChange("futurebtmdesc", val)}
            />

            {/* Monthly Inputs */}
            <div className="bg-white p-6 rounded-2xl shadow mb-8">
                <h3 className="font-semibold mb-4 text-lg">
                    Monthly Demand Values
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {months.map((month) => (
                        <div key={month}>
                            <label className="block text-red-600 font-medium mb-1">
                                {month}
                            </label>
                            <input
                                type="number"
                                value={monthlyData[month]}
                                onChange={(e) =>
                                    handleMonthChange(month, e.target.value)
                                }
                                placeholder={`Enter ${month} value`}
                                className="w-full border rounded-lg px-3 py-2"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Chart Preview */}
            <div className="bg-white p-6 rounded-2xl shadow mb-8">
                <h3 className="font-semibold mb-4 text-lg">
                    Live Chart Preview
                </h3>

                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData}>
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke="#dc2626"
                                strokeWidth={3}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Save Button */}
        </div>
    );
};

export default AdminOnlineMBA;
