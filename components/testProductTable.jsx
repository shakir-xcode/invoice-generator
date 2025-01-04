"use client";

import { getProductAmount, getSubtotal } from "@/lib/calculations";
import React, { useState } from "react";

const ProductTable = () => {
  console.log("product table rendered...");
  const selectedCurrency = "$";
  const selectedCurrencyLabel = "usd";

  const [itemList, setItemList] = useState([
    { id: Date.now(), description: "", quantity: 1, rate: 0, amount: 0 },
  ]);

  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [amountPaid, setAmountPaid] = useState(0);
  const [balanceDue, setBalanceDue] = useState(0);

  const itemChangeHandler = (e) => {
    const index = e.target.id.split("-")[1];
    const id = e.target.id.split("-")[0];

    const newItems = [...itemList];
    newItems[index][id] = e.target.value;
    newItems[index]["amount"] = getProductAmount(
      parseFloat(newItems[index]["rate"]),
      parseFloat(newItems[index]["quantity"])
    );

    setItemList(newItems);
    setSubtotal(getSubtotal(newItems));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert(JSON.stringify(itemList));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <table className="w-full mt-6">
          {/* item table heading */}
          <thead className="hidden sm:block">
            <tr
              className="flex  bg-secondary-accent text-text-secondary  px-3 py-2
           rounded font-normal text-sm text-left "
            >
              <th className="w-[58%] font-semibold text-start ">Product</th>
              <th className="w-[12.5%] font-semibold text-start ">Quantity</th>
              <th className="w-[12.5%] font-semibold text-start">
                Rate&nbsp;
                {/* <span>{`( ${selectedCurrency} )`}</span> */}
              </th>
              <th className="w-[15%] font-semibold pl-4">
                Amount&nbsp;
                {/* <span>{`( ${selectedCurrency} )`}</span> */}
              </th>
            </tr>
          </thead>

          <tbody className=" flex flex-col gap-3 sm:gap-0">
            {itemList.map((item, index) => {
              return (
                <tr
                  key={index}
                  className=" relative border sm:border-0  rounded flex flex-wrap
            sm:px-0 px-3 py-2 font-normal text-sm text-left gap-2 -mb-1.5 group"
                >
                  <td className=" sm:w-[55%]   sm:-ml- ">
                    <input
                      onChange={itemChangeHandler}
                      placeholder="Item description..."
                      type="text"
                      name={`description-${index}`}
                      id={`description-${index}`}
                      className="w-full border px-3 py-2  rounded "
                      value={item.description}
                    />
                  </td>

                  <td className=" w-[80px] sm:w-[12.5%] ">
                    <input
                      onChange={itemChangeHandler}
                      type="number"
                      name={`quantity-${index}`}
                      id={`quantity-${index}`}
                      className="w-full border px-3 py-2 rounded"
                      value={item.quantity}
                    />
                  </td>

                  <td className=" w-[80px] sm:w-[12.5%] border rounded flex items-center">
                    {/* <span className="px-1"> {selectedCurrency}</span> */}
                    <input
                      onChange={itemChangeHandler}
                      type="number"
                      name={`rate-${index}`}
                      id={`rate-${index}`}
                      className=" w-full rounded px-3 py-2 grow "
                      value={`${item.rate}`}
                    />
                  </td>

                  <td className="  text-nowrap gap-6 w-[80px] sm:w-[15%] px-2 py-2 rounded">
                    <p>{` ${selectedCurrencyLabel} ${item.amount}`}</p>
                  </td>
                  {itemList.length > 1 && (
                    <td
                      title="remove item"
                      className=" absolute p-4 -right-1 md:right-7 text-secondary-accent 
                      px-2  py-1 text-2xl  rounded-full font-semibold rotate-45  
                      opacity-0 group-hover:opacity-100 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        const tempList = [...itemList];
                        tempList.splice(index, 1);
                        setItemList(tempList);
                      }}
                    >
                      +
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>

        <button
          className=" rounded-md  px-2.5 mt-3 
          hover:bg-secondary-accent hover:text-white border-2 
          border-secondary-accent transition duration-300"
          onClick={(e) => {
            e.preventDefault();
            setItemList((items) => [
              ...items,
              {
                id: Date.now(),
                description: "",
                quantity: 1,
                rate: 0,
                amount: 0,
              },
            ]);
          }}
        >
          <span className=" text-xl">+</span> Add Item
        </button>
      </form>
    </div>
  );
};

export default ProductTable;
