import React, { useState } from 'react';
import './TaskList.css';
import WeeklyChest from "./WeeklyChest";
import TreasureChest from "../TreasureChest";
import Lottie from "lottie-react";
import progress from "./progress.json"; // Don't forget to create a CSS file for styling
import { FaCheck, FaCheckCircle, FaCheckDouble, FaCheckSquare, FaTrophy } from 'react-icons/fa';

const TaskList = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Make a transaction using PayPay worth 2000 or more' },
        { id: 2, title: 'Renew your car insurance' }
    ]);

    const [selectedTask, setSelectedTask] = useState(null);

    const [style, setStyle] = useState("light");

    const [style2, setStyle2] = useState("light");

    const handleTaskClick = (taskId) => {
        // setSelectedTask(taskId);
        if (style !== "light") setStyle("light");
        else setStyle("dark");
    };

    const handleTaskClick2 = (taskId) => {
        // setSelectedTask(taskId);
        if (style2 !== "light") setStyle2("light");
        else setStyle2("dark");
    };

    const handleFinalTaskClick = (taskId) => {
        handleTaskClick2()
        setSelectedTask(taskId);
        // if (style !== "light") setStyle("light");
        // else setStyle("dark");
    };

    return (
        <div>
            <div>
                <p><b>Unlock your weekly chest</b></p>
            </div>
            <div className="weeklyChestText">
                Perform these tasks to unlock a special treasure chest
            </div>
            <hr/>

            <div className="task-list">
                <div>
                        <div>
                        <div
                            key={1}
                            onClick={() => handleTaskClick(1)}
                            className={`task-item {selectedTask === 1 ? 'selected' : ''}`, style}
                        >
                            <p className='task-title'>Make a transaction using PayPay worth 2000 or more</p>
                            {/*<p className='task-complete'><FaCheck size={20}/></p>*/}
                            
                        </div>
                        {/*<hr className='stylish-line'/>*/}
                        </div>

                        <div>
                                <div
                                key={2}
                            onClick={() => handleFinalTaskClick(2)}
                            className={`task-item {selectedTask === 2 ? 'selected' : ''}`, style2}
                            >
                            <p className='task-title'>Renew your car insurance</p>
                            {/*<p className='task-complete'><FaCheck size={20}/></p>*/}

                            </div>
                            {/*<hr className='stylish-line'/>*/}
                        </div>

                </div>

                {selectedTask && (
                    <div className="sticker">
                        {/*Sticker!*/}
                        <TreasureChest>

                        </TreasureChest>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TaskList;
