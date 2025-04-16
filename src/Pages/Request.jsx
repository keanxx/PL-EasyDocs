import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Instruction from "../Components/Instruction";
import { History, ChevronLeft, NotificationsActiveOutlined } from "@mui/icons-material";
import CustomButton from "../Components/CustomButton";
import StudentInformation from "../Components/StudentInformation";
import Swal from "sweetalert2";
import { Checkbox, Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

const Request = () => {
    const [selectedDocuments, setSelectedDocuments] = useState([]);
    const [selectedYears, setSelectedYears] = useState({});
    const [selectedSemesters, setSelectedSemesters] = useState({});
    const navigate = useNavigate();

    const documents = [
        { id: 1, name: "Certificate of Enrollment", price: "₱80.00" },
        { id: 2, name: "Certificate of Grades", price: "₱80.00" },
        { id: 3, name: "Good Moral", price: "₱80.00" },
    ];

    const handleCheckboxChange = (document) => {
        setSelectedDocuments((prev) =>
            prev.includes(document) ? prev.filter((item) => item !== document) : [...prev, document]
        );
    };

    const handleYearChange = (document, value) => {
        const formattedYear = `${value}-${Number(value) + 2}`; // Convert "2023" to "2023-2025"
        setSelectedYears((prev) => ({ ...prev, [document]: formattedYear }));
    };

    const handleSemesterChange = (document, value) => {
        setSelectedSemesters((prev) => ({ ...prev, [document]: value }));
    };

    const handleConfirmation = () => {
        if (selectedDocuments.length === 0) {
            Swal.fire("Error", "Please select at least one document!", "error");
            return;
        }

        Swal.fire({
            title: "Are you sure?",
            text: "Once submitted, you cannot modify your request.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "green",
            cancelButtonColor: "#d33",
            confirmButtonText: "Submit",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Processing...",
                    text: "Please wait while we submit your request.",
                    allowOutsideClick: false,
                    didOpen: () => Swal.showLoading(),
                });

                setTimeout(() => {
                    Swal.fire("Submitted!", "Your request has been submitted successfully.", "success").then(() => {
                        const selectedDocumentsWithPrice = selectedDocuments.map(docName => {
                            const document = documents.find(doc => doc.name === docName);
                            return {
                                name: docName,
                                price: document.price
                            };
                        });

                        navigate("/reciept", {
                            state: { selectedDocuments: selectedDocumentsWithPrice, selectedYears, selectedSemesters },
                        });
                    });
                }, 2000);
            }
        });
    };

    return (
        <>
            <div className="w-full py-5">
                <div className="flex space-x-2 py-5 justify-start">
                    <CustomButton to="/dashboard" icon={ChevronLeft}>
                        Request Now
                    </CustomButton>
                </div>

                <div className="w-full gap-5 flex flex-col md:flex-row">
                    {/* Left Section - Document Request Form */}
                    <div className="md:w-[73%] w-full shadow-lg rounded-lg hover:border-gray-700 hover:border">
                        <div className="subheader">
                            <p>Document Request Form</p>
                        </div>

                        <StudentInformation />

                        <div className="flex justify-center px-5">
                            <hr className="w-full border-t-2 border-black" />
                        </div>

                        <p className="text-xl font-bold p-5">DOCUMENTS INFORMATION</p>
                        <div className="w-full px-5">
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="custom table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1.125rem' }}></TableCell>
                                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1.125rem' }}>Price</TableCell>
                                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1.125rem' }}>Assessment Year</TableCell>
                                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1.125rem' }}>Semester</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {documents.map((doc) => (
                                            <TableRow key={doc.name}>
                                                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.125rem' }}>
                                                    <Checkbox
                                                        checked={selectedDocuments.includes(doc.name)}
                                                        onChange={() => handleCheckboxChange(doc.name)}
                                                    />
                                                    {doc.name}
                                                </TableCell>
                                                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.125rem' }}>{doc.price}</TableCell>
                                                <TableCell>
                                                    <Select
                                                        value={selectedYears[doc.name] ? selectedYears[doc.name].split('-')[0] : ""} // Extract the starting year
                                                        onChange={(e) => handleYearChange(doc.name, e.target.value)}
                                                        displayEmpty
                                                        sx={{
                                                            width: '150px',
                                                            height: '35px',
                                                            borderRadius: '4px',
                                                            fontWeight: 'bold',
                                                            fontSize: '1.125rem'
                                                        }}
                                                    >
                                                        <MenuItem value="" disabled sx={{ fontWeight: 500 }}>
                                                            --select--
                                                        </MenuItem>
                                                        <MenuItem value="2023" sx={{ fontWeight: 'bold', fontSize: '1.125rem' }}>2024-2025</MenuItem>
                                                        <MenuItem value="2024" sx={{ fontWeight: 'bold', fontSize: '1.125rem' }}>2025-2026</MenuItem>
                                                    </Select>
                                                </TableCell>
                                                <TableCell>
                                                    <Select
                                                        value={selectedSemesters[doc.name] || ""}
                                                        onChange={(e) => handleSemesterChange(doc.name, e.target.value)}
                                                        displayEmpty
                                                        sx={{
                                                            width: '150px',
                                                            height: '35px',
                                                            borderRadius: '4px',
                                                            fontWeight: 'bold',
                                                            fontSize: '1.125rem'
                                                        }}
                                                    >
                                                        <MenuItem value="" disabled sx={{ fontWeight: 500 }}>
                                                            --select--
                                                        </MenuItem>
                                                        <MenuItem value="1st Semester" sx={{ fontWeight: 'bold', fontSize: '1.125rem' }}>1st Semester</MenuItem>
                                                        <MenuItem value="2nd Semester" sx={{ fontWeight: 'bold', fontSize: '1.125rem' }}>2nd Semester</MenuItem>
                                                    </Select>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                        <div className="flex justify-center px-5">
                            <hr className="w-full border-t-2 border-black" />
                        </div>

                        <p className="text-xl font-bold p-5">Payment Method: <span className="text-xl font-bold px-5">CASH</span>
                        </p>
                        <div className="flex  md:justify-end flex-wrap px-5 gap-5 pb-5">
                            <button 
                            onClick={() => navigate("/dashboard")}
                            className="flex items-center justify-center bg-[#ff4747] px-9 py-2 text-white text-lg font-bold rounded-[5px] transition">CANCEL</button>

                            <button onClick={handleConfirmation}
                                className="flex items-center justify-center bg-[#15A309] px-9 py-2 text-white text-lg font-bold rounded-[5px] transition">SUBMIT</button>
                        </div>
                    </div>

                    {/* Instruction section */}
                    <div className='md:w-[27%] w-full hidden md:block shadow-lg border-gray-200 border rounded-lg px-5 py-3  flex-col relative'>
                        <div className='flex justify-end w-full'>
                            <NotificationsActiveOutlined fontSize="large" />
                        </div>

                        <div className="relative inline-block w-full px-5 py-3 rounded-lg bg-blue-200 mt-5">
                            {/* Background shadow layer */}
                            <div className="absolute top-1 left-1 w-full h-full bg-blue-300 rounded-lg -z-10"></div>

                            {/* Main content */}
                            <p className="text-blue-600 font-semibold text-sm md:text-base text-center">
                                <span className="text-3xl md:text-5xl font-bold">4</span> EASY STEPS TO <br /> CREATE A REQUEST
                            </p>
                        </div>

                        <Instruction
                            steps="Step #1"
                            content='Click the "Request Now" button'
                            picture="/images/step1.svg"
                        />
                        <Instruction
                            steps="Step #2"
                            content='Fill out the request form'
                            picture="/images/step2.svg"
                        />
                        <Instruction
                            steps="Step #3"
                            content='Choose your preferred payment method'
                            picture="/images/step3.svg"
                        />
                        <Instruction
                            steps="Step #4"
                            content='Set appointment date and wait for the registrar’s confirmation through email.'
                            picture="/images/step4.svg"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Request;