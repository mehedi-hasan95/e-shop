import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div>
            <h2 className="text-center text-2xl font-bold mt-20 mb-10">Categories:</h2>
            <div className="categories flex h-[80vh] gap-3">
                <div className="flex h-full flex-col flex-2/4 gap-3">
                    <div className="flex relative gap-3 overflow-hidden h-full">
                        <img className="w-full h-full object-cover"
                            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt=""
                        />
                        <button className="absolute min-w-[100px] h-12 p-3 top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none bg-white uppercase font-semibold w-fit">
                            <Link className="link" to="/cetegory/1">
                                Sale
                            </Link>
                        </button>
                    </div>
                    <div className="flex relative gap-3 overflow-hidden h-full">
                        <img className="w-full h-full object-cover"
                            src="https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt=""
                        />
                        <button className="absolute min-w-[100px] h-12 p-3 top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none bg-white uppercase font-semibold w-fit">
                            <Link to="/cetegory/2" className="link">
                                Women
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="flex h-full flex-col flex-2/4">
                    <div className="flex relative gap-3 overflow-hidden h-full">
                        <img className="w-full h-full object-cover"
                            src="https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                            alt=""
                        />
                        <button className="absolute min-w-[100px] h-12 p-3 top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none bg-white uppercase font-semibold w-fit">
                            <Link to="/cetegory/3" className="link">
                                New Season
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="flex h-full flex-col flex-1/2 gap-3">
                    <div className="flex relative gap-3 overflow-hidden h-full">
                        <div className="w-full">
                            <div className="flex relative gap-3 overflow-hidden h-full">
                                <img className="w-full h-full object-cover"
                                    src="https://images.unsplash.com/photo-1507114845806-0347f6150324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                    alt=""
                                />
                                <button className="absolute min-w-[100px] h-12 p-3 top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none bg-white uppercase font-semibold w-fit">
                                    <Link to="/cetegory/4" className="link">
                                        Men
                                    </Link>
                                </button>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="flex relative gap-3 overflow-hidden h-full">
                                <img className="w-full h-full object-cover"
                                    src="https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                    alt=""
                                />
                                <button className="absolute min-w-[100px] h-12 p-3 top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none bg-white uppercase font-semibold w-fit">
                                    <Link to="/cetegory/5" className="link">
                                        Accessories
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative gap-3 overflow-hidden h-full">
                        <img className="w-full h-full object-cover"
                            src="https://images.unsplash.com/photo-1618554754947-e01d5ce3c549?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt=""
                        />
                        <button className="absolute min-w-[100px] h-12 p-3 top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none bg-white uppercase font-semibold w-fit">
                            <Link to="/cetegory/6" className="link">
                                Winter
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;