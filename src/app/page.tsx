"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faFilePen } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  // define state
  const [todos, setTodos] = useState([
    { id: 1, task: "" },
    { id: 2, task: "" },
  ]);

  const [inputVal, setInput] = useState("");
  const [id, setId] = useState(0);

  //functions

  const addItem = () => {
    let obj = todos.find((item) => item.id == id);
    console.log("object", obj);

    if (obj) {
      let updatedItems = todos.filter((item) => item.id !== obj.id);
      setTodos([...updatedItems, { task: inputVal, id: id }]);
      setInput("");
      setId(0);
      return;
    }

    setTodos([...todos, { task: inputVal, id: id }]);
    setInput("");
    setId(0);
  };
  // edit function

  const editItem = (id: any) => {
    let obj = todos.find((item) => item.id == id);
    setInput(obj.task);
    setId(obj.id);
  };
  // delete function
  const delItem = (id: any) => {
    let updatedItems = todos.filter((item) => item.id !== id);
    console.log(updatedItems);
    setTodos([...updatedItems]);
  };
  return (
    <main className="font-serif bg-gradient{to right bottom} bg-[#e1b382], bg-[#d7a270] flex min-h-[100vh] justify-center items-center w-[100%]">
      <div className=" bg-[#12343b] min-w-[150px] min-h-[450px] p-[30px] box-border rounded-xl shadow-xl shadow-black mb-1.7">
        <div className="max-w-sm mx-auto p-5">
          <h1 className="text-center text-[40px] m-30px text-[#fff]">
            Todo App
          </h1>
          {/* input div */}
          <div className="flex justify-between gap-5 mt-5  mr-25px text-lg outline-none border-1px border-[#c89666] rounded-lg text-[#ccc]">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInput(e.target.value)}
              className="outline-none w-[210px] border-[1px] border-[#c89666] rounded-lg  p-[15px] bg-[#302c2c]  text-[#ccc] text-lg"
              placeholder="Enter a Todo.."
            />
            <input
              type="number"
              value={id}
              onChange={(e: any) => setId(e.target.value)}
              className="text-yellow-900 w-[45px] bg-yellow-50 p-1 text-lg rounded"
              placeholder="Write ID"
            />
            <button
              onClick={addItem}
              className="mr-10 bg-[#fac594] hover:bg-[#e39b58] w-[20%] text-black p-2 rounded"
            >
              Add Todo's..
            </button>
          </div>
          {/* input div end */}
          <h1 className="text-center text-[40px] m-5 underline text-[white]">
            Task List
          </h1>
          <div className="grid grid-col gap-2 mt-5 ">
            {/* Grid Items */}

            {todos.map((item: any, index: any) => {
              return (
                <div
                  className="max-w-4xl mx-auto shadow w-[55%] bg-blue-50 p-3 mt-5"
                  key={index}
                >
                  <div className="flex justify-between text-lg">
                    <span className="shadow rounded-full h-54 w-8 text-center my-auto ">
                      {index + 1}
                    </span>

                    <span
                      onClick={() => delItem(item.id)}
                      className="shadow rounded-full h-54 w-8 text-center text- cursor-pointer my-auto text-red-500 "
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                  {/*  div data */}
                  <div className="mt-5 shadow rounded text-[30px]">
                    {item.task}
                  </div>
                  <div>
                    <h2
                      onClick={() => editItem(item.id)}
                      className="text-right cursor-pointer"
                    >
                      <FontAwesomeIcon
                        icon={faFilePen}
                        className="text-cyan-600"
                      />
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
