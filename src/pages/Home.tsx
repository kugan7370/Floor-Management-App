import React from 'react'
import { FaCopy, FaEarthAmericas, FaPlus, FaTrash } from "react-icons/fa6";
import floorIcon from '../assets/icons/floor.svg';
import tableImage1 from '../assets/icons/Table.svg';
import tableImage2 from '../assets/icons/Mid.svg';
import { Rnd } from 'react-rnd';
import incrementImage from '../assets/icons/plus.svg';
import decrementImage from '../assets/icons/mininum-btn.svg';
import { IoMdMore } from 'react-icons/io';
import { MdTableRestaurant } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { addTable, copyTable, deleteTable, resetTables, selectTable, updateTable } from '../redux/tableSlice';
import { GoCopy, GoTrash } from 'react-icons/go';
import { IoEllipseOutline } from 'react-icons/io5';

function Home() {

    const tables = useSelector((state: RootState) => state.tables.tables);
    const selectedTableId = useSelector(
        (state: RootState) => state.tables.selectedTableId
    );

    const selectedTable = useSelector((state: RootState) =>
        state.tables.tables.find((table) => table.id === selectedTableId)
    );

    const dispatch = useDispatch();


    const handleDragStop = (id: string, x: number, y: number) => {
        dispatch(updateTable({ id, updates: { x, y } }));
    };

    const handleResizeStop = (id: string, width: number, height: number) => {
        dispatch(updateTable({ id, updates: { width, height } }));
      };

    const handleSelect = (id: string) => {
        dispatch(selectTable(id));
    };

    const findTotalTables = () => {
        return tables.length;
    }
    const findTotalMainCovers = () => {
        return tables.reduce((total, table) => total + table.minCovers, 0);
    }
    const findTotalMaxCovers = () => {
        return tables.reduce((total, table) => total + table.maxCovers, 0);
    }
    const findTotalOnline = () => {
        return tables.filter((table) => table.online).length;
    }




    return (
        <div className='w-screen h-screen relative'>

            {/* navbar */}
            <div className="px-10 py-1 border border-b-gray-100 flex justify-center">
                <h1 className='text-2xl font-bold text-gray-800 text-center'>Floor Management</h1>
            </div>

            {/* sidebar */}
            <div className="flex justify-center space-y-6 bg-gray-50 absolute top-0 bottom-0 left-0 w-16 border border-r-2 border-gray-100 z-10">
                <ul>
                    <li className="p-4">
                        <img src={floorIcon} alt="home" className='w-5 h-5' />
                    </li>
                    <li className="p-4">
                        <img src={floorIcon} alt="home" className='w-5 h-5' />
                    </li>

                </ul>

            </div>

            {/* content */}
            <div className="ml-[64px] flex h-[calc(100vh-50px)]">

                {/* table section */}
                <div className="w-1/5 border-r-2 h-full">
                    <div className="py-2 px-4  border-b-2 border-b-gray-100">
                        <h1 className='font-bold text-gray-800'>Tables</h1>
                    </div>

                    {/* table details */}
                    <div>
                        {/* 1.table option */}
                        <div className='flex flex-col space-y-6 border-b-2 border-gray-200 p-4'>
                            {/* option title */}
                            <div className="text-center">
                                <h1 className='font-bold text-gray-800'>Table Options</h1>
                                <p className='text-xs text-gray-700'>Drag and drop your tables</p>
                            </div>

                            {/* table images */}
                            <div className="flex items-center">
                                <div className="w-1/2"
                                    onClick={() => dispatch(addTable({ type: 'type1' }))}
                                >
                                    <img src={tableImage1} alt="table" className='w-16 h-16' />
                                </div>
                                <div className="w-1/2"
                                    onClick={() => dispatch(addTable({ type: 'type2' }))}
                                >
                                    <img src={tableImage2} alt="table" className='w-16 h-16' />
                                </div>
                            </div>

                        </div>

                        {/* 2.table option */}
                        <div className='flex flex-col space-y-6 border-b-2 border-gray-200 p-4'>
                            {/* details title */}
                            <div className="text-center">
                                <h1 className='font-bold text-gray-800'>Table Details</h1>
                            </div>

                            {/* table name input */}

                            <div className="flex gap-8 items-center">
                                <div className='flex flex-col space-y-6'>
                                    <label htmlFor="table-name" className='text-gray-700 text-sm'>Table Name</label>
                                    <label htmlFor="min-covers" className='text-gray-700 text-sm'>Min Covers</label>
                                    <label htmlFor="max-covers" className='text-gray-700 text-sm'>Max Covers</label>
                                    <label htmlFor="Online" className='text-gray-700 text-sm'>Online</label>

                                </div>

                                <div className='flex flex-col space-y-6'>
                                    {/* Table name input */}
                                    <input type="text" id='table-name' className='border border-gray-200 p-2 rounded-md w-24 h-8 text-xs font-bold'
                                        value={selectedTable?.name || "Select Table"} onChange={(e) => dispatch(updateTable({ id: selectedTableId!, updates: { name: e.target.value } }))}
                                    />
                                    {/*Min Covers  increament and decreament */}
                                    <div className='flex gap-3 items-center'>
                                        <img src={decrementImage} alt="decrement"
                                            onClick={() => dispatch(updateTable({ id: selectedTableId!, updates: { minCovers: selectedTable!.minCovers - 1 } }))}

                                        />
                                        <p className='font-bold'>{selectedTable?.minCovers || 0}</p>
                                        <img src={incrementImage} alt="decrement"
                                            onClick={() => dispatch(updateTable({ id: selectedTableId!, updates: { minCovers: selectedTable!.minCovers + 1 } }))}

                                        />
                                    </div>

                                    {/* Max Covers  increament and decreament */}
                                    <div className='flex gap-3 items-center'>
                                        <img src={decrementImage} alt="decrement"
                                            onClick={() => dispatch(updateTable({ id: selectedTableId!, updates: { maxCovers: selectedTable!.maxCovers - 1 } }))}
                                        />
                                        <p className='font-bold'>{selectedTable?.maxCovers || 0}</p>
                                        <img src={incrementImage} alt="decrement"
                                            onClick={() => dispatch(updateTable({ id: selectedTableId!, updates: { maxCovers: selectedTable!.maxCovers + 1 } }))}
                                        />
                                    </div>

                                    {/* Active toggle */}
                                    <label htmlFor="toggle" className="relative  items-center cursor-pointer">
                                        <span className="text-gray-700 text-sm">{selectedTable?.online ? 'Active' : 'Inactive'}</span>
                                        <input
                                            id="toggle"
                                            type="checkbox"
                                            className="sr-only"
                                            checked={selectedTable?.online}
                                            onChange={(e) => dispatch(updateTable({ id: selectedTableId!, updates: { online: e.target.checked } }))}
                                        />
                                        <div className="w-11 h-6  bg-gray-200 rounded-full peer transition-colors duration-200 ease-in-out">
                                            <div
                                                className={`w-5 h-5  rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${selectedTable?.online ? 'translate-x-5 bg-red-500' : 'translate-x-0 bg-white'
                                                    }`}

                                            />
                                        </div>
                                    </label>

                                </div>

                            </div>

                        </div>


                    </div>

                </div>
                {/* main room */}

                <div className="w-4/5 relative">
                    <div className="py-2 px-4 flex justify-between items-center  border-b-2 border-b-gray-100">
                        <h1 className='font-bold text-gray-800'>Main Room</h1>

                        {/* 3 buttons */}
                        <div className='flex gap-4 items-center'>
                            <div className="bg-red-700 w-30 px-2 py-1  rounded flex items-center gap-2 cursor-pointer">
                                <FaPlus className='text-white' size={10} />
                                <h1 className='text-white text-xs'>Add Room</h1>
                            </div>

                            <div className="w-30 px-2 py-1  rounded flex items-center gap-2 border border-gray-200 cursor-pointer">
                                <h1 className='text-gray-500 text-xs'>Save Room</h1>
                            </div>

                            {/* reset */}
                            <div className="w-30 px-2 py-1  rounded flex items-center gap-2 border border-gray-200 cursor-pointer" onClick={() => dispatch(resetTables())} >
                                <h1 className='text-gray-500 text-xs'>Reset</h1>
                            </div>

                            <div className="w-30 px-2 py-1  rounded flex items-center gap-2">
                                <IoMdMore size={18} />
                            </div>



                        </div>
                    </div>


                    {tables.map((table) => (
                        <Rnd
                            key={table.id}
                            position={{ x: table.x, y: table.y }}
                            bounds="parent"
                            enableResizing={{ bottomRight: true }}
                            onDragStop={(e, d) => handleDragStop(table.id, d.x, d.y)}
                            onResizeStop={(e, dir, ref, delta, position) =>
                                handleResizeStop(
                                    table.id,
                                    parseInt(ref.style.width),
                                    parseInt(ref.style.height)
                                )
                            }
                            
                            onClick={() => handleSelect(table.id)}
                            className="relative group"
                            style={{
                                transform: `rotate(${table.rotation}deg)`,
                               
                              }}
                        >
                            {/* Tooltip */}
                            <div
                                className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                   text-xs   rounded opacity-0 shadow-md bg-white
                   group-hover:opacity-100 transition-opacity flex space-x-2"
                            >
                                {/* Edit Icon */}
                                <div
                                    className="flex items-center justify-center  bg-white  hover:bg-gray-50 cursor-pointer   p-2 "
                                    onClick={() => handleSelect(table.id)}
                                >
                                    <IoEllipseOutline size={12} />
                                </div>

                                {/* Copy Icon */}
                                <div
                                    className="flex items-center justify-center  bg-white cursor-pointer  hover:bg-gray-50  p-2"
                                    onClick={() => dispatch(copyTable(selectedTableId!))}
                                >
                                    <GoCopy size={12} />
                                </div>

                                {/* Delete Icon */}
                                <div
                                    className="flex items-center justify-center  bg-white cursor-pointer  hover:bg-gray-50  p-2 "
                                    onClick={() => dispatch(deleteTable(selectedTableId!))}
                                >
                                    <GoTrash size={12} />
                                </div>
                            </div>

                            {/* Table */}
                            {table.type === 'type1' ? (
                                <div
                                    style={{
                                        backgroundImage: `url(${tableImage1})`,
                                        backgroundSize: 'contain',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        width: `${table.width}px`,
                                        height: `${table.height}px`,


                                    }}
                                    className={`w-16 h-16  rounded-md flex items-center justify-center`}
                                >
                                </div>
                            ) : (
                                <div
                                    style={{
                                        backgroundImage: `url(${tableImage2})`,
                                        backgroundSize: 'contain',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        width: `${table.width}px`,
                                        height: `${table.height}px`,
                                        

                                    }}
                                    className={`rounded-full flex items-center justify-center`}
                                >
                                </div>
                            )}

                        </Rnd>
                    ))}



                    {/* table details */}

                    <div className="bg-black left-1/2 transform justify-between -translate-x-1/2 absolute bottom-4 mx-auto px-4 py-2 flex gap-10 items-center w-[500px]">
                        <div className="flex items-center gap-2">
                            <MdTableRestaurant className="text-white" size={12} />
                            <span className="text-white text-xs">{findTotalTables()} Tables</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaUserFriends className="text-white" size={12} />
                            <span className="text-white text-xs">{findTotalMainCovers()} Min Covers</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaUserFriends className="text-white" size={12} />
                            <span className="text-white text-xs">{findTotalMaxCovers()} Max Covers</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaEarthAmericas className="text-white" size={12} />
                            <span className="text-white text-xs">{findTotalOnline()} Online</span>
                        </div>
                    </div>



                </div>

            </div>




        </div>
    )
}

export default Home
