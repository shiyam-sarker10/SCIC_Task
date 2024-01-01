import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect,  } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaClipboardList } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoShieldCheckmark } from "react-icons/io5";
import { BsFillGearFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";


const DashboardAllTask = () => {
  const { user } = useContext(AuthContext);
  console.log(user, "11");
  
  const type = ["todo", "ongoing", "completed"];
  const {
    data: tasks,
    isPending,
    isSuccess,
    refetch
  } = useQuery({
    queryKey: ["tasks", user],
    queryFn: async () => {
      const res = await axios.get(
        `https://scic-server-psi.vercel.app/tasks?email=${user?.email}`
      );
      
      return res.data;
    },
  });
  const onDragEnd = (result) => {
    const { source, destination } = result;
    let draggedTodo = tasks.find((todo) => todo._id === result.draggableId);
    console.log(draggedTodo, "paici");
    draggedTodo.category = destination.droppableId;
    let draggedTodoPosition = tasks.findIndex(
      (todo) => todo._id === source.draggableId
    );
    console.log(result);
    tasks.splice(draggedTodoPosition, 0, draggedTodo.category);
    axios.patch(
      `https://scic-server-psi.vercel.app/updateTask?id=${draggedTodo?._id}`,
      draggedTodo
    );
    
  };
  console.log(tasks);
  useEffect(() => {
    window.document.title = "Taskiee | Add task";
    console.log(tasks);
  }, []);

  // delete 
  const handleDelete = (id) =>{


    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      iconColor: "black",
      showCancelButton: true,
      confirmButtonColor: "black",
      color: "black",
      focusCancel: true,
      cancelButtonColor: "black",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://scic-server-psi.vercel.app/deleteTask?id=${id}`)
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              confirmButtonColor: "black",
              icon: "success",
              iconColor: "black",
              color: "black",

            });
            refetch();
          });
      }
    });
    console.log(id)
    
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mt-20  items-start justify-center ">
        {/* 1 */}
        {type.map((todos) => (
          <Droppable droppableId={todos} key={todos}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`shadow-lg rounded-lg p-3   bg-gradient-to-tr ${
                  snapshot.isDraggingOver ? "bg-black/10" : "bg-white"
                } `}
              >
                <div className="flex gap-4  items-center">
                  <div
                    className={`
                    bg-black
                    w-max
                    p-4
                    rounded-xl

                  `}
                  >
                    {todos === "todo" ? (
                      <FaClipboardList className="text-white text-[40px]" />
                    ) : todos === "ongoing" ? (
                      <BsFillGearFill className="text-white text-[40px]" />
                    ) : (
                      <IoShieldCheckmark className="text-white text-[40px]" />
                    )}
                  </div>
                  <h1 className="font-medium text-2xl text-gray-800">
                    {todos === "todo"
                      ? "To Do"
                      : todos === "ongoing"
                      ? "On Going"
                      : "Completed"}
                  </h1>
                </div>
                {isPending
                  ? "loading..."
                  : isSuccess
                  ? tasks?.map(
                      (item, i) =>
                        todos === item.category && (
                          <Draggable key={i} draggableId={item?._id} index={i}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                draggable
                                className={`p-3 mt-4 border  border-dotted border-black  relative flex shadow-md rounded-lg gap-3 items-center`}
                              >
                                <div className="w-full space-y-2">
                                  <div className="flex items-center   justify-between w-full ">
                                    <div className="text-sm">
                                      <h6 className="font-medium">
                                        Task Priority
                                      </h6>
                                      <h6 className="text-xs">
                                        {item.TaskPriority}
                                      </h6>
                                    </div>
                                    <div className="text-sm">
                                      <h6 className="font-medium">Deadline</h6>
                                      <h6 className="text-xs">
                                        {item.TaskDeadline}
                                      </h6>
                                    </div>
                                  </div>
                                  <div>
                                    <div>
                                      <h4 className="font-semibold  text-sm">
                                        {item?.TaskName}
                                      </h4>
                                    </div>
                                    <p>{item?.TaskMsg}</p>
                                  </div>
                                  <div className="py-2 flex justify-between  gap-4">
                                    <Link onClick={()=>handleDelete(item?._id)}>
                                      <RiDeleteBin6Line className="text-[20px]" />
                                    </Link>
                                    <Link to="/">
                                      <FaRegEdit className="text-[20px]" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        )
                    )
                  : "Not Available"}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default DashboardAllTask;